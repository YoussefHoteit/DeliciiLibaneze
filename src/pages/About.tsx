"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import aboutHero from '@/assets/about-hero-new.jpg';
import storyImage from '@/assets/story-image.jpg';
import craftPastries from '@/assets/craft-pastries.jpg';
import craftIceCream from '@/assets/craft-icecream.jpg';
import craftBaklava from '@/assets/craft-baklava.jpg';
import craftLemonade from '@/assets/craft-lemonade.jpg';
import hospitalityHero from '@/assets/hospitality-hero.jpg';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={aboutHero} 
              className="w-full h-full object-cover"
              alt="About Hero"
            />
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#F5EFE6] to-transparent z-20" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-30 text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F5EFE6] mb-4 drop-shadow-lg">
              {t('about.title')}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-[#C99B3C] mx-auto" 
            />
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 relative z-30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.span 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#A55443] uppercase tracking-[0.4em] text-xs font-bold block"
              >
                {t('about.subtitle')}
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D6D7E] leading-tight">
                Tradition Meets <br /> Modern Elegance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {t('about.text')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-[#C99B3C]/20">
                <img 
                  src={storyImage} 
                  className="w-full h-full object-cover"
                  alt="Story Image"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#0D6D7E] rounded-full flex items-center justify-center p-6 text-center hidden md:flex shadow-2xl"
              >
                <p className="text-[#F5EFE6] font-serif italic text-lg">Handcrafted with Love</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-24 bg-[#0D6D7E] text-[#F5EFE6] px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                {t('about.craft.title')}
              </h2>
              <p className="text-lg text-[#F5EFE6]/80 leading-relaxed font-light mb-8">
                {t('about.craft.text')}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                  className="border-l-2 border-[#C99B3C] pl-6"
                >
                  <h4 className="text-2xl font-serif text-[#C99B3C] mb-2">Premium</h4>
                  <p className="text-sm text-[#F5EFE6]/60">Only the finest pistachios and honey.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="border-l-2 border-[#C99B3C] pl-6"
                >
                  <h4 className="text-2xl font-serif text-[#C99B3C] mb-2">Artisanal</h4>
                  <p className="text-sm text-[#F5EFE6]/60">Small batches for maximum freshness.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:order-1 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={craftPastries} 
                  className="rounded-2xl aspect-square object-cover shadow-lg" 
                  alt="Artisanal Pastries" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={craftIceCream} 
                  className="rounded-2xl aspect-[3/4] object-cover shadow-lg" 
                  alt="Arabic Ice Cream" 
                />
              </div>
              <div className="space-y-4 pt-12">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={craftBaklava} 
                  className="rounded-2xl aspect-[3/4] object-cover shadow-lg" 
                  alt="Premium Baklava" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={craftLemonade} 
                  className="rounded-2xl aspect-square object-cover shadow-lg" 
                  alt="Fresh Lemonade" 
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hospitality Section */}
        <section className="pt-32 pb-0 bg-[#F5EFE6] relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#C99B3C] uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
              >
                {t('about.hospitality.subtitle')}
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0D6D7E] mb-10">
                {t('about.hospitality.title')}
              </h2>
              <div className="w-24 h-1 bg-[#A55443] mx-auto mb-10" />
              <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                "{t('about.hospitality.text')}"
              </p>
            </motion.div>
          </div>

          {/* Full Width Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-[60vh] md:h-[85vh] relative"
          >
            <img 
              src={hospitalityHero} 
              className="w-full h-full object-cover"
              alt="The Heart of Hospitality"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6]/20 to-transparent pointer-events-none" />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#0D6D7E]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C99B3C]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;