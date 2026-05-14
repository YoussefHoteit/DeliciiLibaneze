"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, X, ZoomIn, UtensilsCrossed, Coffee } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLocation } from 'react-router-dom';
import menuHero from '@/assets/contact-hero.jpg';

const MenuPage = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'desserts' | 'drinks'>('desserts');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuData = useMemo(() => ({
    desserts: {
      title: t('menu.main.desserts'),
      icon: <UtensilsCrossed size={20} />,
      sections: [
        {
          title: t('menu.sub.sweets'),
          items: [
            { 
              name: language === 'ro' ? 'Mix Baklava' : 'Baklava Mix', 
              desc: language === 'ro' ? 'Sortiment de foietaje crocante cu fistic, nucă și caju' : 'Assorted crispy filo pastries with pistachio, walnut, and cashew', 
              price: '34 lei', 
              weight: '250g',
              image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Baklava cu Fistic' : 'Pistachio Baklava', 
              desc: language === 'ro' ? 'Foietaj bogat umplut cu fistic premium' : 'Rich layered filo pastry filled with premium pistachio', 
              price: '38 lei',
              weight: '200g',
              image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Knafeh Clasic' : 'Knafeh Classic', 
              desc: language === 'ro' ? 'Knafeh cald cu brânză dulce și sirop' : 'Warm knafeh with sweet cheese and syrup', 
              price: '36 lei', 
              weight: '300g',
              image: 'https://images.unsplash.com/photo-1630953899906-d16511a72558?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Halawet El Jibn' : 'Halawet El Jibn', 
              desc: language === 'ro' ? 'Rulouri moi de brânză umplute cu cremă și fistic' : 'Soft cheese rolls filled with cream and pistachio', 
              price: '35 lei',
              weight: '220g',
              image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800'
            },
          ]
        },
        {
          title: t('menu.sub.icecream'),
          items: [
            { 
              name: language === 'ro' ? 'Înghețată Ashta' : 'Ashta Ice Cream', 
              desc: language === 'ro' ? 'Înghețată tradițională arabă cu aromă de smântână' : 'Traditional Arabic ice cream with cream flavor', 
              price: '24 lei', 
              weight: '150g',
              image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Înghețată Arabă cu Fistic' : 'Pistachio Arabic Ice Cream', 
              desc: language === 'ro' ? 'Înghețată elastică în stil arab cu fistic' : 'Stretchy Arabic-style ice cream with pistachio', 
              price: '28 lei',
              weight: '150g',
              image: 'https://images.unsplash.com/photo-1505394033343-430c7b130e31?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Înghețată de Trandafiri' : 'Rose Ice Cream', 
              desc: language === 'ro' ? 'Aromă florală și revigorantă de trandafiri în stil arab' : 'Floral and refreshing Arabic-style rose flavor', 
              price: '25 lei',
              weight: '150g',
              image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800'
            },
          ]
        }
      ]
    },
    drinks: {
      title: t('menu.main.drinks'),
      icon: <Coffee size={20} />,
      sections: [
        {
          title: t('menu.sub.juices'),
          items: [
            { 
              name: language === 'ro' ? 'Suc Proaspăt de Portocale' : 'Fresh Orange Juice', 
              desc: language === 'ro' ? '100% portocale proaspăt stoarse' : '100% freshly squeezed oranges', 
              price: '18 lei',
              weight: '300ml',
              image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Suc de Rodie' : 'Pomegranate Juice', 
              desc: language === 'ro' ? 'Rodie de sezon proaspăt presată' : 'Freshly pressed seasonal pomegranate', 
              price: '24 lei', 
              weight: '300ml',
              image: 'https://images.unsplash.com/photo-1541324908094-89d401807b05?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Limonadă cu Mentă' : 'Lemonade with Mint', 
              desc: language === 'ro' ? 'Stil clasic libanez cu mentă proaspătă' : 'Classic Lebanese style with fresh mint', 
              price: '16 lei',
              weight: '400ml',
              image: 'https://images.unsplash.com/photo-1523677012327-4488992ba7d4?auto=format&fit=crop&q=80&w=800'
            },
          ]
        },
        {
          title: t('menu.sub.coffee'),
          items: [
            { 
              name: language === 'ro' ? 'Cafea Arabă' : 'Arabic Coffee', 
              desc: language === 'ro' ? 'Cafea tradițională arabă servită fierbinte și aromată' : 'Traditional Arabic coffee served hot and aromatic', 
              price: '16 lei', 
              weight: '100ml',
              image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Latte cu Fistic' : 'Pistachio Latte', 
              desc: language === 'ro' ? 'Specialitatea casei, latte cu note de fistic' : 'House specialty latte with pistachio notes', 
              price: '21 lei', 
              weight: '250ml',
              image: 'https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: 'Espresso', 
              desc: language === 'ro' ? 'Cafea intensă și aromată' : 'Intense and aromatic coffee', 
              price: '10 lei', 
              weight: '30ml',
              image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: 'Cappuccino', 
              desc: language === 'ro' ? 'Espresso cu lapte cremos și spumă' : 'Espresso with creamy milk and foam', 
              price: '15 lei', 
              weight: '200ml',
              image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800'
            },
          ]
        },
        {
          title: t('menu.sub.tea'),
          items: [
            { 
              name: language === 'ro' ? 'Cafea Albă Libaneză' : 'Lebanese White Coffee', 
              desc: language === 'ro' ? 'Băutură caldă delicată infuzată cu flori de portocal' : 'Delicate orange blossom infused hot drink', 
              price: '15 lei',
              weight: '150ml',
              image: 'https://images.unsplash.com/photo-1544787210-2827443cb69b?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Ceai de Mentă Proaspătă' : 'Fresh Mint Tea', 
              desc: language === 'ro' ? 'Ceai negru sau verde cu frunze proaspete de mentă' : 'Black or green tea with fresh mint leaves', 
              price: '14 lei', 
              weight: '250ml',
              image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Ceai de Salvie (Marmarieh)' : 'Sage Tea (Marmarieh)', 
              desc: language === 'ro' ? 'Infuzie tradițională de salvie cu proprietăți curative' : 'Traditional sage infusion with healing properties', 
              price: '14 lei', 
              weight: '250ml',
              image: 'https://images.unsplash.com/photo-1576092729250-a9cdeed0d7c9?auto=format&fit=crop&q=80&w=800'
            },
          ]
        }
      ]
    }
  }), [language, t]);

  const filteredSections = useMemo(() => {
    return menuData[activeTab].sections.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.items.length > 0);
  }, [searchTerm, activeTab, menuData]);

  useEffect(() => {
    if (location.state?.categoryId) {
      const categoryMap: Record<string, 'desserts' | 'drinks'> = {
        'lebanese-desserts': 'desserts',
        'arabic-ice-cream': 'desserts',
        'arabic-coffee': 'drinks',
        'fresh-juices': 'drinks',
        'desserts': 'desserts',
        'drinks': 'drinks'
      };
      const targetTab = categoryMap[location.state.categoryId];
      if (targetTab) {
        setActiveTab(targetTab);
        window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={menuHero} 
            className="w-full h-full object-cover"
            alt="Menu Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE6] via-transparent to-transparent z-20" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 text-center px-6 w-full max-w-2xl"
        >
          <span className="text-[#C99B3C] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            DELICII LIBANEZE
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F5EFE6] mb-8">
            {t('menu.title')}
          </h1>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#F5EFE6]/60 z-10" size={20} />
            <Input 
              type="text"
              placeholder={t('menu.search')}
              className="w-full bg-white/20 border-white/30 text-[#F5EFE6] pl-14 h-14 rounded-full backdrop-blur-lg focus:bg-white/30 focus:ring-[#C99B3C] focus:border-[#C99B3C] placeholder:text-white/50 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      <div className="pb-24" ref={containerRef}>
        {/* Main Category Switcher */}
        <div className="sticky top-[72px] z-40 bg-[#F5EFE6]/95 backdrop-blur-md border-b border-[#0D6D7E]/10 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center py-6">
              <div className="bg-[#0D6D7E]/5 p-1.5 rounded-full flex gap-2 border border-[#0D6D7E]/10">
                {(['desserts', 'drinks'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-8 md:px-12 py-3 rounded-full text-sm font-bold transition-all duration-500 flex items-center gap-3",
                      activeTab === tab 
                        ? "bg-[#A55443] text-white shadow-lg scale-105" 
                        : "text-[#0D6D7E] hover:bg-[#0D6D7E]/5"
                    )}
                  >
                    {menuData[tab].icon}
                    {menuData[tab].title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchTerm + language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-24"
            >
              {filteredSections.length > 0 ? (
                filteredSections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-12">
                    {section.title && (
                      <div className="flex items-center gap-6">
                        <h2 className="text-3xl font-serif font-bold text-[#A55443] whitespace-nowrap">
                          {section.title}
                        </h2>
                        <div className="h-px bg-[#0D6D7E]/10 w-full" />
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 gap-12">
                      {section.items.map((item, i) => (
                        <motion.div 
                          key={item.name}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex justify-between items-start gap-8 group cursor-pointer p-6 -m-6 rounded-[2rem] hover:bg-white/60 transition-all duration-500"
                        >
                          <div className="flex-1 space-y-3">
                            <div className="flex items-baseline gap-3">
                              <h3 className="text-2xl font-serif font-bold text-[#0D6D7E] group-hover:text-[#C99B3C] transition-colors duration-300">
                                {item.name}
                              </h3>
                              {item.weight && (
                                <span className="text-xs text-gray-400 font-light tracking-widest uppercase">({item.weight})</span>
                              )}
                            </div>
                            <p className="text-gray-500 text-base font-light italic leading-relaxed max-w-md">
                              {item.desc}
                            </p>
                            <div className="pt-2">
                              <span className="text-[#C99B3C] font-bold text-xl tracking-tight">{item.price}</span>
                            </div>
                          </div>

                          <div className="shrink-0">
                            <div 
                              onClick={() => setSelectedImage(item.image)}
                              className="w-28 h-28 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-700 relative cursor-zoom-in"
                            >
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white" size={28} />
                              </div>
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-24">
                  <p className="text-gray-400 font-serif text-2xl italic">
                    {t('menu.empty')}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Food Preview" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MenuPage;