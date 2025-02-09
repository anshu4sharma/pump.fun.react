import { FC } from 'react'
import { WalletIcon, ChevronDownIcon } from 'lucide-react'

const WalletSection: FC = () => {
  return (
    <>
      <div>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-xl transition-colors">
          <WalletIcon className="w-5 h-5" />
          Connect Wallet
        </button>
      </div>
      <div className="mt-2">
        <button className="w-full flex items-center justify-between px-4 py-2 bg-[#2a2b2e] text-gray-400 rounded-xl hover:bg-[#2a2b2e]/80 transition-colors text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>Sepolia</span>
          </div>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
    </>
  )
}

export default WalletSection 