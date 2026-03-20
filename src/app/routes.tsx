import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { UniversityPage } from "./pages/UniversityPage";
import { MunicipalityPage } from "./pages/MunicipalityPage";
import { RecruitmentPage } from "./pages/RecruitmentPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { ContactAdmin } from "./components/ContactAdmin";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: LandingPage,
    },
    {
      path: "/university",
      Component: UniversityPage,
    },
    {
      path: "/municipality",
      Component: MunicipalityPage,
    },
    {
      path: "/recruitment",
      Component: RecruitmentPage,
    },
    {
      path: "/case-study",
      Component: CaseStudyPage,
    },
    {
      path: "/admin/contacts",
      Component: ContactAdmin,
    },
  ],
  {
    basename: "/Tesutemofromfigma",
  }
);