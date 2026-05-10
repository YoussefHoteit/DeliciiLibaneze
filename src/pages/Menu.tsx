"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, X, ZoomIn } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLocation } from 'react-router-dom';
// Swapped image
import menuHero from '@/assets/contact-hero.jpg';

const menuData = [
  {
    category: 'Lebanese Desserts',
    id: 'lebanese-desserts',
    items: [
      { 
        name: 'Baklava Mix', 
        desc: 'Assorted crispy filo pastries with pistachio, walnut, and cashew', 
        price: '34 lei', 
        weight: '250g',
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Pistachio Baklava', 
        desc: 'Rich layered filo pastry filled with premium pistachio', 
        price: '38 lei',
        weight: '200g',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Knafeh Classic', 
        desc: 'Warm knafeh with sweet cheese and syrup', 
        price: '36 lei', 
        weight: '300g',
        image: 'https://images.unsplash.com/photo-1630953899906-d16511a72558?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Halawet El Jibn', 
        desc: 'Soft cheese rolls filled with cream and pistachio', 
        price: '35 lei',
        weight: '220g',
        image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800'
      },
    ]
  },
  {
    category: 'Arabic Ice Cream',
    id: 'arabic-ice-cream',
    items: [
      { 
        name: 'Ashta Ice Cream', 
        desc: 'Traditional Arabic ice cream with cream flavor', 
        price: '24 lei', 
        weight: '150g',
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Pistachio Arabic Ice Cream', 
        desc: 'Stretchy Arabic-style ice cream with pistachio', 
        price: '28 lei',
        weight: '150g',
        image: 'https://images.unsplash.com/photo-1505394033343-430c7b130e31?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Rose Ice Cream', 
        desc: 'Floral and refreshing Arabic-style rose flavor', 
        price: '25 lei',
        weight: '150g',
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800'
      },
    ]
  },
  {
    category: 'Arabic Coffee',
    id: 'arabic-coffee',
    items: [
      { 
        name: 'Arabic Coffee', 
        desc: 'Traditional Arabic coffee served hot and aromatic', 
        price: '16 lei', 
        weight: '100ml',
        image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Lebanese White Coffee', 
        desc: 'Delicate orange blossom infused hot drink', 
        price: '15 lei',
        weight: '150ml',
        image: 'https://images.unsplash.com/photo-1544787210-2827443cb69b?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Pistachio Latte', 
        desc: 'House specialty latte with pistachio notes', 
        price: '21 lei', 
        weight: '250ml',
        image: 'https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800'
      },
    ]
  },
  {
    category: 'Fresh Juices',
    id: 'fresh-juices',
    items: [
      { 
        name: 'Fresh Orange Juice', 
        desc: '100% freshly squeezed oranges', 
        price: '18 lei',
        weight: '300ml',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Pomegranate Juice', 
        desc: 'Freshly pressed seasonal pomegranate', 
        price: '24 lei', 
        weight: '300ml',
        image: 'https://images.unsplash.com/photo-1541324908094-89d401807b05?auto=format&fit=crop&q=80&w=800'
      },
      { 
        name: 'Lemonade with Mint', 
        desc: 'Classic Lebanese style with fresh mint', 
        price: '16 lei',
        weight: '400ml',
        image: 'https://images.unsplash.com/photo-1523677012327-4488992ba7d4?auto=format&fit=crop&q=80&w=800'
      },
    ]
  }
];

