import * as Tabs from '@radix-ui/react-tabs';
import { Wallet, Package } from 'lucide-react';
import TokenCard from '../components/TokenCard';
import { useState, useEffect } from 'react';
import { ethers, formatUnits } from 'ethers';

interface ProfileProps {
  account: string | null;
  balance: number;
  provider: any;
}

const TokenCardSkeleton = () => {
  return (
    <div className="bg-[#1c1c1c] rounded-lg p-4 border border-gray-800 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="h-3 bg-gray-600 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-500 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

const Profile = ({ account, balance, provider }: ProfileProps) => {
  const [deployedTokens, setDeployedTokens] = useState<any[]>([]);
  const [tokenBalances, setTokenBalances] = useState<{ [key: string]: string }>({});
  const [tokenInfo, setTokenInfo] = useState<{ [key: string]: { name: string, symbol: string, imageCID: string } }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTokensAndBalances = async () => {
      if (account) {
        setLoading(true);

        try {
          const factoryAddress = "0xB8C1B08c1350B3Fcc77b965C085246a1d161dE4B"; // Factory contract address
          const factoryABI = [
            {
              inputs: [],
              name: 'totalTokens',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            {
              inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              name: 'tokens',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
            },
            {
              inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
              name: 'getImageCid',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
            },
            {
              constant: true,
              inputs: [{ name: '', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ name: '', type: 'uint256' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
            },
            {
              constant: true,
              inputs: [],
              name: 'name',
              outputs: [{ name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
            },
            {
              constant: true,
              inputs: [],
              name: 'symbol',
              outputs: [{ name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
            },
          ];

          const factoryContract = new ethers.Contract(factoryAddress, factoryABI, provider);

          // Fetching the total number of tokens created by the factory
          const totalTokens = await factoryContract.totalTokens();
          const tokenAddresses: string[] = [];

          // Fetching token addresses created by the factory
          for (let i = 0; i < totalTokens; i++) {
            const tokenAddress = await factoryContract.tokens(i);
            tokenAddresses.push(tokenAddress);
          }

          setDeployedTokens(tokenAddresses);

          const balances: { [key: string]: string } = {};
          const tokenData: { [key: string]: { name: string, symbol: string, imageCID: string } } = {};

          // For each token, fetch the name, symbol, imageCID, and balance
          for (let i = 0; i < tokenAddresses.length; i++) {
            const tokenAddress = tokenAddresses[i];
            const tokenContract = new ethers.Contract(tokenAddress, factoryABI, provider);
            const userBalance = await tokenContract.balanceOf(account);
            const formattedBalance = formatUnits(userBalance, 18); // Format the balance based on token decimals
            balances[tokenAddress] = formattedBalance;
          
            // Fetch token name and symbol
            const name = await tokenContract.name();
            const symbol = await tokenContract.symbol();
            console.log(i, tokenAddress, name, symbol, "tokenAddress");
          
            // Fetch the imageCID from the contract using the index
            const imageCID = await factoryContract.getImageCid(i);
          
            tokenData[tokenAddress] = { name, symbol, imageCID };
          }
          
          console.log(tokenData, "tokenData");

          setTokenBalances(balances);
          setTokenInfo(tokenData as any);
        } catch (error) {
          console.error('Error fetching tokens or balances:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTokensAndBalances();
  }, [account]);


  if (!account) {
    return (
      <main className="pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          <p className="text-gray-400 col-span-full text-center">Please connect your wallet</p>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16 lg:pt-0">
      <div className="p-4 lg:p-8">
        <div className="p-4 lg:p-8">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
              My Profile
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm lg:text-base text-gray-400">
                Address: {account}
              </p>
              <p className="text-sm lg:text-base text-gray-400">
                Balance: {balance ? Number(ethers.formatUnits(balance, 18)).toFixed(4) : 0} BNB
              </p>
            </div>
          </div>

          <Tabs.Root defaultValue="balances" className="space-y-4">
            <Tabs.List className="inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground w-full bg-[#1c1c1c] border-gray-700">
              <Tabs.Trigger
                value="balances"
                className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:via-blue-400 data-[state=active]:to-indigo-400 data-[state=active]:text-white cursor-pointer"
              >
                <Wallet className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Token</span> Balances
              </Tabs.Trigger>

              <Tabs.Trigger
                value="deployed"
                className="inline-flex items-center justify-center text-white whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:via-blue-400 data-[state=active]:to-indigo-400 data-[state=active]:text-white cursor-pointer"
              >
                <Package className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Deployed</span> Tokens
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="balances" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? <>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <TokenCardSkeleton key={index} />
                  ))}
                </> : tokenBalances && Object.entries(tokenBalances).length > 0 ? (
                  Object.entries(tokenBalances).map(([tokenAddress, balance]) => {
                    const token = tokenInfo[tokenAddress];
                    if (Number(balance) <= 0.000000000000000000) {
                      return null
                    }
                    return (
                      <TokenCard
                        address={tokenAddress}
                        key={tokenAddress}
                        name={token.name}
                        symbol={token.symbol}
                        balance={Number(balance)}
                        logoUrl={`https://coral-gigantic-snipe-181.mypinata.cloud/ipfs/${token.imageCID}`}
                      />
                    );
                  })
                ) : (
                  <p className="text-gray-400 col-span-full text-center">No token balances found</p>
                )}
              </div>
            </Tabs.Content>

            <Tabs.Content value="deployed" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? <>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <TokenCardSkeleton key={index} />
                  ))}
                </> : deployedTokens && deployedTokens.length > 0 ? (
                  deployedTokens.map((tokenAddress) => {
                    const token = tokenInfo[tokenAddress];
                    return (
                      <TokenCard
                        key={tokenAddress}
                        name={token.name}
                        symbol={token.symbol}
                        balance={Number(balance)}
                        logoUrl={`https://coral-gigantic-snipe-181.mypinata.cloud/ipfs/${token.imageCID}`}
                        address={tokenAddress}
                      />
                    );
                  })
                ) : (
                  <p className="text-gray-400 col-span-full text-center">No deployed tokens found</p>
                )}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </main>
  );
};

export default Profile;
