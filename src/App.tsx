import React from "react";
import { Routes, Route } from "react-router";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import CreateToken from "./pages/CreateToken";
import Profile from "./pages/Profile";
import Tokens from "./pages/Tokens";
import Main from "./pages/Main";
import Home from "./pages/Home";
  const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    {window.location.pathname === "/" ? <Home /> : 
    
    <div className="min-h-screen bg-[#13141b]">
    {/* Desktop Sidebar */}
    <div className="hidden lg:block">
      <Sidebar />
    </div>

    {/* Mobile Header */}
    <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

    {/* Mobile Menu */}
    <MobileMenu
      isOpen={isMobileMenuOpen}
      onClose={() => setIsMobileMenuOpen(false)}
    />

    {/* Main Content */}
    <main className="lg:pl-64 pt-16 lg:pt-0">
      <Routes>
        <Route path="/"  element={<Main />} />
        <Route path="/create-token" element={<CreateToken />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tokens" element={<Tokens />} />
      </Routes>
    </main>
  </div>
    
    }
    
    </>
  );
};

export default App;
