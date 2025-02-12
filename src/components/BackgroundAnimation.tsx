import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1b1e_1px,transparent_1px),linear-gradient(to_bottom,#1a1b1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[20rem] h-[20rem] bg-purple-500/10 rounded-full blur-[6rem] animate-pulse" />
      <div className="absolute top-[40%] right-[15%] w-[15rem] h-[15rem] bg-blue-500/10 rounded-full blur-[5rem] animate-pulse delay-700" />
      <div className="absolute bottom-[10%] left-[20%] w-[18rem] h-[18rem] bg-indigo-500/10 rounded-full blur-[5rem] animate-pulse delay-1000" />
    </div>
  );
};

export default BackgroundAnimation; 