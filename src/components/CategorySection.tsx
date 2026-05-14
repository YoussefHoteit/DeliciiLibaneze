"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import categoryDesserts from '@/assets/category-desserts.jpg';
import categoryIceCream from '@/assets/category-icecream.jpg';
import categoryCoffee from '@/assets/category-coffee.jpg';
import categoryJuices from '@/assets/category-juices.jpg';

const categories = [
  { id: 'desserts', titleKey: 'cat.desserts', img: categoryDesserts, menuId: 'desserts' },
  { id: 'icecream', titleKey: 'cat.icecream', img: categoryIceCream, menuId: 'desserts' },
  { id: 'coffee', titleKey: 'cat.coffee', img: categoryCoffee, menuId: 'drinks' },
  { id: 'juices', titleKey: 'cat.juices', img: categoryJuices, menuId: 'drinks' },
];

const CategorySection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  }, []);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isDragging, activeIndex]);

  const cardOffset = useMemo(() => (windowWidth < 768 ? 300 : 480), [windowWidth]);

  return (
    <section className="pt-0 pb-24 bg-[#F5EFE6] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-end">
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-[#0D6D7E]/20 flex items-center justify-center text-[#0D6D7E] hover:bg-[#0D6D7E] hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-[#0D6D7E]/20 flex items-center justify-center text-[#0D6D7E] hover:bg-[#0D6D7E] hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative w-full cursor-grab active:cursor-grabbing">
        <div className="flex items-center justify-center overflow-visible">
          <div className="relative w-full max-w-[1400px] h-[500px] md:h-[600px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {categories.map((category, index) => {
                let position = index - activeIndex;
                if (position < -1) position += categories.length;
                if (position > 1) position -= categories.length;

                const isActive = position === 0;
                const isVisible = Math.abs(position) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8, x: position * cardOffset }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.85,
                      x: position * cardOffset,
                      zIndex: isActive ? 10 : 5,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      mass: 0.8
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={(_, info) => {
                      setIsDragging(false);
                      if (info.offset.x > 50) prevSlide();
                      else if (info.offset.x < -50) nextSlide();
                    }}
                    style={{ willChange: "transform, opacity" }}
                    className="absolute w-[280px] sm:w-[350px] md:w-[450px] aspect-[3/4] md:aspect-[4/5]"
                  >
                    <Link 
                      to="/menu" 
                      state={{ categoryId: category.menuId }} 
                      className={cn(
                        "block w-full h-full group relative rounded-[2rem] overflow-hidden transition-shadow duration-500",
                        isActive ? "shadow-2xl ring-4 ring-[#C99B3C]/20" : "shadow-lg"
                      )}
                    >
                      <img 
                        src={category.img} 
                        alt={t(category.titleKey)} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-8 text-center">
                        <div className="space-y-4">
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F5EFE6] tracking-wide">
                            {t(category.titleKey)}
                          </h3>
                          <div className={cn(
                            "w-12 h-1 bg-[#C99B3C] mx-auto transition-all duration-500",
                            isActive ? "w-20" : "w-8"
                          )} />
                          <div className={cn(
                            "flex items-center justify-center gap-2 text-[#C99B3C] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500",
                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          )}>
                            <span>View Menu</span>
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-3">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              activeIndex === index 
                ? "w-8 bg-[#C99B3C]" 
                : "w-2 bg-[#0D6D7E]/20 hover:bg-[#0D6D7E]/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="md:hidden absolute bottom-24 left-0 right-0 flex justify-between px-6 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#0D6D7E] pointer-events-auto"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#0D6D7E] pointer-events-auto"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CategorySection;