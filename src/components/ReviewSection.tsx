"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Star, Quote } from 'lucide-react';

const ReviewSection = () => {
  const { t } = useLanguage();

  const reviews = [
    { text: t('reviews.1.text'), author: t('reviews.1.author') },
    { text: t('reviews.2.text'), author: t('reviews.2.author') },
    { text: t('reviews.3.text'), author: t('reviews.3.author') },
  ];

  return (
    <section className="py-32 bg-[#F5EFE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-[#A55443] uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            {t('reviews.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0D6D7E]"
          >
            {t('reviews.title')}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-[#C99B3C] mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#0D6D7E]/5 relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute -top-5 left-10 w-10 h-10 bg-[#C99B3C] rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote size={18} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} size={16} className="fill-[#C99B3C] text-[#C99B3C]" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed font-light italic mb-8 text-lg">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#0D6D7E]/10 rounded-full flex items-center justify-center text-[#0D6D7E] font-serif font-bold">
                  {review.author.charAt(0)}
                </div>
                <span className="text-[#0D6D7E] font-bold tracking-wide">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;