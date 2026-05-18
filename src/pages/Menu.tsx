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

// Import Dessert Images
import imgCheeseKnafeh from '@/assets/menu/cheese-knafeh.jpg';
import imgCheeseKnafehIceCream from '@/assets/menu/cheese-knafeh-ice-cream.jpg';
import imgAsmaliehMilkCream from '@/assets/menu/asmalieh-milk-cream.jpg';
import imgSquareAsmalieh from '@/assets/menu/square-asmalieh.jpg';
import imgMaamoulMilkCream from '@/assets/menu/maamoul-milk-cream.jpg';
import imgMixedBaklava from '@/assets/menu/mixed-baklava.jpg';
import imgPistachioTriangleBaklava from '@/assets/menu/pistachio-triangle-baklava.jpg';
import imgWalnutTriangleBaklava from '@/assets/menu/walnut-triangle-baklava.jpg';
import imgLargeWalnutBaklava from '@/assets/menu/large-walnut-baklava.jpg';
import imgCoconutBaklava from '@/assets/menu/coconut-baklava.jpg';
import imgCocoaBaklava from '@/assets/menu/cocoa-baklava.jpg';
import imgMilkCreamBaklava from '@/assets/menu/milk-cream-baklava.jpg';
import imgChocolateBaklava from '@/assets/menu/chocolate-baklava.jpg';
import imgBaklavaIceCream from '@/assets/menu/baklava-ice-cream.jpg';
import imgSpecialPistachioBaklava from '@/assets/menu/special-pistachio-baklava.jpg';
import imgHalawetElJibn from '@/assets/menu/halawet-el-jibn.jpg';
import imgBasima from '@/assets/menu/basima.jpg';
import imgBelourieh from '@/assets/menu/belourieh.jpg';
import imgHarise from '@/assets/menu/harise.jpg';
import imgHalva from '@/assets/menu/halva.jpg';
import imgHalvaChocolate from '@/assets/menu/halva-chocolate.jpg';
import imgTurkishDelight from '@/assets/menu/turkish-delight.jpg';
import imgRomanianCake from '@/assets/menu/romanian-cake.jpg';
import imgSfoof from '@/assets/menu/sfoof.jpg';
import imgMaamoulDates from '@/assets/menu/maamoul-dates.jpg';
import imgMaamoulWalnuts from '@/assets/menu/maamoul-walnuts.jpg';
import imgLebaneseProfiterole from '@/assets/menu/lebanese-profiterole.jpg';
import imgFruitChocolate from '@/assets/menu/fruit-chocolate.jpg';
import imgRicePudding from '@/assets/menu/rice-pudding.jpg';
import imgDriedMango from '@/assets/menu/dried-mango.jpg';
import imgDriedApricots from '@/assets/menu/dried-apricots.jpg';
import imgSesameBiscuits from '@/assets/menu/sesame-biscuits.jpg';
import imgGraibeBiscuits from '@/assets/menu/graibe-biscuits.jpg';

// Import Drink Images
import imgEspressoSingle from '@/assets/menu/espresso-single.jpg';
import imgEspressoDouble from '@/assets/menu/espresso-double.jpg';
import imgCappuccino from '@/assets/menu/cappuccino.jpg';
import imgCaffeLatte from '@/assets/menu/caffe-latte.jpg';
import imgTurkishCoffee from '@/assets/menu/turkish-coffee.jpg';
import imgTurkishCoffeeCardamom from '@/assets/menu/turkish-coffee-cardamom.jpg';
import imgClassicFrappe from '@/assets/menu/classic-frappe.jpg';
import imgBananaFrappe from '@/assets/menu/banana-frappe.jpg';
import imgStrawberryFrappe from '@/assets/menu/strawberry-frappe.jpg';
import imgIceCreamFrappe from '@/assets/menu/ice-cream-frappe.jpg';
import imgHotChocolate from '@/assets/menu/hot-chocolate.jpg';
import imgIcedCoffee from '@/assets/menu/iced-coffee.jpg';
import imgSahlep from '@/assets/menu/sahlep.jpg';
import imgFreshOrange from '@/assets/menu/fresh-orange.jpg';
import imgFreshGrapefruit from '@/assets/menu/fresh-grapefruit.jpg';
import imgMixedFresh from '@/assets/menu/mixed-fresh.jpg';
import imgClassicLemonade from '@/assets/menu/classic-lemonade.jpg';
import imgMintLemonade from '@/assets/menu/mint-lemonade.jpg';
import imgMangoLemonade from '@/assets/menu/mango-lemonade.jpg';
import imgRaspberryLemonade from '@/assets/menu/raspberry-lemonade.jpg';
import imgStrawberryLemonade from '@/assets/menu/strawberry-lemonade.jpg';
import imgPomegranateLemonade from '@/assets/menu/pomegranate-lemonade.jpg';
import imgHibiscusLemonade from '@/assets/menu/hibiscus-lemonade.jpg';
import imgGingerLimeLemonade from '@/assets/menu/ginger-lime-lemonade.jpg';
import imgEgyptianMangoLemonade from '@/assets/menu/egyptian-mango-lemonade.jpg';
import imgHotLemonade from '@/assets/menu/hot-lemonade.jpg';
import imgCitronada from '@/assets/menu/citronada.jpg';
import imgGuavaJuice from '@/assets/menu/guava-juice.jpg';
import imgMangoJuice from '@/assets/menu/mango-juice.jpg';
import imgNojito from '@/assets/menu/nojito.jpg';
import imgGreenApple from '@/assets/menu/green-apple.jpg';
import imgStrawberryDaiquiri from '@/assets/menu/strawberry-daiquiri.jpg';
import imgFreezPineappleCoconut from '@/assets/menu/freez-pineapple-coconut.jpg';
import imgFreezBerry from '@/assets/menu/freez-berry.jpg';
import imgFreezKiwiLime from '@/assets/menu/freez-kiwi-lime.jpg';
import imgFreezLemonMint from '@/assets/menu/freez-lemon-mint.jpg';
import imgFreezMangoPeach from '@/assets/menu/freez-mango-peach.jpg';

