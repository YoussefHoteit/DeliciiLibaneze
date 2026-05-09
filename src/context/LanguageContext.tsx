"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.title': 'Authentic Lebanese Sweets',
    'hero.subtitle': 'A journey of flavors from the heart of Lebanon to Bucharest. Experience artisanal desserts, Arabic ice cream, and premium coffee.',
    'hero.cta.menu': 'View Menu',
    'hero.cta.visit': 'Visit Us',
    'cat.desserts': 'Lebanese Desserts',
    'cat.icecream': 'Arabic Ice Cream',
    'cat.coffee': 'Arabic Coffee',
    'cat.juices': 'Fresh Juices',
    'cat.boxes': 'Gift Boxes',
    'about.title': 'Our Story',
    'about.subtitle': 'O Moștenire a Gustului',
    'about.text': 'Delicii Libaneze is more than a café; it is a destination where tradition meets modern elegance. Inspired by the rich heritage of Lebanese hospitality, we bring you handcrafted sweets made with the finest ingredients.',
    'about.craft.title': 'The Craft',
    'about.craft.text': 'Every piece of baklava and every scoop of ashta ice cream is a testament to our dedication to authenticity. We use traditional methods passed down through generations to ensure every bite is a masterpiece.',
    'about.hospitality.title': 'The Heart of Hospitality',
    'about.hospitality.subtitle': 'Karam',
    'about.hospitality.text': 'In Lebanese culture, hospitality is not just a service; it is a way of life. Known as "Karam," this spirit of generosity defines everything we do. We treat every guest who walks through our doors as family, sharing the sweetness of our heritage with open hearts.',
    'contact.title': 'Find Us',
    'contact.subtitle': 'Visit our sanctuary of sweets',
    'contact.address': 'Calea Victoriei 25, Bucharest, Romania',
    'contact.hours': 'Opening Hours',
    'contact.hours.mon_thu': 'Mon - Thu: 11:00 AM - 10:00 PM',
    'contact.hours.fri': 'Friday: 11:00 AM - 01:00 AM',
    'contact.hours.sat': 'Saturday: 11:00 AM - 02:00 AM',
    'contact.hours.sun': 'Sunday: 11:00 AM - 11:00 PM',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'footer.tagline': 'The Art of Lebanese Hospitality',
    'menu.title': 'Our Menu',
    'gallery.title': 'Visual Journey',
    'gallery.subtitle': 'A glimpse into our world',
    'gallery.photos': 'Photos',
    'gallery.videos': 'Videos',
  },
  ro: {
    'nav.home': 'Acasă',
    'nav.menu': 'Meniu',
    'nav.about': 'Despre',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'hero.title': 'Dulciuri Libaneze Autentice',
    'hero.subtitle': 'O călătorie a aromelor din inima Libanului până în București. Experimentați deserturi artizanale, înghețată arabă și cafea premium.',
    'hero.cta.menu': 'Vezi Meniul',
    'hero.cta.visit': 'Vizitează-ne',
    'cat.desserts': 'Deserturi Libaneze',
    'cat.icecream': 'Înghețată Arabă',
    'cat.coffee': 'Cafea Arabă',
    'cat.juices': 'Sucuri Proaspete',
    'cat.boxes': 'Cutii Cadou',
    'about.title': 'Povestea Noastră',
    'about.subtitle': 'O Moștenire a Gustului',
    'about.text': 'Delicii Libaneze este mai mult decât o cafenea; este o destinație unde tradiția întâlnește eleganța modernă. Inspirați de bogata moștenire a ospitalității libaneze, vă oferim dulciuri lucrate manual cu cele mai bune ingrediente.',
    'about.craft.title': 'Meșteșugul',
    'about.craft.text': 'Fiecare bucată de baklava și fiecare cupă de înghețată ashta este o dovadă a dedicării noastre pentru autenticitate. Folosim metode tradiționale transmise din generație în generație pentru a ne asigura că fiecare înghițitură este o capodoperă.',
    'about.hospitality.title': 'Inima Ospitalității',
    'about.hospitality.subtitle': 'Karam',
    'about.hospitality.text': 'În cultura libaneză, ospitalitatea nu este doar un serviciu; este un mod de viață. Cunoscut sub numele de „Karam”, acest spirit de generozitate definește tot ceea ce facem. Tratăm fiecare oaspete care ne trece pragul ca pe un membru al familiei, împărtășind dulceața moștenirii noastre cu inima deschisă.',
    'contact.title': 'Găsește-ne',
    'contact.subtitle': 'Vizitează sanctuarul nostru de dulciuri',
    'contact.address': 'Calea Victoriei 25, București, România',
    'contact.hours': 'Program',
    'contact.hours.mon_thu': 'Luni - Joi: 11:00 - 22:00',
    'contact.hours.fri': 'Vineri: 11:00 - 01:00',
    'contact.hours.sat': 'Sâmbătă: 11:00 - 02:00',
    'contact.hours.sun': 'Duminică: 11:00 - 23:00',
    'contact.form.name': 'Nume Complet',
    'contact.form.email': 'Adresă de Email',
    'contact.form.message': 'Mesajul Tău',
    'contact.form.send': 'Trimite Mesajul',
    'footer.tagline': 'Arta Ospitalității Libaneze',
    'menu.title': 'Meniul Nostru',
    'gallery.title': 'Călătorie Vizuală',
    'gallery.subtitle': 'O privire în lumea noastră',
    'gallery.photos': 'Fotografii',
    'gallery.videos': 'Videoclipuri',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};