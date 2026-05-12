import React from 'react';
import { motion } from 'motion/react';
import { Music, Star, Clock, Trophy, MapPin, Gift, Users, GlassWater } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Shared Components ---

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center", className)}>
    <svg 
      viewBox="0 0 100 120" 
      className="w-10 h-12 mb-1"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      {/* Crystal Hexagon-ish Shape */}
      <path d="M50 5 L85 30 L85 90 L50 115 L15 90 L15 30 Z" className="text-brand-red opacity-80" />
      {/* Facet Lines */}
      <path d="M50 5 L50 115" className="text-white/40" />
      <path d="M15 30 L85 30" className="text-white/40" />
      <path d="M15 90 L85 90" className="text-white/40" />
      <path d="M50 5 L85 30 L50 60 L15 30 Z" className="text-white/60" />
      <path d="M50 115 L15 90 L50 60 L85 90 Z" className="text-white/60" />
    </svg>
    <div className="flex flex-col items-center -mt-2">
      <span className="font-serif-display text-lg tracking-[0.3em] font-bold text-white leading-none">CRYSTAL</span>
      <span className="text-[7px] tracking-[0.5em] text-brand-red font-bold mt-1">KARAOKE</span>
    </div>
  </div>
);

const AmbientGlow = () => (
  <>
    <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[120px] pointer-events-none z-0" />
    <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none z-0" />
  </>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-16 text-center">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-brand-red font-sans text-xs uppercase tracking-[0.4em] font-semibold mb-6 block"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-serif-display font-bold leading-tight text-white mb-6 uppercase"
    >
      {children}
    </motion.h2>
    <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-brand-red to-transparent mx-auto" />
  </div>
);

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "glass rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-500 border-white/5",
    className
  )}>
    {children}
  </div>
);

const PremiumButton = ({ children, variant = 'primary', className, ...props }: any) => {
  const baseStyles = "px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 active:scale-95 text-center";
  const variants = {
    primary: "bg-gradient-to-r from-brand-red to-brand-dark-red text-white red-glow hover:brightness-110",
    outline: "border border-white/20 text-white hover:bg-white/10"
  };
  
  return (
    <button className={cn(baseStyles, variants[variant as keyof typeof variants], className)} {...props}>
      {children}
    </button>
  );
};

// --- Sections ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-gradient-to-b from-brand-black/90 to-transparent backdrop-blur-sm">
      <div className="flex items-center">
        <Logo className="scale-75 origin-left" />
      </div>
      
      <nav className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-medium text-white/60">
        <a href="#about" className="hover:text-white transition-colors">О клубе</a>
        <a href="#rooms" className="hover:text-white transition-colors">VIP Комнаты</a>
        <a href="#gallery" className="hover:text-white transition-colors">Галерея</a>
        <a href="#menu" className="hover:text-white transition-colors">Меню</a>
        <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
      </nav>

      <a href="#booking">
        <PremiumButton className="px-8 py-3">Бронь</PremiumButton>
      </a>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&q=75&w=1920&fit=crop" 
        alt="Premium Atmosphere"
        className="w-full h-full object-cover opacity-20 grayscale scale-110"
        referrerPolicy="no-referrer"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,51,0.15)_0%,transparent_70%)]" />
    </div>

    <div className="relative z-10 text-center px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-brand-red text-sm uppercase tracking-[0.4em] font-semibold mb-6 block drop-shadow-[0_0_10px_rgba(255,0,51,0.5)]">
          ПРЕМИАЛЬНАЯ НОЧНАЯ ЖИЗНЬ АЛМАТЫ
        </span>
        <h2 className="font-serif-display text-5xl md:text-8xl lg:text-9xl font-bold leading-tight mb-10 text-white">
          НОЧИ, <br/> КОТОРЫЕ <span className="italic text-brand-red">ПОМНЯТ</span>
        </h2>
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          VIP-комнаты, авторская атмосфера, лучшие вечеринки и незабываемый звук в самом сердце столицы.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <PremiumButton>Забронировать стол</PremiumButton>
          <a href="#rooms">
            <PremiumButton variant="outline">VIP залы</PremiumButton>
          </a>
        </div>
      </motion.div>
    </div>

    {/* Vertical Branding Rail */}
    <div className="absolute left-6 top-1/2 -translate-y-1/2 vertical-rail hidden xl:block">
      <p className="text-[10px] uppercase tracking-[0.8em] text-white/10 font-bold whitespace-nowrap">
        CRYSTAL KARAOKE • ПРЕМИАЛЬНЫЙ ОТДЫХ
      </p>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
      <div className="w-[1px] h-16 bg-gradient-to-b from-brand-red to-transparent shadow-[0_0_10px_rgba(255,0,51,0.8)]" />
    </div>
  </section>
);

