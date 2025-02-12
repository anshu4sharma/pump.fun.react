import { FC, useState } from "react";
import {
  WalletIcon, ExternalLinkIcon, CurrencyIcon
} from "lucide-react";

const WalletSection: FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState("0.00");
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnect = () => {
    // Wallet connection logic would go here
    setIsConnected(true);
    setWalletAddress("7X8w...9Yfk");
    setBalance("1.45");
  };

  return (
    <>
      {!isConnected ? (
        <div>
          <button
            onClick={handleConnect}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 text-white font-medium rounded-xl transition-colors"
          >
            <WalletIcon className="w-5 h-5" />
            Connect Wallet
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            Connect your wallet to get started
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-[#2a2b2e] p-3 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Balance</span>
              <span className="text-white font-medium">{balance} SOL</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Address</span>
              <div className="flex items-center gap-1">
                <span className="text-white font-medium">{walletAddress}</span>
                <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-2">
        <button className="w-full flex items-center justify-between px-4 py-2 bg-[#2a2b2e] text-gray-400 rounded-xl hover:bg-[#2a2b2e]/80 transition-colors text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>Binance Chain</span>
          </div>
          <CurrencyIcon className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default WalletSection;
