import { FC } from "react";
import { XIcon } from "lucide-react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import SocialLinks from "./SocialLinks";
import WalletSection from "./WalletSection";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 bg-[#1a1b1e] z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <Logo />
          <button
            className="p-2 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <NavigationLinks />
          </div>
        </div>
        <div className="p-4 border-t border-gray-800">
          <div className="flex justify-center gap-6 mb-4">
            <SocialLinks />
          </div>
          <WalletSection />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
