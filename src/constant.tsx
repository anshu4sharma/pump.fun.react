export const factoryAddress = "0x856442Ae377E9B812eD6a4f843EADec791f0343f";
export const EXTERNAL_RPC = "https://rpc.ankr.com/bsc_testnet_chapel";


// Instead, add these constants for the Pinata API
export const PINATA_API_KEY = '42d5b6b54df287ff79bf';
export const PINATA_SECRET_KEY = '69097122a8a3d0b52b4634667cc2302aab4b532f7d84cc4fecdd5ef035d40731';
export const factoryABI = [
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

export const BASE_URL = "https://coral-gigantic-snipe-181.mypinata.cloud/ipfs";