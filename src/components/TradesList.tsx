import { FC, useEffect, useRef, useState } from "react";

const TradesList: FC = () => {
const [trades, setTrades] = useState<any[]>([]); // State to hold trades
const containerRef = useRef<HTMLDivElement>(null);

// Sample data for demonstration
const initialTrades: any = Array.from({ length: 15 }, (_, index) => ({
  name: `Trade ${index + 1}`,
  time: `${Math.floor(Math.random() * 30)} days ago`,
  amount: `${(Math.random() * 100).toFixed(2)}K`,
  dogeAmount: `${(Math.random() * 100).toFixed(6)}`,
  value: `$${(Math.random() * 1000).toFixed(2)}`,
}));

useEffect(() => setTrades(initialTrades), []);

const loadMoreTrades = () => {
  // Logic to load more trades
  const newTrades = Array.from({ length: 5 }, (_, index) => ({
    name: `Trade ${trades.length + index + 1}`,
    time: `${Math.floor(Math.random() * 30)} days ago`,
    amount: `${(Math.random() * 100).toFixed(2)}K`,
    dogeAmount: `${(Math.random() * 100).toFixed(6)}`,
    value: `$${(Math.random() * 1000).toFixed(2)}`,
  }));
  setTrades((prevTrades) => [...prevTrades, ...newTrades]);
};

const handleScroll = () => {
  if (containerRef.current) {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreTrades(); // Load more trades when scrolled to the bottom
    }
  }
};

// Autoplay functionality
useEffect(() => {
  const interval = setInterval(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  }, 800); // Scroll every 1 seconds

  return () => clearInterval(interval); // Cleanup on unmount
}, []);

return (
  <div className="relative h-24 overflow-hidden">
    <div
      ref={containerRef}
      className="overflow-x-auto whitespace-nowrap animate-scroll hide-scrollbar"
      style={{ animationDuration: '6s' }}
      onScroll={handleScroll}
    >
      {trades.map((trade, index) => (
        <div key={index} className="inline-block px-2">
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 w-[320px] hover:border-gray-600 transition-colors hover:bg-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700">
                <div className="w-full h-full bg-gray-600"></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-medium">{trade.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down-right w-4 h-4 text-red-500"
                  >
                    <path d="m7 7 10 10"></path>
                    <path d="M17 7v10H7"></path>
                  </svg>
                </div>
                <div className="text-sm text-gray-400">{trade.time}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-400">{trade.amount}</div>
              <div className="text-sm text-gray-400">{trade.dogeAmount} DOGE</div>
              <div className="text-xs text-gray-500">≈ {trade.value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default TradesList;
