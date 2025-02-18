import Logo from './Logo'
import NavigationLinks from './NavigationLinks'
import SocialLinks from './SocialLinks'
import WalletSection from './WalletSection'
import { ethers } from 'ethers'
import { useEffect } from 'react'
const Sidebar = ({ location, account, setAccount, balance, setBalance }: { location: any, account: any, setAccount: any, balance: any, setBalance: any }) => {
  async function connectHandler() {
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.getAddress(accounts[0])
    setAccount(account);
    const balance = await (window as any).ethereum.request({ method: 'eth_getBalance', params: [account] });
    setBalance(balance);
  }
  useEffect(() => {
    connectHandler()
  }, [])
  if (location.pathname === "/") {
    return null;
  }
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1b1e] border-r border-gray-800 flex flex-col">
      <div className="p-6 pb-2">
        <Logo />
      </div>
      <div className="px-4">
        <NavigationLinks onClose={() => { }} />
      </div>
      <div className="flex-1" />
      <div className="mb-4 flex justify-center gap-6">
        <SocialLinks />
      </div>
      <div className="p-6 pt-4 border-t border-gray-800">
        <WalletSection balance={balance} connectHandler={connectHandler} account={account} />
      </div>
    </aside>
  )
}

export default Sidebar 