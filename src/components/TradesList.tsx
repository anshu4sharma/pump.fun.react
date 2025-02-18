import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

const TradesList: FC = () => {
  const [trades, setTrades] = useState<any[]>([]);

  useEffect(() => {
    const initialTrades = Array.from({ length: 15 }, (_, index) => ({
      name: `Trade ${index + 1}`,
      time: `${Math.floor(Math.random() * 30)} days ago`,
      amount: `${(Math.random() * 100).toFixed(2)}K`,
      dogeAmount: `${(Math.random() * 100).toFixed(6)}`,
      value: `$${(Math.random() * 1000).toFixed(2)}`,
    }));
    setTrades(initialTrades);
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        loop={true}
        autoplay={{ delay: 400, disableOnInteraction: false , waitForTransition: true }}
        speed={600}
        spaceBetween={10}
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1.02 }, // Mobile: Show 2 slides
          768: { slidesPerView: 4 }, // Tablet and above: Show 4 slides
        }}
      >
        {trades.map((trade, index) => (
          <SwiperSlide key={index} className="w-auto" >
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors hover:bg-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src={
                      index % 2 === 0
                        ? "https://ipfs.io/ipfs/QmdZACb4qSoamBnHwFtuvyCAEK6YWzdVnhzXQZnTKSzU5N"
                        : "https://ipfs.io/ipfs/QmY9onWxhgyKyf8zDHyym2V3UkDDYiTAQCKNGnJuD27XWC"
                    }
                    alt=""
                  />
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TradesList;
