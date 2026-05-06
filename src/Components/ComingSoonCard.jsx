import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const ComingSoonCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/kodbrand.solutions/" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/kodbrand-academy/" },
    { icon: LucideIcons.MessageCircle, url: "https://wa.me/919678007291" },
    { icon: LucideIcons.Mail, url: "mailto:kodbrandsolutions@gmail.com" }
  ];

  // Helper to render icons safely
  const IconRenderer = ({ icon: Icon, size = 18, className = "" }) => {
    return Icon ? <Icon size={size} className={className} /> : <LucideIcons.HelpCircle size={size} />;
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0a0c] text-white font-sans selection:bg-[#b4d333] selection:text-black overflow-x-hidden flex flex-col relative">
      
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#b4d333]/5 blur-[80px] md:blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-5%] right-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/5 blur-[100px] md:blur-[140px] rounded-full" 
        />
      </div>

      {/* --- LOADING OVERLAY --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0a0c]"
          >
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-4"
            >
              <img src="/logo2.png" alt="Loading" className="h-10 md:h-12 w-auto grayscale brightness-200" />
              <div className="h-[1px] w-12 bg-[#b4d333]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVBAR --- */}
      <nav className="relative z-10 p-6 md:p-12 flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col">
          <img src="/logo2.png" alt="KOD Brand" className="h-8 md:h-12 w-auto" />
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 md:px-5 md:py-2 rounded-full"
        >
          <span className="w-2 h-2 bg-[#b4d333] rounded-full animate-pulse shadow-[0_0_8px_#b4d333]" />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Launching Soon</span>
        </motion.div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 md:py-0">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center">
          
          {/* Left Side Info - Hidden or stacked below on mobile for better UX */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-10 md:space-y-12 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="group inline-block lg:block">
              <div className="mb-4 text-gray-600 group-hover:text-[#b4d333] transition-colors duration-500 flex justify-center lg:justify-start">
                <LucideIcons.User size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Who We Are</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto lg:mx-0">A creative digital studio passionate about building brands that stand out.</p>
            </div>
            <div className="group inline-block lg:block">
              <div className="mb-4 text-gray-600 group-hover:text-red-500 transition-colors duration-500 flex justify-center lg:justify-start">
                <LucideIcons.Target size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">What We Do</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto lg:mx-0">We blend creativity and strategy to create powerful digital experiences.</p>
            </div>
          </motion.div>

          {/* Central Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[520px] bg-[#161518]/80 backdrop-blur-xl border border-white/5 rounded-[35px] md:rounded-[45px] p-10 md:p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              
              <div className="flex flex-col items-center gap-3 mb-8 md:mb-12">
                <div className="h-[2px] w-16 md:w-20 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 h-full w-full bg-[#b4d333] shadow-[0_0_10px_#b4d333]"
                  />
                </div>
                <motion.span 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-[8px] md:text-[9px] font-bold tracking-[0.5em] text-gray-500 uppercase"
                >
                  System Initializing
                </motion.span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 italic">
                COMING <br /> <span className="text-gray-700/40">SOON</span>
              </h1>

              <p className="text-gray-400 text-xs md:text-base leading-relaxed max-w-[280px] md:max-w-[320px] mx-auto">
                We're crafting something exceptional that will <span className="text-[#b4d333] font-semibold">elevate your brand</span> to new heights.
              </p>

              <div className="absolute -bottom-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-[#b4d333]/5 blur-[50px] md:blur-[60px] rounded-full pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-10 md:space-y-12 lg:pl-10 order-3 text-center lg:text-left"
          >
            <div className="group inline-block lg:block">
              <div className="mb-4 text-yellow-500/50 group-hover:text-yellow-400 transition-colors duration-500 flex justify-center lg:justify-start">
                <LucideIcons.Star size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Our Promise</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto lg:mx-0">Quality and innovation—everything we do is focused on your success.</p>
            </div>
            <div className="group inline-block lg:block">
              <div className="mb-4 text-blue-500/50 group-hover:text-blue-400 transition-colors duration-500 flex justify-center lg:justify-start">
                <LucideIcons.Rocket size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Big Things Ahead</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto lg:mx-0">We're putting the final touches on something remarkable.</p>
            </div>
          </motion.div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 p-8 md:p-12 border-t border-white/5 w-full bg-[#0b0a0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Let's Connect</span>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a 
                  key={i} 
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, borderColor: "rgba(180, 211, 51, 0.5)", color: "#b4d333" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-600 transition-all hover:bg-white/5"
                >
                  <IconRenderer icon={link.icon} size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] font-medium text-gray-500 text-center">
            <a href="mailto:kodbrandsolutions@gmail.com" className="hover:text-white transition-colors">kodbrandsolutions@gmail.com</a>
            <span className="hidden md:block opacity-20">|</span>
            <a href="tel:+919678007291" className="hover:text-white transition-colors">+91 967 800 7291</a>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <span className="text-[#b4d333]/60 font-black tracking-widest uppercase">Est. 2026</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default ComingSoonCard;