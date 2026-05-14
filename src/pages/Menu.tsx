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
              name: language === 'ro' ? 'Migdale cu Piper Roz' : 'Almonds with Pink Pepper', 
              desc: language === 'ro' ? 'O combinație îndrăzneață de migdale crocante și note picante' : 'A bold combination of crunchy almonds and spicy notes', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Fistic Iran' : 'Iranian Pistachio', 
              desc: language === 'ro' ? 'Înghețată premium cu cel mai fin fistic iranian' : 'Premium ice cream with the finest Iranian pistachio', 
              price: '32 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1505394033343-430c7b130e31?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Trandafir Picant' : 'Spicy Rose', 
              desc: language === 'ro' ? 'Aromă florală de trandafir cu un postgust surprinzător' : 'Floral rose flavor with a surprising aftertaste', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Ciocolată Picantă' : 'Spicy Chocolate', 
              desc: language === 'ro' ? 'Ciocolată neagră intensă cu note de chili' : 'Intense dark chocolate with chili notes', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Iaurt Libanez' : 'Lebanese Yogurt', 
              desc: language === 'ro' ? 'Gust proaspăt și ușor acrișor de iaurt tradițional' : 'Fresh and slightly tangy traditional yogurt taste', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Mango Egypt' : 'Egyptian Mango', 
              desc: language === 'ro' ? 'Mango exotic și dulce din inima Egiptului' : 'Exotic and sweet mango from the heart of Egypt', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Rodie Egipt' : 'Egyptian Pomegranate', 
              desc: language === 'ro' ? 'Sorbet revigorant de rodie egipteană' : 'Refreshing Egyptian pomegranate sorbet', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1541324908094-89d401807b05?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Baklava Fistic' : 'Pistachio Baklava Ice Cream', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu bucățele de baklava cu fistic' : 'Creamy ice cream with pistachio baklava chunks', 
              price: '30 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Baklava Nucă' : 'Walnut Baklava Ice Cream', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu bucățele de baklava cu nucă' : 'Creamy ice cream with walnut baklava chunks', 
              price: '30 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Smochine Cognac' : 'Figs with Cognac', 
              desc: language === 'ro' ? 'Aromă sofisticată de smochine infuzate în cognac' : 'Sophisticated flavor of figs infused in cognac', 
              price: '32 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1576092729250-a9cdeed0d7c9?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Trandafir cu Banane' : 'Rose with Bananas', 
              desc: language === 'ro' ? 'Un amestec delicat de petale de trandafir și banane coapte' : 'A delicate blend of rose petals and ripe bananas', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Fructul Pasiunii' : 'Passion Fruit', 
              desc: language === 'ro' ? 'Sorbet tropical intens și aromat' : 'Intense and aromatic tropical sorbet', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Castane' : 'Chestnuts', 
              desc: language === 'ro' ? 'Aromă bogată și catifelată de castane coapte' : 'Rich and velvety flavor of roasted chestnuts', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Caju' : 'Cashew', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu nuci caju prăjite' : 'Creamy ice cream with roasted cashew nuts', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1509911595703-f145ee65d538?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Zmeură' : 'Raspberry', 
              desc: language === 'ro' ? 'Sorbet proaspăt de zmeură de grădină' : 'Fresh garden raspberry sorbet', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1570059331455-47a184ff2ce4?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Ciocolată cu Amarene' : 'Chocolate with Sour Cherries', 
              desc: language === 'ro' ? 'Ciocolată fină cu cireșe amarene întregi' : 'Fine chocolate with whole amarene cherries', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Fructe de Pădure' : 'Mixed Berries', 
              desc: language === 'ro' ? 'Un mix exploziv de fructe de pădure proaspete' : 'An explosive mix of fresh forest fruits', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Căpșuni' : 'Strawberries', 
              desc: language === 'ro' ? 'Gustul clasic al căpșunilor de vară' : 'The classic taste of summer strawberries', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Cafea Arabică' : 'Arabic Coffee Ice Cream', 
              desc: language === 'ro' ? 'Înghețată intensă cu aromă de cafea la nisip' : 'Intense ice cream with sand-brewed coffee flavor', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: 'Kiwi', 
              desc: language === 'ro' ? 'Sorbet exotic și revigorant de kiwi' : 'Exotic and refreshing kiwi sorbet', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Alune de Pădure' : 'Hazelnuts', 
              desc: language === 'ro' ? 'Înghețată bogată cu alune de pădure prăjite' : 'Rich ice cream with roasted hazelnuts', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1507484467459-0c01be16726e?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Struguri Hamburg' : 'Hamburg Grapes', 
              desc: language === 'ro' ? 'Aromă unică de struguri negri parfumați' : 'Unique flavor of fragrant black grapes', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Grepfrut' : 'Grapefruit', 
              desc: language === 'ro' ? 'Sorbet răcoritor cu note amărui de grepfrut' : 'Refreshing sorbet with bitter grapefruit notes', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Nucă Neagră' : 'Black Walnut', 
              desc: language === 'ro' ? 'Aromă intensă și pământie de nucă neagră' : 'Intense and earthy black walnut flavor', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Banane' : 'Bananas', 
              desc: language === 'ro' ? 'Înghețată cremoasă cu banane proaspete' : 'Creamy ice cream with fresh bananas', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Pepene Galben' : 'Melon', 
              desc: language === 'ro' ? 'Sorbet dulce și parfumat de pepene galben' : 'Sweet and fragrant melon sorbet', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Cireșe' : 'Cherries', 
              desc: language === 'ro' ? 'Sorbet intens de cireșe coapte' : 'Intense ripe cherry sorbet', 
              price: '24 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Afine' : 'Blueberries', 
              desc: language === 'ro' ? 'Sorbet bogat în antioxidanți din afine proaspete' : 'Antioxidant-rich sorbet from fresh blueberries', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1497534446932-c946e7316ad3?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: 'Cocos', 
              desc: language === 'ro' ? 'Înghețată exotică cu lapte de cocos și fulgi' : 'Exotic ice cream with coconut milk and flakes', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1541612569410-056328346376?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Vanilie Madagascar' : 'Madagascar Vanilla', 
              desc: language === 'ro' ? 'Gustul autentic al păstăilor de vanilie de Madagascar' : 'The authentic taste of Madagascar vanilla beans', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1505394033343-430c7b130e31?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Caramel Sărat cu Alune' : 'Salted Caramel with Hazelnuts', 
              desc: language === 'ro' ? 'Echilibrul perfect între dulce, sărat și crocant' : 'The perfect balance between sweet, salty, and crunchy', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Ciocolată cu Portocale' : 'Chocolate with Oranges', 
              desc: language === 'ro' ? 'Combinația clasică de ciocolată neagră și citrice' : 'The classic combination of dark chocolate and citrus', 
              price: '28 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Ciocolată Neagră' : 'Dark Chocolate', 
              desc: language === 'ro' ? 'Ciocolată belgiană intensă cu 70% cacao' : 'Intense Belgian chocolate with 70% cocoa', 
              price: '26 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
            },
            { 
              name: language === 'ro' ? 'Lămâie' : 'Lemon', 
              desc: language === 'ro' ? 'Sorbet ultra-răcoritor de lămâie proaspătă' : 'Ultra-refreshing fresh lemon sorbet', 
              price: '22 lei', weight: '150g', image: 'https://images.unsplash.com/photo-1523677012327-4488992ba7d4?auto=format&fit=crop&q=80&w=800'
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