"use client";

import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '@/assets/logo-main.jpg';

const LoadingScreen = () => {
  // Animation variants for the staggered sequence
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5, duration: 1, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1.2, duration: 0.8 }
    }
  };

  const loaderVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1.8, duration: 0.8 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <div className="relative max-w-[300px] md:max-w-[400px] w-full px-6 flex flex-col items-center -translate-y-8 md:translate-y-0">
        {/* Step 2: Logo fades in */}
        <motion.img 
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          src={logoImg} 
          alt="Delicii Libaneze Logo" 
          className="w-full h-auto mb-4 md:mb-8"
        />
        
        {/* Step 3: Tagline fades in */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 md:mb-8 text-[#0D6D7E] font-serif italic tracking-[0.3em] text-[10px] md:text-xs uppercase text-center"
        >
          Authentic Lebanese Experience
        </motion.p>
        
        {/* Step 4: Loading bar starts */}
        <motion.div 
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <div className="w-32 md:w-48 h-[2px] bg-[#0D6D7E]/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "easeInOut" 
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