const Advantages = () => {
  const items = [
    { icon: <Star className="w-8 h-8" />, title: "VIP комнаты", desc: "Приватные залы с эксклюзивным дизайном" },
    { icon: <Clock className="w-8 h-8" />, title: "Танцы до 6:00", desc: "Концепция All-Night Pleasure" },
    { icon: <Music className="w-8 h-8" />, title: "Meyer Sound", desc: "Профессиональная акустика мирового уровня" },
    { icon: <Trophy className="w-8 h-8" />, title: "Шоу-программы", desc: "Лучшие DJ и перформансы Алматы" },
    { icon: <Users className="w-8 h-8" />, title: "Авторский дизайн", desc: "Уникальная эстетика каждого пространства" },
    { icon: <MapPin className="w-8 h-8" />, title: "Центр города", desc: "Престижный район, проспект Аль-Фараби" },
    { icon: <Gift className="w-8 h-8" />, title: "Скидка именинникам", desc: "-20% привилегия в ваш день рождения" },
    { icon: <GlassWater className="w-8 h-8" />, title: "Haute Cuisine", desc: "Изысканная кухня и премиум бар" },
  ];

  return (
    <section id="about" className="py-32 bg-brand-black px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <SectionTitle subtitle="Наши привилегии">Эксклюзивный выбор</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-10 h-full flex flex-col items-center text-center group border-white/5 bg-white/[0.02]">
              <div className="text-brand-red mb-8 group-hover:scale-110 transition-transform duration-500 red-glow rounded-full p-4 bg-brand-red/5">
                {item.icon}
              </div>
              <h3 className="text-white font-serif-display font-semibold text-lg mb-4 tracking-wider uppercase">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const VipRooms = () => {
  const rooms = [
    { title: "Emerald Room", capacity: "до 15 чел", img: "https://images.unsplash.com/photo-1549497538-301228c9667d?auto=format&q=70&w=800&fit=crop" },
    { title: "Diamond Hall", capacity: "до 40 чел", img: "https://images.unsplash.com/photo-1514525253344-f814d0743b15?auto=format&q=70&w=800&fit=crop" },
    { title: "Ruby Lounge", capacity: "до 25 чел", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&q=70&w=800&fit=crop" },
  ];

  return (
    <section id="rooms" className="py-32 bg-[#080808] px-6 md:px-12 relative">
      <SectionTitle subtitle="Приватность и Комфорт">VIP-Залы</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {rooms.map((room, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-[600px] rounded-[40px] overflow-hidden cursor-pointer glass border-white/5"
          >
            <img 
              src={room.img} 
              alt={room.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            <div className="absolute inset-x-10 bottom-10">
              <span className="text-[10px] text-brand-red font-bold tracking-[0.3em] mb-3 block uppercase">Лучший выбор</span>
              <h3 className="text-3xl font-serif-display font-bold text-white mb-4 uppercase">{room.title}</h3>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-8">Вместимость: {room.capacity}</p>
              <PremiumButton variant="outline" className="w-full py-4 text-[10px]">Подробнее</PremiumButton>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&q=65&w=600&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&q=65&w=600&fit=crop",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&q=65&w=600&fit=crop",
    "https://images.unsplash.com/photo-1514525253361-b83f85f551c0?auto=format&q=65&w=600&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&q=65&w=600&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&q=65&w=600&fit=crop",
  ];

  return (
    <section id="gallery" className="py-32 bg-brand-black px-6 md:px-12">
      <SectionTitle subtitle="Атмосфера">Галерея</SectionTitle>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] overflow-hidden group border-white/5"
          >
            <img 
              src={img} 
              alt="Club Life" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-32 bg-[#080808] px-6 md:px-12 relative overflow-hidden">
      <SectionTitle subtitle="Гастрономия">Авторское меню</SectionTitle>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-16 relative z-10">
        <div className="flex-1 glass p-12 rounded-[40px] border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Коктейли", items: ["Crystal Martini", "Night Glow", "Red Lux"] },
              { title: "Крепкие напитки", items: ["Macallan 12", "Beluga Gold", "Patron"] },
              { title: "Фьюжн", items: ["Uni Shells", "Tiger Prawns", "A5 Wagyu"] },
              { title: "Классика", items: ["Truffle Pasta", "Sea Bass", "Duck Confit"] },
            ].map((category, idx) => (
              <div key={idx}>
                <h4 className="text-brand-red font-serif-display text-base uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                  {category.title}
                </h4>
                <ul className="space-y-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center group cursor-pointer">
                      <span className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-tight">{item}</span>
                      <div className="h-px flex-grow mx-4 bg-white/10" />
                      <span className="text-brand-red font-serif-display text-[10px]">LUXE</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <PremiumButton variant="outline">Полное меню</PremiumButton>
          </div>
        </div>
        
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="flex-1 glass rounded-[40px] overflow-hidden border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1549497538-301228c9667d?auto=format&q=70&w=600&fit=crop" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="h-1/3 glass rounded-[40px] p-8 flex flex-col justify-center border-brand-red/20 bg-brand-red/[0.02]">
            <p className="text-brand-red text-[10px] uppercase tracking-[0.3em] font-bold mb-2">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</p>
            <h4 className="font-serif-display text-xl text-white uppercase italic">Crystal Hookah Mix</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-32 bg-brand-black px-6 md:px-12">
      <div className="max-w-6xl mx-auto glass rounded-[50px] overflow-hidden border-brand-red/10 bg-brand-black/40 flex flex-col md:flex-row">
        <div className="md:w-5/12 p-16 bg-gradient-to-br from-brand-red/20 to-transparent">
          <h3 className="font-serif-display text-5xl font-bold text-white mb-8 uppercase leading-tight">МГНОВЕННОЕ <br/> <span className="text-brand-red">БРОНИРОВАНИЕ</span></h3>
          <p className="text-white/40 text-sm leading-relaxed mb-12">
            Мгновенное подтверждение через персонального консьержа. Ваш вечер в надежных руках.
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em] mb-2 font-mono">АДРЕС</p>
              <p className="text-white font-medium">Алматы, Аль-Фараби 7, Блок 5а</p>
            </div>
            <div>
              <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em] mb-2 font-mono">ТЕЛЕФОН</p>
              <p className="text-white font-medium">+7 (777) 001 00 07</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-7/12 p-16 flex flex-col justify-center">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1">Имя</label>
              <input type="text" className="w-full bg-white/5 border-b border-white/20 text-white p-3 focus:outline-none focus:border-brand-red transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1">Телефон</label>
              <input type="tel" className="w-full bg-white/5 border-b border-white/20 text-white p-3 focus:outline-none focus:border-brand-red transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1">Дата</label>
              <input type="text" placeholder="24.05" className="w-full bg-white/5 border-b border-white/20 text-white p-3 focus:outline-none focus:border-brand-red transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1">Гости</label>
              <input type="text" placeholder="4" className="w-full bg-white/5 border-b border-white/20 text-white p-3 focus:outline-none focus:border-brand-red transition-all" />
            </div>
            <div className="sm:col-span-2 pt-8">
              <PremiumButton className="w-full sm:w-auto h-14 px-16">Забронировать сейчас</PremiumButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Contacts = () => (
  <section id="contacts" className="py-32 bg-[#080808] px-6 md:px-12 relative">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
      <div className="flex-1 space-y-12">
        <SectionTitle subtitle="Свяжитесь с нами">Контакт-центр</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
             <p className="text-[10px] uppercase tracking-[0.2em] text-brand-red font-bold mb-4">Адрес</p>
             <p className="text-xl text-white/80 font-serif-display leading-relaxed">Алматы, пр. Аль-Фараби 7, Блок 5а</p>
          </div>
          <div>
             <p className="text-[10px] uppercase tracking-[0.2em] text-brand-red font-bold mb-4">Часы работы</p>
             <p className="text-xl text-white/80 font-serif-display leading-relaxed">18:00 – 06:00 Ежедневно</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 border-t border-white/10">
          <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[0.3em]">Instagram</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[0.3em]">Telegram</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[0.3em]">WhatsApp</a>
        </div>
      </div>
      
      <div className="lg:w-1/2 h-[500px] w-full glass rounded-[50px] overflow-hidden relative border-white/5 grayscale">
        <div className="absolute inset-0 bg-brand-red/10 animate-pulse pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-16 h-16 text-brand-red opacity-30" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-brand-black px-6 md:px-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <Logo className="scale-110" />
      
      <p className="text-[9px] text-white/30 uppercase tracking-[0.4em]">© 2026 CRYSTAL GROUP. СОЗДАНО В AI Studio.</p>
    </div>
  </footer>
);

// --- Main Application ---

export default function CrystalKaraoke() {
  return (
    <div className="bg-brand-black text-white selection:bg-brand-red selection:text-white min-h-screen font-sans">
      <AmbientGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Advantages />
        <VipRooms />
        <Gallery />
        <Menu />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
