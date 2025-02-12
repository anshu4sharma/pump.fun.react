import React from 'react';
import { Link } from 'react-router';
import Logo from '../components/Logo';
import { motion } from 'framer-motion';
import pancakeswapLogo from '../assets/partners/pancakeswap.svg';
import binanceLogo from '../assets/partners/binance.svg';
import trustwalletLogo from '../assets/partners/trustwallet.svg';
import metamaskLogo from '../assets/partners/metamask.svg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#13141b] relative overflow-hidden">
      {/* Add animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent animate-pulse-slow" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#13141b]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo  />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/create-token"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Create Token
              </Link>
              <Link
                to="/tokens"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Explore
              </Link>
              <Link
                to="/docs"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-[#1a1b1e] rounded-lg font-semibold text-white hover:bg-[#1a1b1e]/80 transition-all border border-gray-800"
              >
                Dashboard
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/create-token"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a1b1e]"
            >
              Create Token
            </Link>
            <Link
              to="/tokens"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a1b1e]"
            >
              Explore
            </Link>
            <Link
              to="/docs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a1b1e]"
            >
              Documentation
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a1b1e]"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block animate-float">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-200 ring-1 ring-purple-500/20 backdrop-blur-sm">
                  <span className="animate-pulse mr-2">🚀</span>
                  Launch your token in minutes
                </span>
              </div>
              
              <motion.h1 
                className="mt-8 text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 animate-gradient">
                  The Ultimate BSC Token
                  <br />
                  Creation Platform
                </span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Create, deploy, and manage your BSC tokens with powerful features and security measures.
              </motion.p>

              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  to="/create-token"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                  <span className="relative flex items-center justify-center">
                    Create Token
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/tokens"
                  className="px-8 py-4 bg-[#1a1b1e] rounded-lg font-semibold text-white border border-gray-800 hover:bg-[#1a1b1e]/80 transition-all hover:scale-105"
                >
                  Explore Tokens
                </Link>
              </motion.div>
            </motion.div>

            {/* Featured Brands */}
            <div className="mt-20 border-t border-gray-800">
              <div className="py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
                  Our Partners
                </h2>
                <p className="text-center text-sm font-semibold text-gray-400 mb-8">
                  TRUSTED BY LEADING PROJECTS
                </p>
                <div className="flex justify-center items-center gap-x-12 gap-y-8 flex-wrap opacity-70 ">
                  <motion.img 
                    src={pancakeswapLogo}
                    alt="PancakeSwap"
                    className="h-12 md:h-16 object-contain hover:opacity-100 cursor-pointer grayscale hover:grayscale-0 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                  <motion.img 
                    src={binanceLogo}
                    alt="Binance"
                    className="h-12 md:h-16 object-contain hover:opacity-100 cursor-pointer grayscale hover:grayscale-0 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                  <motion.img 
                    src={trustwalletLogo}
                    alt="Trust Wallet"
                    className="h-12 md:h-16 object-contain hover:opacity-100 cursor-pointer grayscale hover:grayscale-0 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                  <motion.img 
                    src={metamaskLogo}
                    alt="MetaMask"
                    className="h-12 md:h-16 object-contain hover:opacity-100 cursor-pointer grayscale hover:grayscale-0 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Key Features
            </h2>
            <p className="text-gray-400 mt-4">
              Everything you need to launch your token
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 jus">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-6 rounded-2xl bg-gradient-to-b from-[#1a1b1e] to-[#1a1b1e]/50 border border-gray-800 hover:border-purple-500/30 transition-all hover:scale-105 backdrop-blur-sm flex flex-col items-center justify-center" 
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-purple-500/30 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-400 mt-4">
              See how we're transforming the token creation landscape
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-b from-[#1a1b1e] to-[#1a1b1e]/50 border border-gray-800 hover:border-purple-500/30 transition-all hover:scale-105 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
              Ready to Launch Your Token?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Join thousands of successful projects that have launched their tokens using our platform.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                to="/dashboard"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 flex items-center justify-center w-full md:w-auto min-w-[200px]"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                <span className="relative flex items-center">
                  Launch App
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/docs"
                className="group px-8 py-4 bg-[#1a1b1e] rounded-lg font-semibold text-white border border-gray-800 hover:bg-[#1a1b1e]/80 transition-all hover:scale-105 flex items-center justify-center w-full md:w-auto min-w-[200px]"
              >
                <span className="flex items-center">
                  Read Documentation
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1b1e] to-[#1a1b1e]/50 border border-gray-800 backdrop-blur-sm flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure Platform</h3>
                <p className="text-gray-400">Built with industry-leading security standards and regular audits</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1b1e] to-[#1a1b1e]/50 border border-gray-800 backdrop-blur-sm flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Deploy your token in minutes with our optimized platform</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-b from-[#1a1b1e] to-[#1a1b1e]/50 border border-gray-800 backdrop-blur-sm flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400">Get help anytime with our dedicated support team</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trading Activity Section */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">TokenForge</h3>
            <p className="text-gray-400 mb-4">Create, deploy and manage BSC tokens with powerful features and security measures.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} PlotBsc.fun All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Instant Deployment',
    description: 'Deploy your BSC token in seconds with our automated smart contract generation system.',
  },
  {
    icon: <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    title: 'Security First',
    description: 'All smart contracts are audited and secured with industry-standard safety measures.',
  },
  {
    icon: <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
    title: 'Custom Features',
    description: 'Customize your token with features like anti-bot, max wallet, and trading limits.',
  },
];

const stats = [
  {
    value: '10,000+',
    label: 'Tokens Created',
  },
  {
    value: '$100M+',
    label: 'Total Value Locked',
  },
  {
    value: '50,000+',
    label: 'Community Members',
  },
  {
    value: '99.9%',
    label: 'Uptime',
  },
];

export default Home;
