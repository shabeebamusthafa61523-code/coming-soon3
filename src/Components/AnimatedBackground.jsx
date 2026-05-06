import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a]">
      {/* 1. Base Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0a0a0a] to-[#1a1a1a]" />

      {/* 2. Dynamic Pulsing Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#b4d333]/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[100px] rounded-full animate-pulse-slower" />

      {/* 3. Floating Glass Orbs */}
      <div className="absolute inset-0">
        {/* Large Orb */}
        <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" />
        
        {/* Medium Orb with Glassmorphism */}
        <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-[#b4d333]/5 border border-white/5 backdrop-blur-3xl rounded-full animate-float-delayed" />
        
        {/* Small Accent Orb */}
        <div className="absolute top-[60%] left-[50%] w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-fast" />
      </div>

      {/* 4. Film Grain / Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 5. Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default AnimatedBackground;