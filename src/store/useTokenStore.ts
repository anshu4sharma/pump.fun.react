import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenState {
  deployedTokens: string[];
  tokenBalances: { [key: string]: string };
  tokenInfo: { [key: string]: { name: string; symbol: string; imageCID: string } };
  setDeployedTokens: (tokens: string[]) => void;
  setTokenBalances: (balances: { [key: string]: string }) => void;
  setTokenInfo: (info: { [key: string]: { name: string; symbol: string; imageCID: string } }) => void;
}

const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      deployedTokens: [],
      tokenBalances: {},
      tokenInfo: {},
      setDeployedTokens: (tokens) => set({ deployedTokens: tokens }),
      setTokenBalances: (balances) => set({ tokenBalances: balances }),
      setTokenInfo: (info) => set({ tokenInfo: info }),
    }),
    {
      name: 'token-store',
      skipHydration: true // This prevents caching
    }
  )
);

export default useTokenStore;