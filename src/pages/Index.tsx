"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import AtmosphereSection from '@/components/AtmosphereSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE6] selection:bg-[#0D6D7E] selection:text-[#F5EFE6]">
      <Navbar />
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="pt-24 pb-4 px-6 text-center max-w-3xl mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#A55443] uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
            >
              Welcome to Bucharest's Finest
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif font-bold text-[#0D6D7E] mb-8"
            >
              A Taste of Lebanon in Every Bite
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed font-light"
            >
              From the golden layers of our handcrafted baklava to the unique stretch of our traditional Arabic ice cream, we invite you to experience the true essence of Lebanese dessert culture.
            </motion.p>
          </motion.div>
        </section>

        <CategorySection />
        <AtmosphereSection />
        
        {/* Featured Section */}
        <section className="py-32 bg-white px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Handcrafted', desc: 'Every dessert is prepared daily using traditional methods and premium ingredients.' },
              { num: '02', title: 'Authentic', desc: 'Our recipes are rooted in Lebanese heritage, bringing genuine flavors to your table.' },
              { num: '03', title: 'Premium', desc: 'From our specialty coffee to our fresh juices, quality is at the heart of everything we do.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.2, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-[#F5EFE6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#C99B3C] text-3xl font-serif">{feature.num}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0D6D7E]">{feature.title}</h3>
                <p className="text-gray-500 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;