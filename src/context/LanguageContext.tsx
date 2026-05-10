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
    'about.subtitle': 'A Legacy of Taste',
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
    'reviews.title': 'Guest Experiences',
    'reviews.subtitle': 'What our visitors say',
    'reviews.1.name': 'Calin Popovici',
    'reviews.1.text': 'Extremely delicious and flavoursome icecream. Very good deserts and very tasteful coffee. The prices are what you would expect for the area. You can pay by card too. I see people say the food and coffee is very good but complaining about prices, well...this is not your average Starbucks coffee & muffin :)',
    'reviews.2.name': 'Eleanor Sims',
    'reviews.2.text': 'Some of the nicest things I have ever put in my mouth! Highly recommended',
    'reviews.3.name': 'Gabriel Dumitru',
    'reviews.3.text': 'Warning: Major danger for your taste buds and your wallet! Don’t go to the Lebanese pastry shop. Seriously. Don’t make that mistake... because EVERYTHING is delicious! 🤩 From fragrant pastries to ice cream with unique flavors you won’t find anywhere else — it’s impossible to stop at just one. You’ll go in ‘just to try something’... and end up with a whole tray in front of you and a huge smile on your face. I was so enchanted that I even offered to work there for free. The only payment I’d accept: daily tastings of their heavenly treats. 🍰☕✨ In short: don’t go... unless you’re ready to leave with an empty wallet and a heart (and stomach) full of joy.',
    'reviews.4.name': 'Shahar-kehat Bar',
    'reviews.4.text': 'Amazing place ! Best Arab coffee in town, Lebanese sweets – home made and really good, and if you like Ice-cream - this is the place for a special hand made artisan Ice cream with unique flavors - you must try the spicy rose and Spicy Chocolate. Owner is a nice person and makes you feel like home. A must visit in Bucharest!',
    'reviews.5.name': 'Magdalena Mikusek',
    'reviews.5.text': 'Discovered by accident...or fate 🤗. Delicious delicacies hand made by the owner himself. Maybe not a typical gift from Romania but I’m taking it back home to share with friends. Bucuresti, you can be proud of such gem!',
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
    'reviews.title': 'Experiențele Oaspeților',
    'reviews.subtitle': 'Ce spun vizitatorii noștri',
    'reviews.1.name': 'Calin Popovici',
    'reviews.1.text': 'Extremely delicious and flavoursome icecream. Very good deserts and very tasteful coffee. The prices are what you would expect for the area. You can pay by card too. I see people say the food and coffee is very good but complaining about prices, well...this is not your average Starbucks coffee & muffin :)',
    'reviews.2.name': 'Eleanor Sims',
    'reviews.2.text': 'Some of the nicest things I have ever put in my mouth! Highly recommended',
    'reviews.3.name': 'Gabriel Dumitru',
    'reviews.3.text': 'Warning: Major danger for your taste buds and your wallet! Don’t go to the Lebanese pastry shop. Seriously. Don’t make that mistake... because EVERYTHING is delicious! 🤩 From fragrant pastries to ice cream with unique flavors you won’t find anywhere else — it’s impossible to stop at just one. You’ll go in ‘just to try something’... and end up with a whole tray in front of you and a huge smile on your face. I was so enchanted that I even offered to work there for free. The only payment I’d accept: daily tastings of their heavenly treats. 🍰☕✨ In short: don’t go... unless you’re ready to leave with an empty wallet and a heart (and stomach) full of joy.',
    'reviews.4.name': 'Shahar-kehat Bar',
    'reviews.4.text': 'Amazing place ! Best Arab coffee in town, Lebanese sweets – home made and really good, and if you like Ice-cream - this is the place for a special hand made artisan Ice cream with unique flavors - you must try the spicy rose and Spicy Chocolate. Owner is a nice person and makes you feel like home. A must visit in Bucharest!',
    'reviews.5.name': 'Magdalena Mikusek',
    'reviews.5.text': 'Discovered by accident...or fate 🤗. Delicious delicacies hand made by the owner himself. Maybe not a typical gift from Romania but I’m taking it back home to share with friends. Bucuresti, you can be proud of such gem!',
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