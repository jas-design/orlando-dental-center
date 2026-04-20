import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <a href="tel:407-851-7740" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} fill="currentColor" />
              <span>407-851-7740</span>
            </a>
            <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
              <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                <img src="https://flagcdn.com/w20/br.png" className="w-4 h-3 object-cover" alt="PT" />
                <span>Português</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                <img src="https://flagcdn.com/w20/us.png" className="w-4 h-3 object-cover" alt="EN" />
                <span>English</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Type a word to find" 
                className="bg-white/10 border border-white/20 rounded px-3 py-1 text-[10px] w-48 focus:bg-white focus:text-slate-900 outline-none transition-all placeholder:text-white/60"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white group-focus-within:text-slate-400">SEARCH</button>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-white py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center p-2 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
              {/* This represents the plus sign logo usually seen in the reference */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white rounded-full -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 w-1.5 h-full bg-white rounded-full -translate-x-1/2" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-black leading-none tracking-tighter">
                <span className="text-secondary">ORLANDO</span>
                <span className="text-primary ml-1">DENTAL</span>
              </span>
              <span className="text-[10px] text-secondary font-black tracking-[0.3em] uppercase opacity-70">
                Center & Orthodontics
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:407-851-7740" className="flex items-center gap-1.5 text-secondary font-semibold hover:text-primary transition-colors">
              <Phone size={18} />
              <span>407-851-7740</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calendar size={18} />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="my-2 border-slate-100" />
                <div className="flex flex-col gap-4">
                  <a href="tel:407-851-7740" className="flex items-center gap-3 text-secondary font-semibold">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span>407-851-7740</span>
                  </a>
                  <Link
                    to="/contact"
                    className="bg-primary text-white w-full py-4 rounded-xl font-bold text-center shadow-lg shadow-primary/20"
                  >
                    Book Appointment
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
