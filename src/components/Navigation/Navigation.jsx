import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiGithub, FiMessageCircle } from "react-icons/fi";

export const Navigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/features", text: "Features" },
    { href: "/about", text: "About" },
    // { href: "/documentation", text: "Documentation" },
    { href: "/learn", text: "Learn" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                BN
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Bootnode
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Learn
              </Link>
              <Link
                to="#"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-96 py-4 border-t border-gray-200 mt-2"
              : "max-h-0 py-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-4 bg-white/90 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              {/* <Link
                to="/documentation"
                className="block w-full px-4 py-2 text-center text-base font-medium text-indigo-600 hover:bg-indigo-50 rounded-md mb-2"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link> */}
              <Link
                to="/contact"
                className="block w-full px-4 py-2 text-center text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
