"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import hero image
import galleryHero from '@/assets/gallery-hero.jpg';

// Import all gallery photos (Removed missing: 17, 22, 42, 50)
import photo1 from '@/assets/gallery/photo-1.jpg';
import photo2 from '@/assets/gallery/photo-2.jpg';
import photo3 from '@/assets/gallery/photo-3.jpg';
import photo4 from '@/assets/gallery/photo-4.jpg';
import photo5 from '@/assets/gallery/photo-5.jpg';
import photo6 from '@/assets/gallery/photo-6.jpg';
import photo7 from '@/assets/gallery/photo-7.jpg';
import photo8 from '@/assets/gallery/photo-8.jpg';
import photo9 from '@/assets/gallery/photo-9.jpg';
import photo10 from '@/assets/gallery/photo-10.jpg';
import photo11 from '@/assets/gallery/photo-11.jpg';
import photo12 from '@/assets/gallery/photo-12.jpg';
import photo13 from '@/assets/gallery/photo-13.jpg';
import photo14 from '@/assets/gallery/photo-14.jpg';
import photo15 from '@/assets/gallery/photo-15.jpg';
import photo16 from '@/assets/gallery/photo-16.jpg';
import photo18 from '@/assets/gallery/photo-18.jpg';
import photo19 from '@/assets/gallery/photo-19.jpg';
import photo20 from '@/assets/gallery/photo-20.jpg';
import photo21 from '@/assets/gallery/photo-21.jpg';
import photo23 from '@/assets/gallery/photo-23.jpg';
import photo24 from '@/assets/gallery/photo-24.jpg';
import photo25 from '@/assets/gallery/photo-25.jpg';
import photo26 from '@/assets/gallery/photo-26.jpg';
import photo27 from '@/assets/gallery/photo-27.jpg';
import photo28 from '@/assets/gallery/photo-28.jpg';
import photo29 from '@/assets/gallery/photo-29.jpg';
import photo30 from '@/assets/gallery/photo-30.jpg';
import photo31 from '@/assets/gallery/photo-31.jpg';
import photo32 from '@/assets/gallery/photo-32.jpg';
import photo33 from '@/assets/gallery/photo-33.jpg';
import photo34 from '@/assets/gallery/photo-34.jpg';
import photo35 from '@/assets/gallery/photo-35.jpg';
import photo36 from '@/assets/gallery/photo-36.jpg';
import photo37 from '@/assets/gallery/photo-37.jpg';
import photo38 from '@/assets/gallery/photo-38.jpg';
import photo39 from '@/assets/gallery/photo-39.jpg';
import photo40 from '@/assets/gallery/photo-40.jpg';
import photo41 from '@/assets/gallery/photo-41.jpg';
import photo43 from '@/assets/gallery/photo-43.jpg';
import photo44 from '@/assets/gallery/photo-44.jpg';
import photo45 from '@/assets/gallery/photo-45.jpg';
import photo46 from '@/assets/gallery/photo-46.jpg';
import photo47 from '@/assets/gallery/photo-47.jpg';
import photo48 from '@/assets/gallery/photo-48.jpg';
import photo49 from '@/assets/gallery/photo-49.jpg';

const rawPhotos = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15, photo16, photo18, photo19, photo20,
  photo21, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30,
  photo31, photo32, photo33, photo34, photo35, photo36, photo37, photo38, photo39, photo40,
  photo41, photo43, photo44, photo45, photo46, photo47, photo48, photo49
];

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const shuffledPhotos = useMemo(() => {
    return [...rawPhotos].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      
      <main>
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={galleryHero} 
              className="w-full h-full object-cover"
              alt="Gallery Hero"
            />
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#F5EFE6] to-transparent z-20" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-30 text-center px-6"
          >
            <motion.span 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#C99B3C] uppercase tracking-[0.4em] text-xs font-bold mb-4 block drop-shadow-sm"
            >
              {t('gallery.subtitle')}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F5EFE6] mb-6 drop-shadow-lg">
              {t('gallery.title')}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-[#C99B3C] mx-auto" 
            />
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6"
          >
            {shuffledPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.05 }}
                className="relative group cursor-zoom-in rounded-xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 break-inside-avoid"
                onClick={() => setSelectedMedia(photo)}
              >
                <img 
                  src={photo} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <ZoomIn size={18} className="md:hidden" />
                    <ZoomIn size={24} className="hidden md:block" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
              <X size={32} className="md:hidden" />
              <X size={40} className="hidden md:block" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedMedia} 
                alt="Gallery Preview" 
                className="max-w-full max-h-full object-contain rounded-lg md:rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;