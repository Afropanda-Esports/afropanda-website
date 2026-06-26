import { useLayoutEffect, useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(300px circle at ${pos.x}% ${pos.y}%, rgba(204,85,0,0.12), transparent 40%)`,
      }}
    />
  );
}

// Import pages
import { About, AmbassadorPage, Home } from "./pages";
import EventsPage from "./pages/EventsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePostPage from "./pages/ArticlePostPage";

// Shared Components
import Header from "./components/Header2";
import Footer from "./components/Footer";
import Internship from "./pages/Internship";

function LegacyBlogToArticles() {
  return <Navigate to="/articles" replace />;
}

function LegacyBlogSlugToArticle() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/articles/${slug}` : "/articles"} replace />;
}

export default function App() {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#191825]">
      <CursorGlow />
      <Header />
      <main className="flex-grow bg-[#191825] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePostPage />} />
          <Route path="/blog" element={<LegacyBlogToArticles />} />
          <Route path="/blog/:slug" element={<LegacyBlogSlugToArticle />} />
          <Route path="/ambassador" element={<AmbassadorPage />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
