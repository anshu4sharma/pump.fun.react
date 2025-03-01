import * as Tabs from '@radix-ui/react-tabs';
import { Wallet, Package } from 'lucide-react';
import TokenCard from '../components/TokenCard';
import { ethers } from 'ethers';
import useTokenStore from '../store/useTokenStore'; // Import the Zustand store
import { BASE_URL } from '../constant';
interface ProfileProps {
  account: string | null;
  balance: number;
}

export const TokenCardSkeleton = () => {
  return (
    <div className="bg-[#1c1c1c] rounded-lg p-4 border border-gray-800 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="space-y-2 w-full">
          <div className="h-3 bg-gray-600 rounded w-24"></div>
          <div className="h-4 bg-gray-500 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

const Profile = ({ account, balance }: ProfileProps) => {
  const { deployedTokens, tokenBalances, tokenInfo } = useTokenStore(); // Access Zustand store state

  if (!account) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg font-medium">Please connect your wallet</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-[#1c1c1c] rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 mb-4">
          My Profile
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Address:</span>
            <code className="bg-[#13141b] px-2 py-1 rounded hidden md:block">{account}</code>
            <code className="bg-[#13141b] px-2 py-1 rounded block md:hidden">{account.slice(0, 12)}...{account.slice(-10)}</code>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Balance:</span>
            <span className="bg-[#13141b] px-2 py-1 rounded">
              {balance ? Number(ethers.formatUnits(balance, 18)).toFixed(4) : '0'} BNB
            </span>
          </div>
        </div>
      </div>

      <Tabs.Root defaultValue="balances">
        <Tabs.List className="flex space-x-2 mb-6 bg-[#1c1c1c] p-1 rounded-lg">
          <Tabs.Trigger
            value="balances"
            className="flex-1 text-white flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:via-blue-400 data-[state=active]:to-indigo-400"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Token Balances
          </Tabs.Trigger>

          <Tabs.Trigger
            value="deployed"
            className="flex-1 text-white flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:via-blue-400 data-[state=active]:to-indigo-400"
          >
            <Package className="w-4 h-4 mr-2" />
            Deployed Tokens
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="balances">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(tokenBalances).length > 0 ? (
              Object.entries(tokenBalances)
                .filter(([_, balance]) => Number(balance) > 0)
                .map(([tokenAddress, balance]) => {
                  const token = tokenInfo[tokenAddress];
                  return (
                    <TokenCard
                      key={tokenAddress}
                      address={tokenAddress}
                      name={token?.name}
                      symbol={token?.symbol}
                      balance={Number(balance)}
                      logoUrl={`${BASE_URL}/${token?.imageCID}`}
                    />
                  );
                })
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-400">No token balances found</p>
              </div>
            )}
          </div>
        </Tabs.Content>

        <Tabs.Content value="deployed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deployedTokens.length > 0 ? (
              deployedTokens.map((tokenAddress) => {
                const token = tokenInfo[tokenAddress];
                return (
                  <TokenCard
                    key={tokenAddress}
                    address={tokenAddress}
                    name={token?.name}
                    symbol={token?.symbol}
                    balance={0}
                    logoUrl={`${BASE_URL}/${token?.imageCID}`}
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-400">No deployed tokens found</p>
              </div>
            )}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Profile;
