"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import contactHero from '@/assets/contact-hero-new.jpg';

const ContactPage = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      
      <main>
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={contactHero} 
              className="w-full h-full object-cover"
              alt="Contact Hero"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5EFE6] to-transparent z-20" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-30 text-center px-6"
          >
            <motion.span 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#C99B3C] uppercase tracking-[0.4em] text-xs font-bold mb-4 block drop-shadow-sm"
            >
              {t('contact.subtitle')}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F5EFE6] mb-6 drop-shadow-md">
              {t('contact.title')}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-[#C99B3C] mx-auto" 
            />
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 pb-24 -mt-12 relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#0D6D7E]/5 flex items-start gap-6"
                >
                  <div className="w-12 h-12 bg-[#F5EFE6] rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-[#A55443]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0D6D7E] mb-2">{t('contact.hours')}</h3>
                    <div className="space-y-1">
                      <p className="text-gray-500 font-light text-sm">{t('contact.hours.mon_thu')}</p>
                      <p className="text-gray-500 font-light text-sm">{t('contact.hours.fri')}</p>
                      <p className="text-gray-500 font-light text-sm">{t('contact.hours.sat')}</p>
                      <p className="text-gray-500 font-light text-sm">{t('contact.hours.sun')}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#0D6D7E]/5 flex items-start gap-6 group hover:border-[#C99B3C]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-[#F5EFE6] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#C99B3C]/10 transition-colors">
                    <MapPin className="text-[#A55443]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0D6D7E] mb-1">{t('contact.info.location')}</h3>
                    <p className="text-gray-500 font-light text-sm">Calea Victoriei 25, București</p>
                  </div>
                </motion.div>

                <motion.a 
                  whileHover={{ y: -5 }}
                  href="tel:+40731436991"
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#0D6D7E]/5 flex items-start gap-6 group hover:border-[#C99B3C]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-[#F5EFE6] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#C99B3C]/10 transition-colors">
                    <Phone className="text-[#A55443]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0D6D7E] mb-1">{t('contact.info.call')}</h3>
                    <p className="text-gray-500 font-light text-sm">+40 731 436 991</p>
                  </div>
                </motion.a>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#0D6D7E]/5 flex items-start gap-6"
                >
                  <div className="w-12 h-12 bg-[#F5EFE6] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-[#A55443]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0D6D7E] mb-1">{t('contact.info.email')}</h3>
                    <p className="text-gray-500 font-light text-sm">hello@deliciilibaneze.ro</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#0D6D7E] p-8 md:p-12 rounded-3xl text-[#F5EFE6] shadow-xl relative overflow-hidden min-h-[500px] flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99B3C]/10 rounded-full -mr-16 -mt-16" />
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex-1"
                    >
                      <h2 className="text-3xl font-serif font-bold mb-2">{t('contact.form.title')}</h2>
                      <p className="text-[#F5EFE6]/60 font-light mb-10">{t('contact.form.subtitle')}</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-[#C99B3C]">
                              {t('contact.form.name')}
                            </label>
                            <Input 
                              required
                              className="bg-white/5 border-white/10 text-[#F5EFE6] focus:border-[#C99B3C] focus:ring-0 rounded-xl h-14 placeholder:text-white/20"
                              placeholder={t('contact.form.name.placeholder')}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-[#C99B3C]">
                              {t('contact.form.email')}
                            </label>
                            <Input 
                              required
                              type="email"
                              className="bg-white/5 border-white/10 text-[#F5EFE6] focus:border-[#C99B3C] focus:ring-0 rounded-xl h-14 placeholder:text-white/20"
                              placeholder={t('contact.form.email.placeholder')}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-[#C99B3C]">
                            {t('contact.form.message')}
                          </label>
                          <Textarea 
                            required
                            className="bg-white/5 border-white/10 text-[#F5EFE6] focus:border-[#C99B3C] focus:ring-0 rounded-xl min-h-[150px] placeholder:text-white/20 resize-none"
                            placeholder={t('contact.form.message.placeholder')}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-[#C99B3C] hover:bg-[#B08835] text-[#0D6D7E] rounded-xl py-7 text-lg font-serif font-bold transition-all group">
                          <span className="flex items-center gap-2">
                            {t('contact.form.send')}
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-[#C99B3C]/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-[#C99B3C]" size={48} />
                      </div>
                      <h2 className="text-3xl font-serif font-bold">{t('contact.form.success.title')}</h2>
                      <p className="text-[#F5EFE6]/60 font-light max-w-xs">
                        {t('contact.form.success.text')}
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline" 
                        className="border-[#C99B3C] text-[#C99B3C] hover:bg-[#C99B3C] hover:text-[#0D6D7E] rounded-xl"
                      >
                        {t('contact.form.success.cta')}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="w-full h-[450px] md:h-[600px] relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.846!2d26.097222!3d44.434444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4666666667%3A0x6666666666666666!2sDelicii%20Libaneze%20by%20jaber!5e0!3m2!1sen!2sro!4v1713790000000!5m2!1sen!2sro" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          />
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;