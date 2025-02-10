interface TokenCardProps {
  name: string;
  symbol: string;
  marketCap: string;
  status: string;
  logoUrl: string;
}

const TokenCard = ({ name, symbol, marketCap, status, logoUrl }: TokenCardProps) => {
  return (
    <div className="bg-[#1c1c1c] rounded-lg p-4 border border-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <img src={logoUrl} alt={name} className="w-8 h-8 rounded-full" />
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-gray-400 text-sm">{symbol}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Market Cap</p>
          <p className="text-green-500 font-medium">${marketCap}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Status</p>
          <p className="text-yellow-500">In Bonding Curve</p>
        </div>
      </div>
    </div>
  );
};

export default TokenCard; 