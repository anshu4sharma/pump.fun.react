import { FC } from 'react'
import TradesList from './TradesList'
import TokenGrid from './TokenGrid'

const MainContent: FC = () => {
  return (
    <div className="p-4 lg:p-8">
      <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-2" />
      <div className="p-4 sm:p-6 lg:p-8 pt-16">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">Last Trades</h2>
            <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#1a1b1e] rounded-lg border border-gray-800">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
              <span className="text-xs sm:text-sm text-gray-400">Live</span>
            </div>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {/* <TradesList /> */}
          <TokenGrid />
        </div>
      </div>
    </div>
  )
}

export default MainContent 