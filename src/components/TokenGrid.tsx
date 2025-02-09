import { FC } from "react";
import { Search } from "lucide-react";

const TokenGrid: FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="search-container relative w-full md:max-w-md">
          <div className="relative">
            <input
              type="text"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-[#1c1c1c] border-gray-700 text-white placeholder:text-white"
              placeholder="Search by name, symbol, or address..."
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center gap-2 w-full md:flex-row flex-col">
          <span className="text-sm text-gray-400">Sort by:</span>
          <select className="flex h-10 w-full md:w-[222px] rounded-md border px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#1c1c1c] border-gray-700 text-white">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest-market-cap">Highest Market Cap</option>
            <option value="lowest-market-cap">Lowest Market Cap</option>
          </select>
        </div>
      </div>
      {/* Add token grid items here */}
      {/* This is a placeholder - you'll want to add actual token data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] hover:bg-[#252525] transition-colors border-gray-700 p-4 cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden bg-gray-800 flex-shrink-0 w-[50px] h-[50px]">
                  <img
                    src="https://ipfs.io/ipfs/QmQ7Dbg7jEKNUx43nhVqE2UqadBPWNmzPgcHmK2EipvhaS"
                    alt="Blue Moon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white truncate">Blue Moon</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">replies</span>
                      <div className="flex items-center gap-1 text-gray-400">
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
                          className="lucide lucide-message-square w-4 h-4"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Market Cap:{" "}
                    <span className="text-green-500">$36,626.26</span>
                  </div>
                </div>
              </div>
              <div className="text-white text-sm">Blue moon token</div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Deployed by:</span>
                <span>0x5b4a...4e97</span>
              </div>
              <div className="flex items-center gap-3 pt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenGrid;
