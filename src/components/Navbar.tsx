"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = location.pathname === '/' 
        ? window.innerHeight * 0.8 
        : window.innerHeight * 0.4;
        
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const LanguageToggle = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center space-x-2", className)}>
      <button 
        onClick={() => setLanguage('en')}
        className={cn("text-xs font-bold transition-colors", language === 'en' ? "text-[#C99B3C]" : "text-[#F5EFE6]/60 hover:text-[#F5EFE6]")}
      >
        EN
      </button>
      <span className="text-[#F5EFE6]/20">|</span>
      <button 
        onClick={() => setLanguage('ro')}
        className={cn("text-xs font-bold transition-colors", language === 'ro' ? "text-[#C99B3C]" : "text-[#F5EFE6]/60 hover:text-[#F5EFE6]")}
      >
        RO
      </button>
    </div>
  );

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6",
        scrolled 
          ? "bg-[#0D6D7E]/30 backdrop-blur-2xl shadow-lg py-3" 
          : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex flex-col items-start group"
          >
            <span className="text-xl font-serif font-bold text-[#F5EFE6] tracking-wider leading-none">
              DELICII <span className="text-[#C99B3C]">LIBANEZE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C99B3C] font-bold mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              by jaber
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors hover:text-[#C99B3C]",
                  location.pathname === link.path ? "text-[#C99B3C]" : "text-[#F5EFE6]"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <LanguageToggle className="border-l border-[#F5EFE6]/20 pl-6" />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageToggle />
            <button 
              className="text-[#F5EFE6] p-2 -mr-2" 
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0D6D7E]"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col p-8"
            >
              <div className="flex justify-end">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-[#F5EFE6] p-2 -mr-2"
                  aria-label="Close Menu"
                >
                  <X size={32} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-4xl font-serif transition-colors",
                      location.pathname === link.path ? "text-[#C99B3C]" : "text-[#F5EFE6]"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <p className="text-[#F5EFE6]/40 text-xs uppercase tracking-widest mb-4">Select Language</p>
                <div className="flex space-x-8">
                  <button 
                    onClick={() => { setLanguage('en'); setIsOpen(false); }}
                    className={cn("text-2xl font-bold transition-colors", language === 'en' ? "text-[#C99B3C]" : "text-[#F5EFE6]/60")}
                  >
                    ENGLISH
                  </button>
                  <button 
                    onClick={() => { setLanguage('ro'); setIsOpen(false); }}
                    className={cn("text-2xl font-bold transition-colors", language === 'ro' ? "text-[#C99B3C]" : "text-[#F5EFE6]/60")}
                  >
                    ROMÂNĂ
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;