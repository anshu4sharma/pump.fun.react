import { FC } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

const TokenGrid: FC = () => {
  const navigate = useNavigate();
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
        <div className="flex md:justify-end items-center gap-4 w-full md:flex-row flex-col px-4 md:px-6">
          <span className="text-sm font-medium text-gray-400">Sort by:</span>
          <select className="flex h-10 w-full md:w-[240px] rounded-lg border px-4 py-2 text-sm font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#1c1c1c] border-gray-700 text-white hover:border-gray-600 transition-colors">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest-market-cap">Highest Market Cap</option>
            <option value="lowest-market-cap">Lowest Market Cap</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            onClick={() => {
              navigate("/tokens");
            }}
            className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] hover:bg-[#252525] transition-colors border-gray-700 p-4 cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden bg-gray-800 flex-shrink-0 w-[50px] h-[50px]">
                  <img
                    src={index % 2 === 0 ? "https://ipfs.io/ipfs/QmdZACb4qSoamBnHwFtuvyCAEK6YWzdVnhzXQZnTKSzU5N" : "https://ipfs.io/ipfs/QmQ7Dbg7jEKNUx43nhVqE2UqadBPWNmzPgcHmK2EipvhaS"}
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
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
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
                    className="lucide lucide-globe w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
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
                    className="lucide lucide-twitter w-5 h-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
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
                    className="lucide lucide-message-square w-5 h-5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenGrid;
