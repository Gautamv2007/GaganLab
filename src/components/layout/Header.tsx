
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", target: "home" },
    { label: "Vision & Mission", target: "vision" },
    { label: "About Us", target: "about" },
    { label: "Team", target: "team" },
    { label: "Careers", target: "careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gagan-dark/95 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="home" smooth={true} duration={800} className="cursor-pointer">
            <motion.div
              initial={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
              animate={{ 
                opacity: isScrolled ? 1 : 0, 
                scale: isScrolled ? 1 : 0,
                x: isScrolled ? 0 : 100
              }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-2xl"
            >
              <motion.img 
                src="/logonew.png" 
                alt="Gagan Labs Logo" 
                className="h-8 mr-2 inline-block"
                style={{ opacity: isScrolled ? 1 : 0, transition: 'opacity 0.5s ease-out' }}
              />
              <span className="text-gagan-purple">Gagan</span> Labs
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="cursor-pointer"
            >
              <div
                className="text-white/80 hover:text-gagan-purple transition-colors relative"
              >
                {item.label}
                <div
                  className="absolute -bottom-1 left-0 h-[2px] bg-gagan-purple w-0 hover:w-full transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div
            className="md:hidden bg-gagan-dark/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="block py-3 border-b border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className="text-white/80 hover:text-gagan-purple transition-colors"
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
