"use client";

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import MenuPage from "./pages/Menu";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = async () => {
      const windowLoadPromise = new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve(true);
        } else {
          window.addEventListener('load', () => resolve(true));
        }
      });

      const minTimePromise = new Promise((resolve) => setTimeout(resolve, 3500));
      await Promise.all([windowLoadPromise, minTimePromise]);
      setIsLoading(false);
    };

    handleLoading();
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
};

export default App;