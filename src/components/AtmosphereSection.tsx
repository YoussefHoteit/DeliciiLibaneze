"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import atmosphereImg from '../assets/atmosphere-new.jpg';

const AtmosphereSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 bg-[#0D6D7E] overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Arched Image Container */}
          <div className="relative aspect-[4/5] rounded-t-full overflow-hidden border-8 border-[#C99B3C]/30">
            <img 
              src={atmosphereImg} 
              alt="Interior Atmosphere" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Decorative Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#A55443] rounded-full flex items-center justify-center p-8 shadow-2xl hidden md:flex"
          >
            <p className="text-[#F5EFE6] text-center font-serif italic text-lg">
              {t('atmosphere.tagline')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#F5EFE6]"
        >
          <motion.span 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#C99B3C] uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
          >
            {t('atmosphere.subtitle')}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            {t('atmosphere.title')}
          </h2>
          <p className="text-lg text-[#F5EFE6]/80 mb-10 leading-relaxed font-light">
            {t('atmosphere.text')}
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-[#C99B3C] font-serif text-2xl mb-2">{t('atmosphere.feature.1.title')}</h4>
              <p className="text-sm text-[#F5EFE6]/60">{t('atmosphere.feature.1.desc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-[#C99B3C] font-serif text-2xl mb-2">{t('atmosphere.feature.2.title')}</h4>
              <p className="text-sm text-[#F5EFE6]/60">{t('atmosphere.feature.2.desc')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtmosphereSection;