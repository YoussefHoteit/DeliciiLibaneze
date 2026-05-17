"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, X, ZoomIn, UtensilsCrossed, Coffee, Sparkles, Utensils } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLocation } from 'react-router-dom';
import menuHero from '@/assets/contact-hero.jpg';

// Import Ice Cream Images
import imgLemon from '@/assets/menu/lemon.jpg';
import imgDarkChocolate from '@/assets/menu/dark-chocolate.jpg';
import imgChocolateOrange from '@/assets/menu/chocolate-orange.jpg';
import imgSaltedCaramel from '@/assets/menu/salted-caramel.jpg';
import imgVanilla from '@/assets/menu/vanilla.jpg';
import imgCherries from '@/assets/menu/cherries.jpg';
import imgMelon from '@/assets/menu/melon.jpg';
import imgCoconut from '@/assets/menu/coconut.jpg';
import imgBlueberries from '@/assets/menu/blueberries.jpg';
import imgBananas from '@/assets/menu/bananas.jpg';
import imgBlackWalnut from '@/assets/menu/black-walnut.jpg';
import imgGrapefruit from '@/assets/menu/grapefruit.jpg';
import imgHamburgGrapes from '@/assets/menu/hamburg-grapes.jpg';
import imgHazelnuts from '@/assets/menu/hazelnuts.jpg';
import imgKiwi from '@/assets/menu/kiwi.jpg';
import imgArabicCoffeeIce from '@/assets/menu/arabic-coffee-ice.jpg';
import imgStrawberries from '@/assets/menu/strawberries.jpg';
import imgMixedBerries from '@/assets/menu/mixed-berries.jpg';
import imgChocolateAmarene from '@/assets/menu/chocolate-amarene.jpg';
import imgRaspberry from '@/assets/menu/raspberry.jpg';
import imgCashew from '@/assets/menu/cashew.jpg';
import imgChestnuts from '@/assets/menu/chestnuts.jpg';
import imgPassionFruit from '@/assets/menu/passion-fruit.jpg';
import imgRoseBanana from '@/assets/menu/rose-banana.jpg';
import imgFigs from '@/assets/menu/figs.jpg';
import imgBaklavaWalnut from '@/assets/menu/baklava-walnut.jpg';
import imgBaklavaPistachio from '@/assets/menu/baklava-pistachio.jpg';
import imgPomegranate from '@/assets/menu/pomegranate.jpg';
import imgMango from '@/assets/menu/mango.jpg';
import imgYogurt from '@/assets/menu/yogurt.jpg';
import imgSpicyChocolate from '@/assets/menu/spicy-chocolate.jpg';
import imgSpicyRose from '@/assets/menu/spicy-rose.jpg';
import imgIranianPistachio from '@/assets/menu/iranian-pistachio.jpg';
import imgAlmondsPinkPepper from '@/assets/menu/almonds-pink-pepper.jpg';

