interface TokenCardProps {
  name: string;
  symbol: string;
  balance: number;
  logoUrl: string;
  address: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ name, symbol, balance, logoUrl, address }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-5 border border-gray-700 cursor-pointer shadow-lg transition-transform transform hover:scale-105 w-full max-w-sm">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <img src={logoUrl} alt={`${name} logo`} className="w-14 h-14 sm:w-12 sm:h-12 rounded-full" />
        <div className="flex-1 min-w-[120px]">
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm uppercase">{symbol}</p>
          <p className="text-gray-400 text-sm uppercase">{address.slice(0, 8)}...{address.slice(-8)}</p>
        </div>
        {balance > 0 && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">Balance</p>
          <p className="text-yellow-500 text-lg font-medium">{balance}</p>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default TokenCard;
