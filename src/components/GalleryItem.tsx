"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

interface GalleryItemProps {
  photo: string;
  index: number;
  onClick: (photo: string) => void;
}

const GalleryItem = ({ photo, index, onClick }: GalleryItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.8, delay: (index % 6) * 0.05 }}
      className="relative group cursor-zoom-in rounded-xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 break-inside-avoid mb-3 md:mb-6 bg-[#0D6D7E]/5"
      onClick={() => onClick(photo)}
    >
      {/* Placeholder/Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-[#0D6D7E]/10" />
      )}
      
      <motion.img 
        src={photo} 
        alt={`Gallery ${index + 1}`} 
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <ZoomIn size={18} className="md:hidden" />
          <ZoomIn size={24} className="hidden md:block" />
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;