"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/assets/hero-bg.jpg" 
          alt="Lebanese Desserts" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <div className="w-24 h-1 bg-[#C99B3C] mx-auto mb-4" />
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#F5EFE6] leading-tight drop-shadow-lg">
            {t('hero.title')}
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#F5EFE6]/90 mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md"
        >
          {t('hero.subtitle')}
        </motion.p>

        <div className="flex flex-row items-center justify-center gap-4 overflow-hidden py-2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Button asChild variant="outline" className="bg-white/5 backdrop-blur-md border-[#F5EFE6]/30 text-[#F5EFE6] hover:bg-[#F5EFE6] hover:text-[#0D6D7E] px-8 py-6 text-base rounded-full transition-all duration-500 border-2 group">
              <Link to="/menu" className="flex items-center gap-2">
                {t('hero.cta.menu')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Button asChild variant="outline" className="bg-white/5 backdrop-blur-md border-[#F5EFE6]/30 text-[#F5EFE6] hover:bg-[#F5EFE6] hover:text-[#0D6D7E] px-8 py-6 text-base rounded-full transition-all duration-500 border-2">
              <Link to="/contact">{t('hero.cta.visit')}</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Arch Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5EFE6] to-transparent z-20" />
    </section>
  );
};

export default Hero;