import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-207f641b/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-207f641b/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json(
        { error: "Name, email, and message are required" },
        400
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Create a unique key for the submission
    const timestamp = Date.now();
    const submissionId = `contact_${timestamp}_${Math.random().toString(36).substring(7)}`;

    // Store the submission in the KV store
    const submission = {
      id: submissionId,
      name,
      email,
      company: company || "",
      message,
      timestamp: new Date().toISOString(),
      status: "new",
    };

    await kv.set(submissionId, submission);

    console.log(`Contact form submission received: ${submissionId}`, {
      name,
      email,
      company,
    });

    return c.json({
      success: true,
      message: "Contact form submitted successfully",
      submissionId,
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return c.json(
      { error: "Failed to process contact form submission" },
      500
    );
  }
});

// Get all contact form submissions (for admin viewing)
app.get("/make-server-207f641b/contacts", async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");
    
    // Sort by timestamp (newest first)
    const sortedContacts = contacts.sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime();
      const timeB = new Date(b.timestamp).getTime();
      return timeB - timeA;
    });

    return c.json({
      success: true,
      count: sortedContacts.length,
      contacts: sortedContacts,
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return c.json(
      { error: "Failed to fetch contact submissions" },
      500
    );
  }
});

Deno.serve(app.fetch);