import * as Tabs from "@radix-ui/react-tabs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import ApexCharts from 'apexcharts';
import { ethers, formatEther } from "ethers";
import tokenABI from "../abis/Token.json";
import { factoryAddress } from "../constant";
import useTokenStore from '../store/useTokenStore'; // Import the Zustand store
import { toast } from 'react-hot-toast';
interface Token {
  token: string;
  name: string;
  ticker: string;
  imageCID: string;
  marketCap: string;
  totalSold: string;
  currentPrice: string;
  totalRaised: string;
}

interface PriceUpdate {
  timestamp: string;
  price: string;
}

interface PriceUpdates {
  priceUpdates: PriceUpdate[];
  highestPrice: string;
  lowestPrice: string;
}

interface TokenProps {
  factory: any;
  provider: any;
}

const Token = ({ factory, provider }: TokenProps) => {
  const { tokenBalances, } = useTokenStore(); // Access Zustand store state

  const { tokenId } = useParams();
  const chartRef = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState<Token | null>(null);
  const [isBuying, setIsBuying] = useState(false);
  const [isSelling, setIsSelling] = useState(false);
  console.log(token, "token");

  const [priceUpdates, setPriceUpdates] = useState<PriceUpdates>({
    priceUpdates: [],
    highestPrice: "0",
    lowestPrice: "0"
  });

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(`http://localhost:5000/tokens/${tokenId}`);
      const data = await response.json();
      console.log(data);
      setToken(data);
    };
    const fetchPriceUpdates = async () => {
      const response = await fetch(`http://localhost:5000/tokens/${tokenId}/price-updates`);
      const data = await response.json();
      console.log(data);
      setPriceUpdates({
        priceUpdates: data.priceUpdates,
        highestPrice: data.highestPrice,
        lowestPrice: data.lowestPrice
      });
    };

    fetchToken();
    fetchPriceUpdates();
  }, [tokenId]);

  // web3 part

  const [target, setTarget] = useState<bigint>(0n)
  const [limit, setLimit] = useState<bigint>(0n)

  async function buyHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const amount = Number(formData.get("amount"));

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    // Wrap the buy logic in toast.promise
    await toast.promise(
      (async () => {
        setIsBuying(true);

        const totalSoldInWei = ethers.parseUnits(token!.totalSold, 18);
        const targetInWei = ethers.parseUnits(target.toString(), 18);

        if (totalSoldInWei >= targetInWei) {
          throw new Error("Sale target has been reached");
        }

        const amountInWei = ethers.parseUnits(amount.toString(), 18);
        if (amountInWei > limit) {
          throw new Error("Amount exceeds token limit");
        }

        const cost = await factory.getCost(totalSoldInWei);
        const totalCost = cost * BigInt(amount);
        const tradingFee = (totalCost * 5n) / 100n;
        const totalWithFee = totalCost + tradingFee;

        const signer = await provider.getSigner();
        const transaction = await factory.connect(signer).buy(
          token?.token,
          amountInWei,
          {
            value: totalWithFee,
            gasLimit: 5000000,
          }
        );

        const receipt = await transaction.wait();
        if (receipt.status === 0) {
          throw new Error("Transaction execution reverted");
        }
      })(),
      {
        loading: "Processing your purchase...",
        success: "Purchase successful!",
        error: () => `Purchase failed`,
      }
    ).finally(() => {
      setIsBuying(false);
    });
  }

  async function getSaleDetails() {
    console.log("getSaleDetails", "factory", factory);

    const target = await factory.TARGET()
    setTarget(target)

    const limit = await factory.TOKEN_LIMIT()
    setLimit(limit)
    console.log(token, "token");

  }

  useEffect(() => {
    if (factory) {
      console.log(token, "provider", provider);
      getSaleDetails()
    }
  }, [factory])

  console.log(priceUpdates, "priceUpdates");
  const renderChart = useCallback(() => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 3,
          blur: 4,
          opacity: 0.2,
          color: "#1C64F2",
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        theme: "dark",
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.8,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
          stops: [0, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 4,
        curve: "smooth",

      },
      yaxis: {

        min: 0,
        labels: {
          style: {
            colors: "#FFFFFF", // White y-axis labels
            fontSize: "12px",
            fontWeight: 500,
          },
        },
        opposite: true,

      },
      xaxis: {
        labels: {
          style: {
            colors: "#FFFFFF", // White x-axis labels for consistency
            fontSize: "12px",
          },
        },
        tickAmount: 10,
      },
      grid: {
        show: true,
        borderColor: "rgba(255, 255, 255, 0.2)",
        strokeDashArray: 4,
      },
      series: [
        {
          name: "Price",
          data: priceUpdates.priceUpdates.map((priceUpdate: PriceUpdate) => {
            return {
              x: new Date(priceUpdate.timestamp).toLocaleString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              }),
              y: formatEther(Number(priceUpdate.price)),
            };
          }),
          color: "#1A56DB",
        }

      ],

    };

    const chartElement = chartRef.current;
    if (chartElement && typeof ApexCharts !== "undefined") {
      if (chartElement.firstChild) {
        chartElement.removeChild(chartElement.firstChild);
      }
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }, [priceUpdates]);


  useEffect(() => {
    if (token) {
      renderChart();
    }
  }, [renderChart, token]);

  async function sellHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const amount = Number(formData.get("amount"));

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    // Wrap the sell logic in toast.promise
    await toast.promise(
      (async () => {
        setIsSelling(true);

        const signer = await provider.getSigner();
        const amountInWei = ethers.parseUnits(amount.toString(), 18);

        const saleData = await factory.getTokenSale(0);
        if (!saleData.isOpen) {
          throw new Error("Sale is closed");
        }

        const tokenContract = new ethers.Contract(token!.token, tokenABI, signer);
        const tokenBalance = await tokenContract.balanceOf(signer.address);

        if (amountInWei > tokenBalance) {
          throw new Error("Insufficient token balance");
        }

        const allowance = await tokenContract.allowance(signer.address, factoryAddress);
        if (allowance < amountInWei) {
          const approvalTx = await tokenContract.approve(factoryAddress, amountInWei);
          await approvalTx.wait();
        }

        const transaction = await factory.connect(signer).sell(token!.token, amountInWei, {
          gasLimit: 5000000,
        });

        const receipt = await transaction.wait();
        if (receipt.status === 0) {
          throw new Error("Transaction execution reverted");
        }
      })(),
      {
        loading: "Processing your sale...",
        success: "Sale successful!",
        error: () => `Sale failed`,
      }
    ).finally(() => {
      setIsSelling(false);
    });
  }

  return (
    <>
      {token ? (
        <main className="md:pt-16 lg:pt-0">
          <div className="p-2 sm:p-4 lg:p-8">
            <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 mb-4 sm:mb-6 text-gray-400 hover:text-white">
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
                className="lucide lucide-arrow-left w-4 h-4 mr-2"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Dashboard
            </Link>
            <div className="relative grid gap-4 sm:gap-6">
              <div className="lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col gap-4 sm:gap-6">
                <div className="col-span-2 rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700">
                  <div className="p-3 sm:p-4 lg:p-6">
                    <div className="space-y-4 mb-4 sm:mb-6">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full overflow-hidden bg-gray-800 flex-shrink-0 w-[50px] h-[50px]">
                            <img
                              src={`https://coral-gigantic-snipe-181.mypinata.cloud/ipfs/${token?.imageCID}`}
                              alt={token?.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <h2 className="text-xl font-semibold text-white">
                                {token?.name}
                              </h2>
                              <span className="text-gray-400">({token?.ticker})</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                              Market Cap:{" "}
                              <span className="text-green-400">${token?.marketCap}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 w-full sm:w-auto">
                          <div className="flex flex-col flex-shrink-0">
                            <div className="text-sm text-gray-400">
                              Total Sold
                            </div>
                            <div className="text-xs font-semibold text-white">
                              {Number(token?.totalSold).toFixed(2)}
                            </div>
                          </div>
                          <div className="flex flex-col flex-shrink-0">
                            <div className="text-sm text-gray-400">Current Price</div>
                            <div className="text-xs font-semibold text-green-400">
                              {ethers.formatUnits(Number(token?.currentPrice), 18)} BNB
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <div className=" w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
                        <div className="flex justify-between">
                          <div>
                            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$ {token?.marketCap}</h5>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Market Cap</p>
                          </div>
                        </div>
                        <div ref={chartRef} id="area-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700 w-full">
                    <div className="p-3 sm:p-4 lg:p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-white">{token?.name}</h3>
                        <div className="text-gray-400">
                          <div className="text-right">
                            <div className="text-xs text-gray-500">
                              Price  ≈ ${ethers.formatUnits(Number(token?.currentPrice), 18)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mb-6 border-b border-gray-700">
                        <Tabs.Root defaultValue="buy" className="w-full">
                          <Tabs.List className="flex">
                            <Tabs.Trigger
                              value="buy"
                              className="px-6 py-3 font-medium text-sm transition-colors data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400 text-gray-400 hover:text-gray-200"
                            >
                              Buy
                            </Tabs.Trigger>
                            <Tabs.Trigger
                              value="sell"
                              className="px-6 py-3 font-medium text-sm transition-colors data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400 text-gray-400 hover:text-gray-200"
                            >
                              Sell
                            </Tabs.Trigger>
                          </Tabs.List>

                          <Tabs.Content value="buy" className="mt-4">
                            <div className="text-sm text-gray-400 mb-4">
                              <div>
                                <span> Balance: </span>
                                <span className="text-xs text-white ml-2">
                                  {tokenBalances[token?.token] ? tokenBalances[token?.token] : 0}
                                </span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Bonding Curve Progress</span>
                                <span>{((Number(token?.totalSold) / 100000) * 100).toFixed(2)}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                                  style={{ width: `${((Number(token?.totalSold) / 100000) * 100).toFixed(2)}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Sold: {Number(token?.totalSold).toFixed(2)} </span>
                                <span>Target: 100,000 tokens</span>
                              </div>
                            </div>
                            <form onSubmit={buyHandler} className="relative mt-4">
                              <input
                                type="number"
                                name="amount"
                                className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 text-white"
                                step="0.000001"
                                placeholder="Amount"
                                disabled={isBuying}
                              />

                              <button
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full mt-4 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                                type="submit"
                                disabled={isBuying}
                              >
                                {isBuying ? "Buying..." : `Buy ${token?.ticker}`}
                              </button>
                            </form>
                          </Tabs.Content>

                          <Tabs.Content value="sell" className="mt-4">
                            <div className="text-sm text-gray-400 mb-4">
                              <div>
                                <span> Balance: </span>
                                <span className="text-xs text-white ml-2">
                                  {tokenBalances[token?.token] ? tokenBalances[token?.token] : 0}
                                </span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Bonding Curve Progress</span>
                                <span>{((Number(token?.totalSold) / 100000) * 100).toFixed(2)}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                                  style={{ width: `${((Number(token?.totalSold) / 100000) * 100).toFixed(2)}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Sold: {Number(token?.totalSold).toFixed(2)}</span>
                                <span>Target: 100,000 tokens</span>
                              </div>
                            </div>
                            <form onSubmit={sellHandler} className="relative mt-4" >
                              <input
                                type="number"
                                name="amount"
                                className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 text-white"
                                step="0.000001"
                                placeholder="Amount"
                                disabled={Number(tokenBalances[token?.token]) === 0 || isSelling}
                              />

                              <button
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full mt-4 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                                type="submit"
                                disabled={Number(tokenBalances[token?.token]) === 0 || isSelling}
                              >
                                {isSelling ? "Selling..." : `Sell ${token?.ticker}`}
                              </button>
                            </form>
                          </Tabs.Content>

                        </Tabs.Root>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700">
                <Tabs.Root defaultValue="transactions" className="w-full">
                  <Tabs.List className="flex border-b border-gray-700 overflow-x-auto">
                    <Tabs.Trigger
                      value="transactions"
                      className="flex-1 px-3 sm:px-6 py-3 font-medium text-xs sm:text-sm transition-colors data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-400 text-gray-400 hover:text-gray-200"
                    >
                      Transactions
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      value="holders"
                      className="flex-1 px-3 sm:px-6 py-3 font-medium text-xs sm:text-sm transition-colors data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-400 text-gray-400 hover:text-gray-200"
                    >
                      Holders
                    </Tabs.Trigger>
                  </Tabs.List>

                  <Tabs.Content value="transactions" className="p-3 sm:p-4">
                    <div className="text-gray-400 text-sm">
                      No transactions found
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="holders" className="p-3 sm:p-4">
                    <div className="text-gray-400 text-sm">No holders found</div>
                  </Tabs.Content>
                </Tabs.Root>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-gray-400 text-2xl font-bold">Token not found</div>
        </div>
      )}
    </>
  );
};

export default Token;