const MenuPage = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'desserts' | 'drinks' | 'food'>('desserts');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const menuData = useMemo(() => ({
    desserts: {
      title: t('menu.main.desserts'),
      icon: <UtensilsCrossed size={20} />,
      sections: [
        {
          title: language === 'ro' ? 'Deserturi Arabe Tradiționale' : 'Traditional Arabic Desserts',
          items: [
            // Knafeh Items
            { name: language === 'ro' ? 'Knafeh cu Brânză' : 'Cheese Knafeh', desc: language === 'ro' ? 'Desert tradițional cald cu brânză topită și sirop' : 'Traditional warm dessert with melted cheese and syrup', image: imgCheeseKnafeh },
            { name: language === 'ro' ? 'Knafeh cu Brânză și Înghețată' : 'Cheese Knafeh with Ice Cream', desc: language === 'ro' ? 'Combinația perfectă de cald și rece' : 'The perfect combination of hot and cold', image: imgCheeseKnafehIceCream },
            { name: language === 'ro' ? 'Asmalieh cu Cremă de Lapte' : 'Asmalieh with Milk Cream', desc: language === 'ro' ? 'Fidea crocantă cu cremă fină' : 'Crispy vermicelli with fine cream', image: imgAsmaliehMilkCream },
            { name: language === 'ro' ? 'Asmalieh Pătrat' : 'Square Asmalieh', desc: language === 'ro' ? 'Formă tradițională pătrată' : 'Traditional square shape', image: imgSquareAsmalieh },
            { name: language === 'ro' ? 'Mamoul cu Cremă de Lapte' : 'Mamoul with Milk Cream', desc: language === 'ro' ? 'Prăjitură fină umplută cu cremă' : 'Fine pastry filled with cream', image: imgMaamoulMilkCream },
            // Baklava Items
            { name: language === 'ro' ? 'Mix Baklava' : 'Mixed Baklava', desc: language === 'ro' ? 'Selecție variată de baklava artizanală' : 'Varied selection of artisanal baklava', image: imgMixedBaklava },
            { name: language === 'ro' ? 'Baklava Triunghi cu Fistic' : 'Pistachio Triangle Baklava', desc: language === 'ro' ? 'Triunghi crocant cu fistic premium' : 'Crispy triangle with premium pistachio', image: imgPistachioTriangleBaklava },
            { name: language === 'ro' ? 'Baklava Triunghi cu Nucă' : 'Walnut Triangle Baklava', desc: language === 'ro' ? 'Triunghi crocant cu nucă selecționată' : 'Crispy triangle with selected walnut', image: imgWalnutTriangleBaklava },
            { name: language === 'ro' ? 'Baklava Mare cu Nucă' : 'Large Walnut Baklava', desc: language === 'ro' ? 'Porție generoasă de baklava cu nucă' : 'Generous portion of walnut baklava', image: imgLargeWalnutBaklava },
            { name: language === 'ro' ? 'Baklava cu Cocos' : 'Coconut Baklava', desc: language === 'ro' ? 'Aromă exotică de cocos' : 'Exotic coconut flavor', image: imgCoconutBaklava },
            { name: language === 'ro' ? 'Baklava cu Cacao' : 'Cocoa Baklava', desc: language === 'ro' ? 'Baklava cu note intense de cacao' : 'Baklava with intense cocoa notes', image: imgCocoaBaklava },
            { name: language === 'ro' ? 'Baklava cu Cremă de Lapte' : 'Milk Cream Baklava', desc: language === 'ro' ? 'Baklava fină cu cremă de lapte' : 'Fine baklava with milk cream', image: imgMilkCreamBaklava },
            { name: language === 'ro' ? 'Baklava cu Ciocolată' : 'Chocolate Baklava', desc: language === 'ro' ? 'Combinație modernă cu ciocolată' : 'Modern combination with chocolate', image: imgChocolateBaklava },
            { name: language === 'ro' ? 'Baklava cu Înghețată' : 'Baklava with Ice Cream', desc: language === 'ro' ? 'Desertul suprem' : 'The ultimate dessert', image: imgBaklavaIceCream },
            { name: language === 'ro' ? 'Baklava Specială cu Fistic' : 'Special Pistachio Baklava', desc: language === 'ro' ? 'Rețetă specială cu extra fistic' : 'Special recipe with extra pistachio', image: imgSpecialPistachioBaklava },
            // Traditional Items
            { name: 'Halawet El Jibn', desc: language === 'ro' ? 'Rulouri de brânză cu cremă și fistic' : 'Cheese rolls with cream and pistachio', image: imgHalawetElJibn },
            { name: 'Basima', desc: language === 'ro' ? 'Prăjitură densă cu cocos' : 'Dense coconut cake', image: imgBasima },
            { name: 'Belourieh', desc: language === 'ro' ? 'Fidea albă cu fistic' : 'White vermicelli with pistachio', image: imgBelourieh },
            { name: 'Harise', desc: language === 'ro' ? 'Prăjitură tradițională din griș' : 'Traditional semolina cake', image: imgHarise },
            { name: 'Halva', desc: language === 'ro' ? 'Halva tradițională artizanală' : 'Traditional artisanal halva', image: imgHalva },
            { name: language === 'ro' ? 'Halva cu Ciocolată' : 'Halva with Chocolate', desc: language === 'ro' ? 'Halva cu inserții de ciocolată' : 'Halva with chocolate inserts', image: imgHalvaChocolate },
            { name: language === 'ro' ? 'Rahat Turcesc' : 'Turkish Delight', desc: language === 'ro' ? 'Diverse arome tradiționale' : 'Various traditional flavors', image: imgTurkishDelight },
            { name: language === 'ro' ? 'Prăjitură Românească' : 'Romanian Cake', desc: language === 'ro' ? 'Desert local tradițional' : 'Traditional local dessert', image: imgRomanianCake },
            { name: 'Sfoof', desc: language === 'ro' ? 'Prăjitură libaneză cu turmeric' : 'Lebanese turmeric cake', image: imgSfoof },
            { name: 'Mini Pizza', desc: language === 'ro' ? 'Mini pizza tradițională' : 'Traditional mini pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800' },
          ]
        },
        {
          title: language === 'ro' ? 'Patiserie Sărată' : 'Savory Pastries',
          items: [
            { name: 'Sfiha', desc: language === 'ro' ? 'Plăcintă cu carne tocată' : 'Minced meat pie', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Patiserie cu Spanac' : 'Spinach Pastry', desc: language === 'ro' ? 'Plăcintă tradițională cu spanac' : 'Traditional spinach pie', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Maamoul cu Curmale' : 'Maamoul with Dates', desc: language === 'ro' ? 'Biscuiți fragezi cu curmale' : 'Shortbread cookies with dates', image: imgMaamoulDates },
            { name: language === 'ro' ? 'Maamoul cu Nuci' : 'Maamoul with Walnuts', desc: language === 'ro' ? 'Biscuiți fragezi cu nuci' : 'Shortbread cookies with walnuts', image: imgMaamoulWalnuts },
            { name: language === 'ro' ? 'Profiterol Libanez' : 'Lebanese Profiterole', desc: language === 'ro' ? 'Profiterol cu specific libanez' : 'Lebanese style profiterole', image: imgLebaneseProfiterole },
          ]
        },
        {
          title: language === 'ro' ? 'Praline și Dulciuri Speciale' : 'Pralines & Specialty Sweets',
          items: [
            { name: language === 'ro' ? 'Praline cu Curmale și Fistic' : 'Pralines with Dates & Pistachio', desc: language === 'ro' ? 'Combinație fină de curmale și fistic' : 'Fine combination of dates and pistachio', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Mix Praline' : 'Mixed Pralines', desc: language === 'ro' ? 'Selecție de praline artizanale' : 'Selection of artisanal pralines', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Tablete de Ciocolată' : 'Chocolate Tablets', desc: language === 'ro' ? 'Ciocolată artizanală premium' : 'Premium artisanal chocolate', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Fructe în Ciocolată' : 'Fruit in Chocolate', desc: language === 'ro' ? 'Fructe confiate învelite în ciocolată' : 'Candied fruit dipped in chocolate', image: imgFruitChocolate },
            { name: language === 'ro' ? 'Orez cu Lapte' : 'Rice Pudding', desc: language === 'ro' ? 'Desert cremos tradițional' : 'Traditional creamy dessert', image: imgRicePudding },
            { name: language === 'ro' ? 'Mango Uscat' : 'Dried Mango', desc: language === 'ro' ? 'Fâșii de mango natural uscat' : 'Natural dried mango strips', image: imgDriedMango },
            { name: language === 'ro' ? 'Caise Uscate' : 'Dried Apricots', desc: language === 'ro' ? 'Caise naturale uscate' : 'Natural dried apricots', image: imgDriedApricots },
            { name: language === 'ro' ? 'Năut Prăjit' : 'Roasted Chickpeas', desc: language === 'ro' ? 'Gustare crocantă tradițională' : 'Traditional crunchy snack', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Miez de Nucă' : 'Walnut Kernels', desc: language === 'ro' ? 'Miez de nucă selecționat' : 'Selected walnut kernels', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Mix Nuci' : 'Mixed Nuts', desc: language === 'ro' ? 'Amestec de nuci premium' : 'Premium nut mix', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Biscuiți cu Susan' : 'Sesame Biscuits', desc: language === 'ro' ? 'Biscuiți crocanți cu susan' : 'Crunchy sesame biscuits', image: imgSesameBiscuits },
            { name: 'Graibe Biscuits', desc: language === 'ro' ? 'Biscuiți tradiționali fragezi' : 'Traditional shortbread biscuits', image: imgGraibeBiscuits },
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
            { name: language === 'ro' ? 'Migdale cu Piper Roz' : 'Almonds with Pink Pepper', desc: language === 'ro' ? 'O combinație îndrăzneață de migdale crocante și note picante' : 'A bold combination of crunchy almonds and spicy notes', image: imgAlmondsPinkPepper },
            { name: language === 'ro' ? 'Fistic Iran' : 'Iranian Pistachio', desc: language === 'ro' ? 'Înghețată premium cu cel mai fin fistic iranian' : 'Premium ice cream with the finest Iranian pistachio', image: imgIranianPistachio },
            { name: language === 'ro' ? 'Trandafir Picant' : 'Spicy Rose', desc: language === 'ro' ? 'Aromă florală de trandafir cu un postgust surprinzător' : 'Floral rose flavor with a surprising aftertaste', image: imgSpicyRose },
            { name: language === 'ro' ? 'Ciocolată Picantă' : 'Spicy Chocolate', desc: language === 'ro' ? 'Ciocolată neagră intensă cu note de chili' : 'Intense dark chocolate with chili notes', image: imgSpicyChocolate },
            { name: language === 'ro' ? 'Iaurt Libanez' : 'Lebanese Yogurt', desc: language === 'ro' ? 'Gust proaspăt și ușor acrișor de iaurt tradițional' : 'Fresh and slightly tangy traditional yogurt taste', image: imgYogurt },
            { name: language === 'ro' ? 'Mango Egypt' : 'Egyptian Mango', desc: language === 'ro' ? 'Mango exotic și dulce din inima Egiptului' : 'Exotic and sweet mango from the heart of Egypt', image: imgMango },
            { name: language === 'ro' ? 'Rodie Egipt' : 'Egyptian Pomegranate', desc: language === 'ro' ? 'Sorbet revigorant de rodie egipteană' : 'Refreshing Egyptian pomegranate sorbet', image: imgPomegranate },
            { name: language === 'ro' ? 'Baklava Fistic' : 'Pistachio Baklava Ice Cream', desc: language === 'ro' ? 'Înghețată cremoasă cu bucățele de baklava cu fistic' : 'Creamy ice cream with pistachio baklava chunks', image: imgBaklavaPistachio },
            { name: language === 'ro' ? 'Baklava Nucă' : 'Walnut Baklava Ice Cream', desc: language === 'ro' ? 'Înghețată cremoasă cu bucățele de baklava cu nucă' : 'Creamy ice cream with walnut baklava chunks', image: imgBaklavaWalnut },
            { name: language === 'ro' ? 'Smochine Cognac' : 'Figs with Cognac', desc: language === 'ro' ? 'Aromă sofisticată de smochine infuzate în cognac' : 'Sophisticated flavor of figs infused in cognac', image: imgFigs },
            { name: language === 'ro' ? 'Trandafir cu Banane' : 'Rose with Bananas', desc: language === 'ro' ? 'Un amestec delicat de petale de trandafir și banane coapte' : 'A delicate blend of rose petals and ripe bananas', image: imgRoseBanana },
            { name: language === 'ro' ? 'Fructul Pasiunii' : 'Passion Fruit', desc: language === 'ro' ? 'Sorbet tropical intens și aromat' : 'Intense and aromatic tropical sorbet', image: imgPassionFruit },
            { name: language === 'ro' ? 'Castane' : 'Chestnuts', desc: language === 'ro' ? 'Aromă bogată și catifelată de castane coapte' : 'Rich and velvety flavor of roasted chestnuts', image: imgChestnuts },
            { name: language === 'ro' ? 'Caju' : 'Cashew', desc: language === 'ro' ? 'Înghețată cremoasă cu nuci caju prăjite' : 'Creamy ice cream with roasted cashew nuts', image: imgCashew },
            { name: language === 'ro' ? 'Zmeură' : 'Raspberry', desc: language === 'ro' ? 'Sorbet proaspăt de zmeură de grădină' : 'Fresh garden raspberry sorbet', image: imgRaspberry },
            { name: language === 'ro' ? 'Ciocolată cu Amarene' : 'Chocolate with Sour Cherries', desc: language === 'ro' ? 'Ciocolată fină cu cireșe amarene întregi' : 'Fine chocolate with whole amarene cherries', image: imgChocolateAmarene },
            { name: language === 'ro' ? 'Fructe de Pădure' : 'Mixed Berries', desc: language === 'ro' ? 'Un amestec exploziv de fructe de pădure proaspete' : 'An explosive mix of fresh forest fruits', image: imgMixedBerries },
            { name: language === 'ro' ? 'Căpșuni' : 'Strawberries', desc: language === 'ro' ? 'Gustul clasic al căpșunilor de vară' : 'The classic taste of summer strawberries', image: imgStrawberries },
            { name: language === 'ro' ? 'Cafea Arabică' : 'Arabic Coffee Ice Cream', desc: language === 'ro' ? 'Înghețată intensă cu aromă de cafea la nisip' : 'Intense ice cream with sand-brewed coffee flavor', image: imgArabicCoffeeIce },
            { name: 'Kiwi', desc: language === 'ro' ? 'Sorbet exotic și revigorant de kiwi' : 'Exotic and refreshing kiwi sorbet', image: imgKiwi },
            { name: language === 'ro' ? 'Alune de Pădure' : 'Hazelnuts', desc: language === 'ro' ? 'Înghețată bogată cu alune de pădure prăjite' : 'Rich ice cream with roasted hazelnuts', image: imgHazelnuts },
            { name: language === 'ro' ? 'Struguri Hamburg' : 'Hamburg Grapes', desc: language === 'ro' ? 'Aromă unică de struguri negri parfumați' : 'Unique flavor of fragrant black grapes', image: imgHamburgGrapes },
            { name: language === 'ro' ? 'Grepfrut' : 'Grapefruit', desc: language === 'ro' ? 'Sorbet răcoritor cu note amărui de grepfrut' : 'Refreshing sorbet with bitter grapefruit notes', image: imgGrapefruit },
            { name: language === 'ro' ? 'Nucă Neagră' : 'Black Walnut', desc: language === 'ro' ? 'Aromă intensă și pământie de nucă neagră' : 'Intense and earthy black walnut flavor', image: imgBlackWalnut },
            { name: language === 'ro' ? 'Banane' : 'Bananas', desc: language === 'ro' ? 'Înghețată cremoasă cu banane proaspete' : 'Creamy ice cream with fresh bananas', image: imgBananas },
            { name: language === 'ro' ? 'Pepene Galben' : 'Melon', desc: language === 'ro' ? 'Sorbet dulce și parfumat de pepene galben' : 'Sweet and fragrant melon sorbet', image: imgMelon },
            { name: language === 'ro' ? 'Cireșe' : 'Cherries', desc: language === 'ro' ? 'Sorbet intens de cireșe coapte' : 'Intense ripe cherry sorbet', image: imgCherries },
            { name: language === 'ro' ? 'Afine' : 'Blueberries', desc: language === 'ro' ? 'Sorbet bogat în antioxidanți din afine proaspete' : 'Antioxidant-rich sorbet from fresh blueberries', image: imgBlueberries },
            { name: 'Cocos', desc: language === 'ro' ? 'Înghețată exotică cu lapte de cocos și fulgi' : 'Exotic ice cream with coconut milk and flakes', image: imgCoconut },
            { name: language === 'ro' ? 'Vanilie Madagascar' : 'Madagascar Vanilla', desc: language === 'ro' ? 'Gustul autentic al păstăilor de vanilie de Madagascar' : 'The authentic taste of Madagascar vanilla beans', image: imgVanilla },
            { name: language === 'ro' ? 'Caramel Sărat cu Alune' : 'Salted Caramel with Hazelnuts', desc: language === 'ro' ? 'Echilibrul perfect între dulce, sărat și crocant' : 'The perfect balance between sweet, salty, and crunchy', image: imgSaltedCaramel },
            { name: language === 'ro' ? 'Ciocolată cu Portocale' : 'Chocolate with Oranges', desc: language === 'ro' ? 'Combinația clasică de ciocolată neagră și citrice' : 'The classic combination of dark chocolate and citrus', image: imgChocolateOrange },
            { name: language === 'ro' ? 'Ciocolată Neagră' : 'Dark Chocolate', desc: language === 'ro' ? 'Ciocolată belgiană intensă cu 70% cacao' : 'Intense Belgian chocolate with 70% cocoa', image: imgDarkChocolate },
            { name: language === 'ro' ? 'Lămâie' : 'Lemon', desc: language === 'ro' ? 'Sorbet ultra-răcoritor de lămâie proaspătă' : 'Ultra-refreshing fresh lemon sorbet', image: imgLemon },
          ]
        }
      ]
    },
    drinks: {
      title: t('menu.main.drinks'),
      icon: <Coffee size={20} />,
      sections: [
        {
          title: language === 'ro' ? 'Cafea și Espresso' : 'Coffee & Espresso',
          items: [
            { name: 'Espresso Single', desc: language === 'ro' ? 'Espresso scurt și intens' : 'Short and intense espresso', image: imgEspressoSingle },
            { name: 'Espresso Double', desc: language === 'ro' ? 'Doză dublă de energie' : 'Double dose of energy', image: imgEspressoDouble },
            { name: 'Cappuccino', desc: language === 'ro' ? 'Espresso cu spumă de lapte fină' : 'Espresso with fine milk foam', image: imgCappuccino },
            { name: 'Caffè Latte', desc: language === 'ro' ? 'Băutură cremoasă cu lapte' : 'Creamy milk drink', image: imgCaffeLatte },
            { name: language === 'ro' ? 'Cafea Turcească' : 'Turkish Coffee', desc: language === 'ro' ? 'Cafea tradițională la ibric' : 'Traditional pot-brewed coffee', image: imgTurkishCoffee },
            { name: language === 'ro' ? 'Cafea Turcească cu Cardamom' : 'Turkish Coffee with Cardamom', desc: language === 'ro' ? 'Aromă autentică orientală' : 'Authentic oriental flavor', image: imgTurkishCoffeeCardamom },
            { name: language === 'ro' ? 'Cafea Turcească Specială' : 'Specialty Turkish Coffee', desc: language === 'ro' ? 'Selecție premium de cafea' : 'Premium coffee selection', image: imgTurkishCoffee },
            { name: language === 'ro' ? 'Cafea la Nisip' : 'Sand Coffee', desc: language === 'ro' ? 'Preparată tradițional pe nisip încins' : 'Traditionally prepared on hot sand', image: imgTurkishCoffee },
            { name: language === 'ro' ? 'Ciocolată Caldă' : 'Hot Chocolate', desc: language === 'ro' ? 'Ciocolată densă și cremoasă' : 'Thick and creamy chocolate', image: imgHotChocolate },
            { name: language === 'ro' ? 'Cafea Gheață' : 'Iced Coffee', desc: language === 'ro' ? 'Cafea revigorantă cu gheață' : 'Refreshing coffee with ice', image: imgIcedCoffee },
            { name: 'Sahlep', desc: language === 'ro' ? 'Băutură tradițională caldă de iarnă' : 'Traditional warm winter drink', image: imgSahlep },
            { name: 'Extra shot', desc: language === 'ro' ? 'Doză suplimentară de espresso' : 'Additional espresso shot', image: imgEspressoSingle },
            { name: language === 'ro' ? 'Opțiune Lapte Vegetal' : 'Plant milk option', desc: language === 'ro' ? 'Migdale, ovăz sau soia' : 'Almond, oat, or soy', image: imgCaffeLatte },
            { name: 'Affogato', desc: language === 'ro' ? 'Espresso peste înghețată de vanilie' : 'Espresso over vanilla ice cream', image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' },
          ]
        },
        {
          title: language === 'ro' ? 'Frappe-uri și Băuturi Speciale' : 'Frappes & Specialty Drinks',
          items: [
            { name: 'Classic Frappe', desc: language === 'ro' ? 'Frappe clasic revigorant' : 'Refreshing classic frappe', image: imgClassicFrappe },
            { name: 'Banana Frappe', desc: language === 'ro' ? 'Frappe cu aromă de banane' : 'Banana flavored frappe', image: imgBananaFrappe },
            { name: 'Strawberry Frappe', desc: language === 'ro' ? 'Frappe cu căpșuni proaspete' : 'Frappe with fresh strawberries', image: imgStrawberryFrappe },
            { name: 'Ice Cream Frappe', desc: language === 'ro' ? 'Frappe cu o cupă de înghețată' : 'Frappe with a scoop of ice cream', image: imgIceCreamFrappe },
            { name: language === 'ro' ? 'Variații Frappe Speciale' : 'Specialty Frappe variations', desc: language === 'ro' ? 'Arome sezoniere' : 'Seasonal flavors', image: imgClassicFrappe },
          ]
        },
        {
          title: language === 'ro' ? 'Sucuri Proaspete și Băuturi ale Casei' : 'Fresh Juices & House Drinks',
          items: [
            { name: language === 'ro' ? 'Portocale Proaspete' : 'Fresh Orange', desc: language === 'ro' ? 'Suc de portocale proaspăt stors' : 'Freshly squeezed orange juice', image: imgFreshOrange },
            { name: language === 'ro' ? 'Grepfrut Proaspăt' : 'Fresh Grapefruit', desc: language === 'ro' ? 'Suc de grepfrut proaspăt stors' : 'Freshly squeezed grapefruit juice', image: imgFreshGrapefruit },
            { name: language === 'ro' ? 'Mix Proaspăt' : 'Mixed Fresh', desc: language === 'ro' ? 'Combinație de fructe proaspete' : 'Combination of fresh fruits', image: imgMixedFresh },
            { name: 'Vitamin Protein Fresh', desc: language === 'ro' ? 'Mix energizant' : 'Energizing mix', image: imgMixedFresh },
            { name: language === 'ro' ? 'Limonadă Clasică' : 'Classic Lemonade', desc: language === 'ro' ? 'Lămâie, apă și miere' : 'Lemon, water, and honey', image: imgClassicLemonade },
            { name: language === 'ro' ? 'Limonadă cu Mentă' : 'Mint Lemonade', desc: language === 'ro' ? 'Limonadă cu mentă proaspătă' : 'Lemonade with fresh mint', image: imgMintLemonade },
            { name: language === 'ro' ? 'Limonadă cu Mango' : 'Mango Lemonade', desc: language === 'ro' ? 'Limonadă cu piure de mango' : 'Lemonade with mango puree', image: imgMangoLemonade },
            { name: language === 'ro' ? 'Limonadă cu Zmeură' : 'Raspberry Lemonade', desc: language === 'ro' ? 'Limonadă cu zmeură proaspătă' : 'Lemonade with fresh raspberries', image: imgRaspberryLemonade },
            { name: language === 'ro' ? 'Limonadă cu Căpșuni' : 'Strawberry Lemonade', desc: language === 'ro' ? 'Limonadă cu căpșuni proaspete' : 'Lemonade with fresh strawberries', image: imgStrawberryLemonade },
            { name: language === 'ro' ? 'Limonadă cu Rodie' : 'Pomegranate Lemonade', desc: language === 'ro' ? 'Limonadă cu suc de rodie' : 'Lemonade with pomegranate juice', image: imgPomegranateLemonade },
            { name: language === 'ro' ? 'Limonadă cu Hibiscus' : 'Hibiscus Lemonade', desc: language === 'ro' ? 'Limonadă cu infuzie de hibiscus' : 'Lemonade with hibiscus infusion', image: imgHibiscusLemonade },
            { name: language === 'ro' ? 'Limonadă cu Ghimbir și Lime' : 'Ginger & Lime Lemonade', desc: language === 'ro' ? 'Limonadă picantă și revigorantă' : 'Spicy and refreshing lemonade', image: imgGingerLimeLemonade },
            { name: language === 'ro' ? 'Limonadă cu Mango Egiptean' : 'Egyptian Mango Lemonade', desc: language === 'ro' ? 'Limonadă cu mango premium' : 'Lemonade with premium mango', image: imgEgyptianMangoLemonade },
            { name: language === 'ro' ? 'Limonadă Caldă' : 'Hot Lemonade', desc: language === 'ro' ? 'Limonadă caldă pentru zile reci' : 'Warm lemonade for cold days', image: imgHotLemonade },
            { name: 'Citronada', desc: language === 'ro' ? 'Băutură tradițională de citrice' : 'Traditional citrus drink', image: imgCitronada },
            { name: language === 'ro' ? 'Suc de Guava' : 'Guava Juice', desc: language === 'ro' ? 'Suc exotic de guava' : 'Exotic guava juice', image: imgGuavaJuice },
            { name: language === 'ro' ? 'Suc de Mango' : 'Mango Juice', desc: language === 'ro' ? 'Suc dens de mango' : 'Thick mango juice', image: imgMangoJuice },
          ]
        },
        {
          title: 'Mocktails',
          items: [
            { name: 'Nojito', desc: language === 'ro' ? 'Mojito fără alcool' : 'Non-alcoholic mojito', image: imgNojito },
            { name: 'Green Apple', desc: language === 'ro' ? 'Mocktail cu măr verde' : 'Green apple mocktail', image: imgGreenApple },
            { name: 'Strawberry Daiquiri', desc: language === 'ro' ? 'Daiquiri cu căpșuni fără alcool' : 'Non-alcoholic strawberry daiquiri', image: imgStrawberryDaiquiri },
            { name: 'Freez Pineapple & Coconut', desc: language === 'ro' ? 'Băutură carbogazoasă exotică' : 'Exotic carbonated drink', image: imgFreezPineappleCoconut },
            { name: 'Freez Berry', desc: language === 'ro' ? 'Băutură carbogazoasă cu fructe de pădure' : 'Berry carbonated drink', image: imgFreezBerry },
            { name: 'Freez Kiwi Lime', desc: language === 'ro' ? 'Băutură carbogazoasă cu kiwi și lime' : 'Kiwi lime carbonated drink', image: imgFreezKiwiLime },
            { name: 'Freez Lemon Mint', desc: language === 'ro' ? 'Băutură carbogazoasă cu lămâie și mentă' : 'Lemon mint carbonated drink', image: imgFreezLemonMint },
            { name: 'Freez Mango Peach', desc: language === 'ro' ? 'Băutură carbogazoasă cu mango și piersică' : 'Mango peach carbonated drink', image: imgFreezMangoPeach },
          ]
        },
        {
          title: language === 'ro' ? 'Băuturi Răcoritoare' : 'Soft Drinks',
          items: [
            { name: 'Pepsi / Zero / Twist', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: '7UP', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Mirinda', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Lipton Ice Tea', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Prigat', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Coca-Cola / Zero', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Fanta', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Sprite', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Schweppes', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Fuze Tea', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Apă' : 'Water', desc: '330ml / 750ml', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800' },
            { name: 'Rockstar', desc: '250ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Ursus Fără Alcool' : 'Ursus Non-Alcoholic Beer', desc: '330ml', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800' },
          ]
        }
      ]
    },
    food: {
      title: t('menu.main.food'),
      icon: <Utensils size={20} />,
      sections: [
        {
          title: language === 'ro' ? 'Mic Dejun și Sărat' : 'Breakfast & Savory',
          items: [
            { name: 'Full', desc: language === 'ro' ? 'Mic dejun tradițional' : 'Traditional breakfast', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Hummus', desc: language === 'ro' ? 'Pastă de năut cu tahini' : 'Chickpea puree with tahini', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Hummus cu Muguri de Pin' : 'Hummus with Pine Nuts', desc: language === 'ro' ? 'Hummus cremos cu muguri de pin prăjiți' : 'Creamy hummus with roasted pine nuts', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Baba Ghanoush', desc: language === 'ro' ? 'Salată de vinete coapte' : 'Roasted eggplant salad', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Moutabbal', desc: language === 'ro' ? 'Vinete coapte cu tahini' : 'Roasted eggplant with tahini', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Moutabbal de Dovlecei' : 'Zucchini Moutabbal', desc: language === 'ro' ? 'Dovlecei copți cu iaurt și tahini' : 'Roasted zucchini with yogurt and tahini', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Labneh', desc: language === 'ro' ? 'Cremă de iaurt libanez' : 'Lebanese yogurt cream', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Kabis', desc: language === 'ro' ? 'Murături libaneze asortate' : 'Assorted Lebanese pickles', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Makdous', desc: language === 'ro' ? 'Vinete umplute cu nuci și ardei' : 'Eggplants stuffed with walnuts and peppers', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Halloumi Grill', desc: language === 'ro' ? 'Brânză halloumi la grătar' : 'Grilled halloumi cheese', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Falafel (5 pcs)', desc: language === 'ro' ? 'Chifteluțe de năut crocante' : 'Crispy chickpea patties', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Fattoush', desc: language === 'ro' ? 'Salată proaspătă cu lipie crocantă' : 'Fresh salad with crispy flatbread', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Tabbouleh', desc: language === 'ro' ? 'Salată de pătrunjel cu bulgur' : 'Parsley salad with bulgur', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Lipie' : 'Flatbread', desc: language === 'ro' ? 'Lipie proaspătă' : 'Fresh flatbread', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Falafel Sandwich', desc: language === 'ro' ? 'Sandwich cu falafel și legume' : 'Sandwich with falafel and vegetables', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Halloumi Sandwich', desc: language === 'ro' ? 'Sandwich cu halloumi la grătar' : 'Sandwich with grilled halloumi', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: 'Makanek Sandwich', desc: language === 'ro' ? 'Sandwich cu cârnați libanezi' : 'Sandwich with Lebanese sausages', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Pizza Libaneză' : 'Lebanese Pizza', desc: language === 'ro' ? 'Pizza cu specific oriental' : 'Oriental style pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800' },
            { name: language === 'ro' ? 'Platou Salată' : 'Salad Platter', desc: language === 'ro' ? 'Mix de salate proaspete' : 'Fresh salad mix', image: 'https://images.unsplash.com/photo-1593001874117-c99c4edb8186?auto=format&fit=crop&q=80&w=800' },
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

  // Handle automatic scroll when activeTab changes
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (contentRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -200 : -180; 
      const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeTab]);

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
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
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

      <div className="pb-24">
        {/* Main Category Switcher - Redesigned for better aesthetics */}
        <div className="sticky top-[72px] z-40 bg-[#F5EFE6]/95 backdrop-blur-md border-b border-[#0D6D7E]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center py-4 md:py-6">
              <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                {(['desserts', 'drinks', 'food'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "relative px-4 py-2 text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap",
                      activeTab === tab ? "text-[#A55443]" : "text-[#0D6D7E]/60 hover:text-[#0D6D7E]"
                    )}
                  >
                    <span className={cn(
                      "p-2 rounded-xl transition-colors duration-300",
                      activeTab === tab ? "bg-[#A55443]/10" : "bg-transparent"
                    )}>
                      {React.cloneElement(menuData[tab].icon as React.ReactElement, { size: 18 })}
                    </span>
                    {menuData[tab].title}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A55443]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16" ref={contentRef}>
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
                    <div className="space-y-4 text-center md:text-left">
                      {section.title && (
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D6D7E] leading-tight">
                            {section.title}
                          </h2>
                          <div className="h-px bg-[#C99B3C]/30 flex-1 hidden md:block" />
                        </div>
                      )}
                      {section.info && (
                        <p className="text-gray-500 font-light italic text-sm md:text-base max-w-3xl leading-relaxed mx-auto md:mx-0">
                          {section.info}
                        </p>
                      )}
                      
                      {section.addons && (
                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-[#C99B3C]/20 mt-8">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-[#C99B3C]">
                            <Sparkles size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Customization</span>
                          </div>
                          <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {section.addons.map((addon, aIdx) => (
                              <div key={aIdx} className="bg-white px-5 py-2 rounded-full border border-[#0D6D7E]/5 shadow-sm text-sm font-medium text-[#0D6D7E]">
                                {addon.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Redesigned Grid Layout for Menu Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                      {section.items.map((item, i) => (
                        <motion.div 
                          key={item.name}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (i % 2) * 0.1 }}
                          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group cursor-pointer"
                          onClick={() => setSelectedImage(item.image)}
                        >
                          <div className="shrink-0 relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-700 relative">
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white" size={24} />
                              </div>
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                              />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#C99B3C] rounded-full flex items-center justify-center text-white shadow-lg z-20 scale-0 group-hover:scale-100 transition-transform duration-500">
                              <Sparkles size={14} />
                            </div>
                          </div>

                          <div className="flex-1 space-y-2 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0D6D7E] group-hover:text-[#A55443] transition-colors duration-300">
                                {item.name}
                              </h3>
                            </div>
                            <p className="text-gray-500 text-sm md:text-base font-light italic leading-relaxed line-clamp-3">
                              {item.desc}
                            </p>
                            <div className="pt-2 flex justify-center sm:justify-start">
                              <div className="h-0.5 w-0 group-hover:w-12 bg-[#C99B3C] transition-all duration-500" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-32">
                  <div className="w-20 h-20 bg-[#0D6D7E]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="text-[#0D6D7E]/20" size={32} />
                  </div>
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