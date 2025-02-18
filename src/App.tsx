import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import CreateToken from "./pages/CreateToken";
import Profile from "./pages/Profile";
import Tokens from "./pages/Tokens";
import Main from "./pages/Main";
import Home from "./pages/Home";
import clsx from "clsx";
import Token from "./pages/Token";
import CreateTestToken from "./pages/CreateTestToken.tsx";
import Factory from "./abis/Factory.json"
import config from "./config.json"
import { BrowserProvider, Contract, ethers } from "ethers";
const App: React.FC = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [account, setAccount] = useState<string | null>(null)
  const [factory, setFactory] = useState<Contract | null>(null)
  const [fee, setFee] = useState(0)
  const [balance, setBalance] = useState(0)


  async function loadBlockchainData() {
    try {
      const ethereum = (window as any).ethereum
      // Check if MetaMask is installed
      if (!ethereum) {
        alert("Please install MetaMask!")
        return
      }

      // Define Binance Testnet chain ID (97)
      const BINANCE_TESTNET_CHAIN_ID = '0x61'

      // Check if we're on the correct network
      const currentChainId = await ethereum.request({ method: 'eth_chainId' })

      if (currentChainId !== BINANCE_TESTNET_CHAIN_ID) {
        try {
          // Request network switch
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: BINANCE_TESTNET_CHAIN_ID }],
          })
        } catch (switchError: any) {
          // If the network is not added to MetaMask, add it
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: BINANCE_TESTNET_CHAIN_ID,
                  chainName: 'Binance Smart Chain Testnet',
                  nativeCurrency: {
                    name: 'tBNB',
                    symbol: 'tBNB',
                    decimals: 18
                  },
                  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/', 'https://rpc.ankr.com/bsc'],
                  blockExplorerUrls: ['https://testnet.bscscan.com']
                }]
              })
            } catch (addError) {
              console.error('Error adding network:', addError)
            }
          }
          console.error('Error switching network:', switchError)
        }
      }

      // Use MetaMask for our connection
      const provider = new ethers.BrowserProvider(ethereum)
      setProvider(provider)

      // Get the current network
      const network = await provider.getNetwork()
      console.log(network.chainId, "network.chainId");
      // Create reference to Factory contract
      const factoryAddress = config[network.chainId.toString() as keyof typeof config].factory.address;
      const factory = new ethers.Contract(factoryAddress, Factory, provider);
      setFactory(factory);
      console.log(factory, "factory");
      // Fetch the fee
      const fee = await factory.fee();
      setFee(fee)

    } catch (error) {
      console.error('Error loading blockchain data:', error)
    }
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen bg-[#13141b]">
        {/* Desktop Sidebar */}
        <div className={clsx(location.pathname !== "/" ? "hidden lg:block" : "")}>
          <Sidebar balance={balance} setBalance={setBalance} location={location} account={account} setAccount={setAccount} />
        </div>

        {/* Mobile Header */}
        <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content */}
        <main className={clsx(location.pathname === "/" ? "" : "lg:pl-64 pt-16 lg:pt-0")}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testTokens" element={<Main />} />
            <Route path="/dashboard" element={<Main />} />
            <Route path="/create-token" element={<CreateToken  fee={fee} provider={provider} factory={factory} />} />
            <Route path="/create-test-token" element={<CreateTestToken />} />
            <Route path="/profile" element={<Profile provider={provider} account={account} />} />
            <Route path="/token/:tokenId" element={<Token  factory={factory} provider={provider} />} />
            <Route path="/tokens" element={<Tokens />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
