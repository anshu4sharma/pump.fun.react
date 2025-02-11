import * as Tabs from "@radix-ui/react-tabs";

const Tokens = () => {
  return (
    <>
      <main className="md:pt-16 lg:pt-0">
        <div className="p-2 sm:p-4 lg:p-8">
          <a href="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 mb-4 sm:mb-6 text-gray-400 hover:text-white">
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
            Back to Tokens
          </a>
          <div className="relative grid gap-4 sm:gap-6">
            <div className="lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col gap-4 sm:gap-6">
              <div className="col-span-2 rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700">
                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="space-y-4 mb-4 sm:mb-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="rounded-full overflow-hidden bg-gray-800 flex-shrink-0 w-[50px] h-[50px]">
                          <img
                            src="https://ipfs.io/ipfs/QmQ7Dbg7jEKNUx43nhVqE2UqadBPWNmzPgcHmK2EipvhaS"
                            alt="Blue Moon"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h2 className="text-xl font-semibold text-white">
                              Blue Moon
                            </h2>
                            <span className="text-gray-400">(BLUE)</span>
                          </div>
                          <div className="text-gray-400 text-sm">
                            Market Cap:{" "}
                            <span className="text-green-400">$36,914.05</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 w-full sm:w-auto">
                        <div className="flex flex-col flex-shrink-0">
                          <div className="text-sm text-gray-400">
                            24h Volume
                          </div>
                          <div className="text-xs font-semibold text-white">
                            {0.00000000.toFixed(6)} DOGE
                          </div>
                          <div className="text-xs text-gray-500 truncate max-w-[150px]">${0.7976937.toFixed(6)}</div>
                        </div>
                        <div className="flex flex-col flex-shrink-0">
                          <div className="text-sm text-gray-400">24h High</div>
                          <div className="text-xs font-semibold text-green-400">
                            {0.000000.toFixed(6)} DOGE
                          </div>
                          <div className="text-xs text-gray-500 truncate max-w-[150px]">${0.797693134862.toFixed(6)}</div>
                        </div>
                        <div className="flex flex-col flex-shrink-0">
                          <div className="text-sm text-gray-400">24h Low</div>
                          <div className="text-xs font-semibold text-red-400 truncate max-w-[150px]">
                            ${0.797693134862.toFixed(6)}
                          </div>
                          <div className="text-xs text-gray-500">$∞</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <div
                      className="w-full"
                      style={{ height: "min(300px, 50vh)" }}
                    >
                      <div
                        className="tv-lightweight-charts"
                        style={{
                          overflow: "hidden",
                          direction: "ltr",
                          width: "100%",
                          height: "400px",
                          userSelect: "none",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <table
                          cellSpacing="0"
                          style={{ height: "400px", width: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: 0 }}></td>
                              <td
                                style={{
                                  padding: 0,
                                  position: "relative",
                                  width: "100%",
                                  height: "372px",
                                }}
                              >
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                  }}
                                >
                                  <canvas
                                    width="810"
                                    height="465"
                                    style={{
                                      width: "100%",
                                      height: "372px",
                                      position: "absolute",
                                      zIndex: 1,
                                      left: 0,
                                      top: 0,
                                    }}
                                  ></canvas>
                                  <canvas
                                    width="810"
                                    height="465"
                                    style={{
                                      width: "100%",
                                      height: "372px",
                                      position: "absolute",
                                      zIndex: 2,
                                      left: 0,
                                      top: 0,
                                    }}
                                  ></canvas>
                                </div>
                                <style>
                                  {`a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}`}
                                </style>
                                <a
                                  href="https://www.tradingview.com/?utm_medium=lwc-link&amp;utm_campaign=lwc-chart&amp;utm_source=plotfun.vercel.app/token/0x18C4678A5BA24DECF7DFd42ff5355667a7f7480B"
                                  title="Charting by TradingView"
                                  id="tv-attr-logo"
                                  target="_blank"
                                  data-dark=""
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 35 19"
                                    width="35"
                                    height="19"
                                    fill="none"
                                  >
                                    <g
                                      fillRule="evenodd"
                                      clipPath="url(#a)"
                                      clipRule="evenodd"
                                    >
                                      <path
                                        fill="var(--stroke)"
                                        d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"
                                      ></path>
                                      <path
                                        fill="var(--fill)"
                                        d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="a">
                                        <path
                                          fill="var(--stroke)"
                                          d="M0 0h35v19H0z"
                                        ></path>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </a>
                              </td>
                              <td style={{ padding: 0 }}>
                                <div
                                  style={{
                                    height: "372px",
                                    overflow: "hidden",
                                    width: "56px",
                                    left: 0,
                                    position: "relative",
                                  }}
                                >
                                  <canvas
                                    width="70"
                                    height="465"
                                    style={{
                                      width: "56px",
                                      height: "372px",
                                      position: "absolute",
                                      zIndex: 1,
                                      left: 0,
                                      top: 0,
                                    }}
                                  ></canvas>
                                  <canvas
                                    width="70"
                                    height="465"
                                    style={{
                                      width: "56px",
                                      height: "372px",
                                      position: "absolute",
                                      zIndex: 2,
                                      left: 0,
                                      top: 0,
                                    }}
                                  ></canvas>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: 0 }}></td>
                              <td
                                style={{
                                  height: 28,
                                  padding: 0,
                                  width: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                  }}
                                >
                                  <canvas
                                    width="810"
                                    height="35"
                                    style={{
                                      width: "100%",
                                      height: "28px",
                                      position: "absolute",
                                      zIndex: 1,
                                      left: 0,
                                      top: 0,
                                    }}
                                  ></canvas>
                                  <canvas
                                    width="810"
                                    height="35"
                                    style={{
                                      width: "100%",
                                      height: "28px",
                                      position: "absolute",
                                      zIndex: 2,
                                      left: 0,
                                      top: 0,
                                    }}
                                  ></canvas>
                                </div>
                              </td>
                              <td style={{ padding: 0 }}>
                                <div
                                  style={{
                                    width: "56px",
                                    height: 28,
                                    overflow: "hidden",
                                  }}
                                >
                                  <canvas
                                    width="70"
                                    height="35"
                                    style={{ width: "56px", height: 28 }}
                                  ></canvas>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700 w-full">
                  <div className="p-3 sm:p-4 lg:p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-white">BLUE</h3>
                      <div className="text-gray-400">
                        <div className="text-right">
                          <div>{0.000000001677.toFixed(6)} DOGE</div>
                          <div className="text-xs text-gray-500">
                            ≈ $0.000163
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
                              <span>DOGE Balance: 0</span>
                              <span className="text-xs text-gray-500 ml-2">
                                ≈ $0.00
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                              <span>Bonding Curve Progress</span>
                              <span>90.1%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                              <div
                                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: "90.1088%" }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Sold: 450.5M tokens</span>
                              <span>Reserve: 49.5M tokens</span>
                            </div>
                          </div>
                          <div className="relative mt-4">
                            <input
                              type="number"
                              className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#252525] border-gray-700 text-white h-12 pr-24 placeholder:text-gray-500"
                              step="0.000001"
                              placeholder="Amount in cbBTC"
                            />
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 absolute right-2 top-1/2 -translate-y-1/2 h-6 px-2 text-xs text-gray-400 hover:text-white hover:bg-gray-700"
                              type="button"
                            >
                              MAX
                            </button>
                          </div>
                          <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full mt-4 h-12 bg-yellow-500 hover:bg-yellow-600 text-white"
                            disabled
                          >
                            Approve DOGE
                          </button>
                        </Tabs.Content>

                        <Tabs.Content value="sell" className="mt-4">
                          <div className="text-sm text-gray-400 mb-4">
                            <div>
                              <span>ANSHU Balance: 0</span>
                              <span className="text-xs text-gray-500 ml-2">
                                ≈ $0.00
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                              <span>Bonding Curve Progress</span>
                              <span>90.1%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                              <div
                                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: "90.1088%" }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Sold: 450.5M tokens</span>
                              <span>Reserve: 49.5M tokens</span>
                            </div>
                          </div>
                          <div className="relative mt-4">
                            <input
                              type="number"
                              className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#252525] border-gray-700 text-white h-12 pr-24 placeholder:text-gray-500"
                              step="0.000001"
                              placeholder="Amount in cbBTC"
                            />
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 absolute right-2 top-1/2 -translate-y-1/2 h-6 px-2 text-xs text-gray-400 hover:text-white hover:bg-gray-700"
                              type="button"
                            >
                              MAX
                            </button>
                          </div>
                          <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full mt-4 h-12 bg-yellow-500 hover:bg-yellow-600 text-white"
                            disabled
                          >
                            Approve DOGE
                          </button>
                        </Tabs.Content>
                      </Tabs.Root>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700">
              <Tabs.Root defaultValue="comments" className="w-full">
                <Tabs.List className="flex border-b border-gray-700 overflow-x-auto">
                  <Tabs.Trigger
                    value="comments"
                    className="flex-1 px-3 sm:px-6 py-3 font-medium text-xs sm:text-sm transition-colors data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-400 text-gray-400 hover:text-gray-200"
                  >
                    Comments
                  </Tabs.Trigger>
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

                <Tabs.Content value="comments" className="p-3 sm:p-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        0x
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 text-sm">
                            0x5b4a...4e97
                          </span>
                          <span className="text-gray-500 text-xs">
                            11/30/2024
                          </span>
                        </div>
                        <p className="text-white mt-1">hey</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <button className="text-gray-400 hover:text-white text-sm flex items-center space-x-1">
                            <span>0</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-white text-sm flex items-center space-x-1">
                            <span>0</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M17 14V2" />
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                      <p className="text-gray-300 text-sm">
                        Connect your wallet to join the discussion and react to
                        comments.
                      </p>
                    </div>
                  </div>
                </Tabs.Content>

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
    </>
  );
};

export default Tokens;
