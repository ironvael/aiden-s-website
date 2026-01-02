import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetail from "@/pages/ProjectDetail";
import ThoughtsPage from "@/pages/ThoughtsPage";
import ThoughtDetail from "@/pages/ThoughtDetail";
import DemoPage from "@/pages/DemoPage";
import NotFound from "@/pages/NotFound";
import PageTransition from "./PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          }
        />
        <Route
          path="/thoughts"
          element={
            <PageTransition>
              <ThoughtsPage />
            </PageTransition>
          }
        />
        <Route
          path="/thoughts/:slug"
          element={
            <PageTransition>
              <ThoughtDetail />
            </PageTransition>
          }
        />
        <Route
          path="/demo"
          element={
            <PageTransition>
              <DemoPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
