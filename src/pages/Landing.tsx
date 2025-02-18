import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images/logo.svg"
                alt="GLDBST"
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#dashboard" className="text-gray-600 hover:text-blue-900">Dashboard</a>
              <a href="#settings" className="text-gray-600 hover:text-blue-900">Settings</a>
              <a href="#orders" className="text-gray-600 hover:text-blue-900">Orders</a>
              <a href="#wallets" className="text-gray-600 hover:text-blue-900">Wallets</a>
              <a href="#kyc" className="text-gray-600 hover:text-blue-900">KYC</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-900">Contact Us</a>
            </div>

            {/* Logout Button */}
            <button className="bg-[#1a237e] text-white px-6 py-2 rounded-full hover:bg-[#1a237e]/90 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
            <span className="text-[#1a237e]">Block</span>
            <span className="text-[#03a9f4]">chain</span>
            <br />
            <span className="text-[#1a237e]">Meets </span>
            <span className="text-[#03a9f4]">Gold</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
            The GLDBST Token (GLDBST) is a revolutionary digital asset that represents the next step in our mission to redefine gold investment and ownership in the modern financial ecosystem.
          </p>

          {/* Floating Gold Jar */}
          <div className="relative w-96 h-96 mx-auto">
            <img
              src="/images/gold-jar.png"
              alt="Gold jar"
              className="w-full h-full object-contain animate-float"
            />
            
            {/* Floating Coins */}
            <div className="absolute inset-0 -z-10">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/images/coin.png"
                  alt="Gold coin"
                  className="absolute w-20 h-20 animate-float"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Start Investing Button */}
          <div className="mt-12">
            <button className="bg-[#1a237e] text-white px-8 py-3 rounded-full hover:bg-[#1a237e]/90 transition-colors text-lg font-medium">
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 