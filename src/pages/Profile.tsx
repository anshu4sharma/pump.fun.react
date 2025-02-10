import * as Tabs from '@radix-ui/react-tabs';
import { Wallet, Package } from 'lucide-react';
import TokenCard from '../components/TokenCard';

const Profile = () => {
  return (
    <main className="pt-16 lg:pt-0">
      <div className="p-4 lg:p-8">
        <div className="p-4 lg:p-8">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              My Profile
            </h1>
            <p className="text-sm lg:text-base text-gray-400 mt-1">
              0x858c...0aCf
            </p>
          </div>

          <Tabs.Root defaultValue="balances" className="space-y-4">
            <Tabs.List className="inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground w-full bg-[#1c1c1c] border-gray-700">
              <Tabs.Trigger
                value="balances"
                className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
              >
                <Wallet className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Token</span> Balances
              </Tabs.Trigger>

              <Tabs.Trigger
                value="deployed"
                className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
              >
                <Package className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Deployed</span> Tokens
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="balances" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TokenCard
                  name="Blue Moon"
                  symbol="BLUE"
                  marketCap="36858.22"
                  status="In Bonding Curve"
                  logoUrl="https://ipfs.io/ipfs/QmdZACb4qSoamBnHwFtuvyCAEK6YWzdVnhzXQZnTKSzU5N"
                />
                {/* Add more TokenCard components as needed */}
              </div>
            </Tabs.Content>

            <Tabs.Content value="deployed" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Add deployed tokens here */}
                <TokenCard
                  name="BOGUS"
                  symbol="BOGUS"
                  marketCap="1514.85"
                  status="In Bonding Curve"
                  logoUrl="https://ipfs.io/ipfs/QmY9onWxhgyKyf8zDHyym2V3UkDDYiTAQCKNGnJuD27XWC"
                />
                {/* Add more deployed TokenCard components as needed */}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </main>
  );
};

export default Profile;

export const WalletNotConnected = () => {
  return (
    <main className="pt-16 lg:pt-0">
      <div className="p-4 lg:p-8">
        <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
          <div className="text-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-wallet-minimal w-12 h-12 text-gray-400 mx-auto"
            >
              <path d="M17 14h.01"></path>
              <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path>
            </svg>
            <h2 className="text-xl text-gray-400">
              Please connect your wallet to continue
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