const MenuPage = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const menuListRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const filteredMenu = useMemo(() => {
    return menuData.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => cat.items.length > 0);
  }, [searchTerm]);

  const scrollToCategory = (id: string) => {
    if (id === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveCategory('All');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  // Handle incoming navigation from CategorySection
  useEffect(() => {
    if (location.state?.categoryId) {
      const timer = setTimeout(() => {
        scrollToCategory(location.state.categoryId);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // Scroll Spy & End Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setActiveCategory('All');
      } else {
        const categoryElements = menuData.map(cat => document.getElementById(cat.id));
        const scrollPosition = window.scrollY + 200;

        for (let i = categoryElements.length - 1; i >= 0; i--) {
          const element = categoryElements[i];
          if (element && element.offsetTop <= scrollPosition) {
            setActiveCategory(menuData[i].id);
            break;
          }
        }
      }

      if (menuListRef.current) {
        const rect = menuListRef.current.getBoundingClientRect();
        if (rect.bottom < 250) {
          setIsAtEnd(true);
        } else {
          setIsAtEnd(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navContainerRef.current) {
      const activeButton = navContainerRef.current.querySelector(`[data-id="${activeCategory}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeCategory]);

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
          className="relative z-30 text-center px-6 w-full max-w-2xl will-change-transform"
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
              placeholder={language === 'ro' ? "Caută un preparat..." : "Search for a dish..."}
              className="w-full bg-white/20 border-white/30 text-[#F5EFE6] pl-14 h-14 rounded-full backdrop-blur-lg focus:bg-white/30 focus:ring-[#C99B3C] focus:border-[#C99B3C] placeholder:text-white/50 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      <div className="pb-24">
        <div 
          className={cn(
            "sticky top-[72px] z-40 bg-[#F5EFE6]/95 backdrop-blur-md border-b border-[#0D6D7E]/10 mb-16 transition-transform duration-500 ease-in-out",
            isAtEnd ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div 
              ref={navContainerRef}
              className="flex items-center gap-3 overflow-x-auto py-6 no-scrollbar"
            >
              <button
                data-id="All"
                onClick={() => scrollToCategory('All')}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border",
                  activeCategory === 'All' 
                    ? "bg-[#A55443] border-[#A55443] text-white" 
                    : "bg-[#0D6D7E]/5 border-transparent text-[#0D6D7E] hover:bg-[#0D6D7E]/10"
                )}
              >
                {language === 'ro' ? 'Toate' : 'All'}
              </button>
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  data-id={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border",
                    activeCategory === cat.id 
                      ? "bg-[#A55443] border-[#A55443] text-white" 
                      : "bg-[#0D6D7E]/5 border-transparent text-[#0D6D7E] hover:bg-[#0D6D7E]/10"
                  )}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 space-y-20" ref={menuListRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-20"
            >
              {filteredMenu.map((cat) => (
                <div key={cat.id} id={cat.id} className="space-y-10 scroll-mt-40">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-6"
                  >
                    <h2 className="text-3xl font-serif font-bold text-[#A55443] whitespace-nowrap">
                      {cat.category}
                    </h2>
                    <div className="h-px bg-[#0D6D7E]/10 w-full" />
                  </motion.div>

                  <div className="space-y-12">
                    {cat.items.map((item, i) => (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ scale: 1.03 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ 
                          duration: 0.7, 
                          delay: i * 0.05,
                          ease: [0.21, 0.47, 0.32, 0.98],
                          scale: { duration: 0.3, ease: "easeOut" }
                        }}
                        className="flex justify-between items-start gap-8 group cursor-pointer p-4 -m-4 rounded-3xl hover:bg-white/40 transition-colors duration-300"
                      >
                        <div className="flex-1 space-y-2">
                          <div className="flex items-baseline gap-2">
                            <h3 className="text-xl font-serif font-bold text-[#0D6D7E] group-hover:text-[#C99B3C] transition-colors duration-300">
                              {item.name}
                            </h3>
                            {item.weight && (
                              <span className="text-xs text-gray-400 font-light">({item.weight})</span>
                            )}
                          </div>
                          <p className="text-gray-500 text-sm font-light italic leading-relaxed max-w-md">
                            {item.desc}
                          </p>
                          <div className="pt-2">
                            <span className="text-[#C99B3C] font-bold text-lg">{item.price}</span>
                          </div>
                        </div>

                        <div className="shrink-0">
                          <div 
                            onClick={() => setSelectedImage(item.image)}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 relative cursor-zoom-in"
                          >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <ZoomIn className="text-white" size={24} />
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
              ))}

              {filteredMenu.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 font-serif text-xl italic">
                    {language === 'ro' ? 'Nu am găsit niciun preparat...' : 'No dishes found...'}
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
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
              className="relative max-w-5xl w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
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