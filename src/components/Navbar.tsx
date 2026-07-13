import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './ui/Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Our Products', 
    path: '/products',
    dropdown: [
      { name: 'Solar PV Module', path: '/products/pv-module' },
      { name: 'Solar Light System', path: '/products/street-light' },
      { name: 'Solar Water Pump', path: '/products/water-pump' },
      { name: 'Solar Inverters', path: '/products/inverters' },
      { name: 'Inverters & Battery', path: '/products/batteries' },
      { name: 'Accessories', path: '/products/accessories' },
    ]
  },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Support', path: '/contact' },
];

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 glass">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center justify-center group pt-1">
              <img 
                src="/sb_logo.png" 
                alt="SB Solar Energy" 
                className="h-4 md:h-8 w-auto object-contain rounded shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-bold text-sm md:text-base text-slate-900 tracking-tight mt-1 leading-none">
                SB SOLAR <span className="text-primary">ENERGY</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-[15px] font-semibold tracking-wide transition-all duration-300 flex items-center group/navlink rounded-t-md",
                    location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-slate-600 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                  
                  {/* Animated Bottom Border */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-full transition-transform duration-300 origin-left",
                    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover/navlink:scale-x-100"
                  )}></span>
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          to={dropLink.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary"
                          role="menuitem"
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full right-0 w-72 bg-white border-t border-slate-200 shadow-2xl origin-top-right rounded-bl-3xl overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className={cn(
                    "flex items-center justify-between rounded-r-md border-l-4 transition-all duration-200",
                    location.pathname.startsWith(link.path) || activeDropdown === link.name
                      ? "bg-primary/10 border-primary shadow-sm"
                      : "border-transparent hover:bg-slate-50"
                  )}>
                    <Link
                      to={link.path}
                      className={cn(
                        "block px-4 py-3 text-base font-semibold flex-1",
                        location.pathname === link.path ? "text-primary" : "text-slate-700 hover:text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={cn(
                        "p-3 transition-colors",
                        activeDropdown === link.name ? "text-primary" : "text-slate-500 hover:text-primary"
                      )}
                    >
                      <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                    </button>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 rounded-r-md text-base font-semibold transition-all duration-200",
                      location.pathname === link.path
                        ? "text-primary bg-primary/10 shadow-sm border-l-4 border-primary"
                        : "text-slate-700 hover:text-primary hover:bg-slate-50 border-l-4 border-transparent"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
                
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1 bg-slate-50/50 py-2 rounded-lg border-l-2 border-slate-100 ml-2">
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.name}
                            to={dropLink.path}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropLink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export default Navbar;
