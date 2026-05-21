"use client";

import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0D6D7E] text-[#F5EFE6] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-serif font-bold tracking-wider leading-none">
              DELICII <span className="text-[#C99B3C]">LIBANEZE</span>
            </h3>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C99B3C] font-bold mt-2">
              by jaber
            </span>
          </div>
          <p className="text-[#F5EFE6]/60 leading-relaxed font-light max-w-md">
            {t('footer.tagline')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#F5EFE6]/20 flex items-center justify-center hover:bg-[#C99B3C] hover:border-[#C99B3C] transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#F5EFE6]/20 flex items-center justify-center hover:bg-[#C99B3C] hover:border-[#C99B3C] transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="md:flex md:justify-end">
          <div className="w-full md:max-w-xs">
            <h4 className="text-[#C99B3C] uppercase tracking-widest text-sm font-bold mb-8">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[#F5EFE6]/60">
                <MapPin size={18} className="mt-1 shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/M2SK3zJuh2dHQKAR9?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#C99B3C] transition-colors"
                >
                  Calea Victoriei 25, București
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[#F5EFE6]/60">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+40731436991" className="hover:text-[#C99B3C] transition-colors">
                  +40 731 436 991
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[#F5EFE6]/60">
                <Mail size={18} className="shrink-0" />
                <span>hello@deliciilibaneze.ro</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-[#F5EFE6]/10 text-center text-[#F5EFE6]/30 text-[10px] tracking-[0.2em] uppercase">
        &copy; {new Date().getFullYear()} DELICII LIBANEZE BY JABER. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;