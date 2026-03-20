import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Context } from '../components/Context';
import { Process } from '../components/Process';
import { About } from '../components/About';
import { UseCases } from '../components/UseCases';
import { Features } from '../components/Features';
import { Customers } from '../components/Customers';
import { RssFeed } from '../components/RssFeed';
import { Contact } from '../components/Contact';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Context />
      <Process />
      <About />
      <UseCases />
      <Features />
      <Customers />
      <RssFeed />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
