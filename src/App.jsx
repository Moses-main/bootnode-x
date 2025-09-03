import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import "./App.css";

// Components
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";

// Learn Pages
import SetupGuide from "./pages/learn/SetupGuide";
import Installation from "./pages/learn/Installation";
import Configuration from "./pages/learn/Configuration";
import Authentication from "./pages/learn/Authentication";
import ApiRoutes from "./pages/learn/ApiRoutes";
import Database from "./pages/learn/Database";
import Validation from "./pages/learn/Validation";
import Middleware from "./pages/learn/Middleware";

// Layout
import DocumentationLayout from "./components/Documentation/DocumentationLayout";

// Menu items for documentation
const menuItems = [
  {
    title: 'Getting Started',
    id: 'getting-started',
    items: [
      { name: 'Setup Guide', path: '/learn/setup' },
      { name: 'Installation', path: '/learn/installation' },
      { name: 'Configuration', path: '/learn/configuration' },
    ]
  },
  {
    title: 'Core Features',
    id: 'core-features',
    items: [
      { name: 'Authentication', path: '/learn/authentication' },
      { name: 'API Routes', path: '/learn/api-routes' },
      { name: 'Database', path: '/learn/database' },
      { name: 'Validation', path: '/learn/validation' },
    ]
  },
  {
    title: 'Advanced',
    id: 'advanced',
    items: [
      { name: 'Middleware', path: '/learn/middleware' },
    ]
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log('App component rendering');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Router>
        <Navigation scrolled={scrolled} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/documentation" element={<Documentation />} />
            
            {/* Learn routes with DocumentationLayout */}
            <Route path="/learn" element={
              <DocumentationLayout menuItems={menuItems}>
                <Outlet />
              </DocumentationLayout>
            }>
              <Route index element={<Navigate to="setup" replace />} />
              <Route path="setup" element={<SetupGuide />} />
              <Route path="installation" element={<Installation />} />
              <Route path="configuration" element={<Configuration />} />
              <Route path="authentication" element={<Authentication />} />
              <Route path="api-routes" element={<ApiRoutes />} />
              <Route path="database" element={<Database />} />
              <Route path="validation" element={<Validation />} />
              <Route path="middleware" element={<Middleware />} />
              <Route path="*" element={<div className="p-6">Page not found</div>} />
            </Route>
            
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="p-6">Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