const MenuPage = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'desserts' | 'drinks' | 'food'>('desserts');
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
              image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Baklava cu Fistic' : 'Pistachio Baklava', 
              desc: language === 'ro' ? 'Foietaj bogat umplut cu fistic premium' : 'Rich layered filo pastry filled with premium pistachio', 
              image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Knafeh Clasic' : 'Knafeh Classic', 
              desc: language === 'ro' ? 'Knafeh cald cu brânză dulce și sirop' : 'Warm knafeh with sweet cheese and syrup', 
              image: 'https://images.unsplash.com/photo-1630953899906-d16511a72558?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Halawet El Jibn' : 'Halawet El Jibn', 
              desc: language === 'ro' ? 'Rulouri moi de brânză umplute cu cremă și fistic' : 'Soft cheese rolls filled with cream and pistachio', 
              image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800'
            },
          ]
        },
        {
          title: t('menu.sub.icecream'),
          info: t('menu.icecream.info'),
          addons: [
            { name: language === 'ro' ? 'Fistic' : 'Pistachio' },
            { name: language === 'ro' ? 'Caramel' : 'Caramel' },
            { name: language === 'ro' ? 'Ciocolată' : 'Chocolate' },
            { name: language === 'ro' ? 'Ciocolată Albă' : 'White Chocolate' },
          ],
          items: [
            { 
              name: language === 'ro' ? 'Migdale cu Piper Roz' : 'Almonds with Pink Pepper', 
              desc: language === 'ro' ? 'O combinație îndrăzneață de migdale crocante și note picante' : 'A bold combination of crunchy almonds and spicy notes', 
              image: imgAlmondsPinkPepper
            },
            { 
              name: language === 'ro' ? 'Fistic Iran' : 'Iranian Pistachio', 
              desc: language === 'ro' ? 'Înghețată premium cu cel mai fin fistic iranian' : 'Premium ice cream with the finest Iranian pistachio', 
              image: imgIranianPistachio
            },
            { 
              name: language === 'ro' ? 'Trandafir Picant' : 'Spicy Rose', 
              desc: language === 'ro' ? 'Aromă florală de trandafir cu un postgust surprinzător' : 'Floral rose flavor with a surprising aftertaste', 
              image: imgSpicyRose
            },
            { 
              name: language === 'ro' ? 'Ciocolată Picantă' : 'Spicy Chocolate', 
              desc: language === 'ro' ? 'Ciocolată neagră intensă cu note de chili' : 'Intense dark chocolate with chili notes', 
              image: imgSpicyChocolate
            },
            { 
              name: language === 'ro' ? 'Iaurt Libanez' : 'Lebanese Yogurt', 
              desc: language === 'ro' ? 'Gust proaspăt și ușor acrișor de iaurt tradițional' : 'Fresh and slightly tangy traditional yogurt taste', 
              image: imgYogurt
            },
            { 
              name: language === 'ro' ? 'Mango Egypt' : 'Egyptian Mango', 
              desc: language === 'ro' ? 'Mango exotic și dulce din inima Egiptului' : 'Exotic and sweet mango from the heart of Egypt', 
              image: imgMango
            },
            { 
              name: language === 'ro' ? 'Rodie Egipt' : 'Egyptian Pomegranate', 
              desc: language === 'ro' ? 'Sorbet revigorant de rodie egipteană' : 'Refreshing Egyptian pomegranate sorbet', 
              image: imgPomegranate
            },
            { 
              name: language === 'ro' ? 'Baklava Fistic' : 'Pistachio Baklava Ice Cream', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu bucățele de baklava cu fistic' : 'Creamy ice cream with pistachio baklava chunks', 
              image: imgBaklavaPistachio
            },
            { 
              name: language === 'ro' ? 'Baklava Nucă' : 'Walnut Baklava Ice Cream', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu bucățele de baklava cu nucă' : 'Creamy ice cream with walnut baklava chunks', 
              image: imgBaklavaWalnut
            },
            { 
              name: language === 'ro' ? 'Smochine Cognac' : 'Figs with Cognac', 
              desc: language === 'ro' ? 'Aromă sofisticată de smochine infuzate în cognac' : 'Sophisticated flavor of figs infused in cognac', 
              image: imgFigs
            },
            { 
              name: language === 'ro' ? 'Trandafir cu Banane' : 'Rose with Bananas', 
              desc: language === 'ro' ? 'Un amestec delicat de petale de trandafir și banane coapte' : 'A delicate blend of rose petals and ripe bananas', 
              image: imgRoseBanana
            },
            { 
              name: language === 'ro' ? 'Fructul Pasiunii' : 'Passion Fruit', 
              desc: language === 'ro' ? 'Sorbet tropical intens și aromat' : 'Intense and aromatic tropical sorbet', 
              image: imgPassionFruit
            },
            { 
              name: language === 'ro' ? 'Castane' : 'Chestnuts', 
              desc: language === 'ro' ? 'Aromă bogată și catifelată de castane coapte' : 'Rich and velvety flavor of roasted chestnuts', 
              image: imgChestnuts
            },
            { 
              name: language === 'ro' ? 'Caju' : 'Cashew', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu nuci caju prăjite' : 'Creamy ice cream with roasted cashew nuts', 
              image: imgCashew
            },
            { 
              name: language === 'ro' ? 'Zmeură' : 'Raspberry', 
              desc: language === 'ro' ? 'Sorbet proaspăt de zmeură de grădină' : 'Fresh garden raspberry sorbet', 
              image: imgRaspberry
            },
            { 
              name: language === 'ro' ? 'Ciocolată cu Amarene' : 'Chocolate with Sour Cherries', 
              desc: language === 'ro' ? 'Ciocolată fină cu cireșe amarene întregi' : 'Fine chocolate with whole amarene cherries', 
              image: imgChocolateAmarene
            },
            { 
              name: language === 'ro' ? 'Fructe de Pădure' : 'Mixed Berries', 
              desc: language === 'ro' ? 'Un amestec exploziv de fructe de pădure proaspete' : 'An explosive mix of fresh forest fruits', 
              image: imgMixedBerries
            },
            { 
              name: language === 'ro' ? 'Căpșuni' : 'Strawberries', 
              desc: language === 'ro' ? 'Gustul clasic al căpșunilor de vară' : 'The classic taste of summer strawberries', 
              image: imgStrawberries
            },
            { 
              name: language === 'ro' ? 'Cafea Arabică' : 'Arabic Coffee Ice Cream', 
              desc: language === 'ro' ? 'Înghețată intensă cu aromă de cafea la nisip' : 'Intense ice cream with sand-brewed coffee flavor', 
              image: imgArabicCoffeeIce
            },
            { 
              name: 'Kiwi', 
              desc: language === 'ro' ? 'Sorbet exotic și revigorant de kiwi' : 'Exotic and refreshing kiwi sorbet', 
              image: imgKiwi
            },
            { 
              name: language === 'ro' ? 'Alune de Pădure' : 'Hazelnuts', 
              desc: language === 'ro' ? 'Înghețată bogată cu alune de pădure prăjite' : 'Rich ice cream with roasted hazelnuts', 
              image: imgHazelnuts
            },
            { 
              name: language === 'ro' ? 'Struguri Hamburg' : 'Hamburg Grapes', 
              desc: language === 'ro' ? 'Aromă unică de struguri negri parfumați' : 'Unique flavor of fragrant black grapes', 
              image: imgHamburgGrapes
            },
            { 
              name: language === 'ro' ? 'Grepfrut' : 'Grapefruit', 
              desc: language === 'ro' ? 'Sorbet răcoritor cu note amărui de grepfrut' : 'Refreshing sorbet with bitter grapefruit notes', 
              image: imgGrapefruit
            },
            { 
              name: language === 'ro' ? 'Nucă Neagră' : 'Black Walnut', 
              desc: language === 'ro' ? 'Aromă intensă și pământie de nucă neagră' : 'Intense and earthy black walnut flavor', 
              image: imgBlackWalnut
            },
            { 
              name: language === 'ro' ? 'Banane' : 'Bananas', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu banane proaspete' : 'Creamy ice cream with fresh bananas', 
              image: imgBananas
            },
            { 
              name: language === 'ro' ? 'Pepene Galben' : 'Melon', 
              desc: language === 'ro' ? 'Sorbet dulce și parfumat de pepene galben' : 'Sweet and fragrant melon sorbet', 
              image: imgMelon
            },
            { 
              name: language === 'ro' ? 'Cireșe' : 'Cherries', 
              desc: language === 'ro' ? 'Sorbet intens de cireșe coapte' : 'Intense ripe cherry sorbet', 
              image: imgCherries
            },
            { 
              name: language === 'ro' ? 'Afine' : 'Blueberries', 
              desc: language === 'ro' ? 'Sorbet bogat în antioxidanți din afine proaspete' : 'Antioxidant-rich sorbet from fresh blueberries', 
              image: imgBlueberries
            },
            { 
              name: 'Cocos', 
              desc: language === 'ro' ? 'Înghețată exotică cu lapte de cocos și fulgi' : 'Exotic ice cream with coconut milk and flakes', 
              image: imgCoconut
            },
            { 
              name: language === 'ro' ? 'Vanilie Madagascar' : 'Madagascar Vanilla', 
              desc: language === 'ro' ? 'Gustul autentic al păstăilor de vanilie de Madagascar' : 'The authentic taste of Madagascar vanilla beans', 
              image: imgVanilla
            },
            { 
              name: language === 'ro' ? 'Caramel Sărat cu Alune' : 'Salted Caramel with Hazelnuts', 
              desc: language === 'ro' ? 'Echilibrul perfect între dulce, sărat și crocant' : 'The perfect balance between sweet, salty, and crunchy', 
              image: imgSaltedCaramel
            },
            { 
              name: language === 'ro' ? 'Ciocolată cu Portocale' : 'Chocolate with Oranges', 
              desc: language === 'ro' ? 'Combinația clasică de ciocolată neagră și citrice' : 'The classic combination of dark chocolate and citrus', 
              image: imgChocolateOrange
            },
            { 
              name: language === 'ro' ? 'Ciocolată Neagră' : 'Dark Chocolate', 
              desc: language === 'ro' ? 'Ciocolată belgiană intensă cu 70% cacao' : 'Intense Belgian chocolate with 70% cocoa', 
              image: imgDarkChocolate
            },
            { 
              name: language === 'ro' ? 'Lămâie' : 'Lemon', 
              desc: language === 'ro' ? 'Sorbet ultra-răcoritor de lămâie proaspătă' : 'Ultra-refreshing fresh lemon sorbet', 
              image: imgLemon
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
          items: []
        },
        {
          title: t('menu.sub.coffee'),
          items: []
        }
      ]
    },
    food: {
      title: t('menu.main.food'),
      icon: <Utensils size={20} />,
      sections: [
        {
          title: t('menu.sub.savory'),
          items: [
            { 
              name: language === 'ro' ? 'Manakish Zaatar' : 'Zaatar Manakish', 
              desc: language === 'ro' ? 'Lipie tradițională cu cimbru, susan și ulei de măsline' : 'Traditional flatbread with thyme, sesame, and olive oil', 
              image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Manakish cu Brânză' : 'Cheese Manakish', 
              desc: language === 'ro' ? 'Lipie caldă cu amestec de brânzeturi libaneze' : 'Warm flatbread with a blend of Lebanese cheeses', 
              image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Falafel' : 'Falafel', 
              desc: language === 'ro' ? 'Chifteluțe crocante de năut cu sos tahini' : 'Crispy chickpea patties with tahini sauce', 
              image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Sambousek cu Carne' : 'Meat Sambousek', 
              desc: language === 'ro' ? 'Pateuri crocante umplute cu carne tocată și muguri de pin' : 'Crispy pastries filled with minced meat and pine nuts', 
              image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800'
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
      const categoryMap: Record<string, 'desserts' | 'drinks' | 'food'> = {
        'lebanese-desserts': 'desserts',
        'arabic-ice-cream': 'desserts',
        'arabic-coffee': 'drinks',
        'fresh-juices': 'drinks',
        'desserts': 'desserts',
        'drinks': 'drinks',
        'food': 'food'
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
          <div className="mb-4 flex flex-col items-center">
            <span className="text-[#C99B3C] uppercase tracking-[0.4em] text-xs font-bold block">
              DELICII LIBANEZE
            </span>
            <span className="text-[#C99B3C]/60 uppercase tracking-[0.2em] text-[8px] font-bold block mt-1">
              by jaber
            </span>
          </div>
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
              <div className="bg-[#0D6D7E]/5 p-1.5 rounded-full flex gap-2 border border-[#0D6D7E]/10 overflow-x-auto no-scrollbar">
                {(['desserts', 'drinks', 'food'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-8 md:px-12 py-3 rounded-full text-sm font-bold transition-all duration-500 flex items-center gap-3 whitespace-nowrap",
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
                    <div className="space-y-4">
                      {section.title && (
                        <div className="flex items-center gap-6">
                          <h2 className="text-3xl font-serif font-bold text-[#A55443] whitespace-nowrap">
                            {section.title}
                          </h2>
                          <div className="h-px bg-[#0D6D7E]/10 w-full" />
                        </div>
                      )}
                      {section.info && (
                        <p className="text-gray-500 font-light italic text-sm max-w-2xl leading-relaxed">
                          {section.info}
                        </p>
                      )}
                      
                      {/* Add-ons Section */}
                      {section.addons && (
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-[#C99B3C]/10 mt-6">
                          <div className="flex items-center gap-2 mb-4 text-[#C99B3C]">
                            <Sparkles size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Add-ons</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {section.addons.map((addon, aIdx) => (
                              <div key={aIdx} className="flex justify-between items-center bg-white/60 px-4 py-2 rounded-xl border border-[#0D6D7E]/5">
                                <span className="text-sm font-medium text-[#0D6D7E]">{addon.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
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
                            </div>
                            <p className="text-gray-500 text-base font-light italic leading-relaxed max-w-md">
                              {item.desc}
                            </p>
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