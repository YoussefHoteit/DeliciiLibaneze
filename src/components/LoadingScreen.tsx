"use client";

import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '@/assets/logo-main.jpg';

const LoadingScreen = () => {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1, duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-[#FFFFFF] flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[320px] md:max-w-[420px] px-8 flex flex-col items-center">
        {/* Logo - Pure image on white background */}
        <motion.img
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          src={logoImg} 
          alt="Delicii Libaneze Logo" 
          className="w-full h-auto block mb-8"
        />
        
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Tagline */}
          <p className="mb-8 text-[#0D6D7E] font-serif italic tracking-[0.3em] text-[10px] md:text-xs uppercase text-center opacity-80">
            Authentic Lebanese Experience
          </p>
          
          {/* Minimal Loading Bar */}
          <div className="w-24 md:w-32 h-[1px] bg-[#0D6D7E]/10 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2, 
                ease: "linear" 
              }}
              className="absolute inset-0 bg-[#0D6D7E]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;