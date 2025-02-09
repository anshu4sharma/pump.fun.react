const CreateToken = () => {
  return (
    <main className="lg:pl-64 pt-16 lg:pt-0">
      <div className="p-4 lg:p-8">
        <div className="flex justify-center min-h-[calc(100vh-5rem)]">
          <div className="w-full max-w-md pt-4 lg:pt-8">
            <div className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700 w-full max-w-md">
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="tracking-tight text-2xl font-bold text-white">Create Token</div>
              </div>
              <div className="p-6 pt-0">
                <form className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Name</label>
                      <input
                        type="text"
                        className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#252525] border-gray-700 text-white h-9"
                        name="name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Symbol</label>
                      <input
                        type="text"
                        className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#252525] border-gray-700 text-white h-9"
                        name="symbol"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Description</label>
                      <textarea
                        className="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#252525] border-gray-700 text-white min-h-[80px] resize-none"
                        name="description"
                      ></textarea>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-gray-200">Logo</label>
                        <span className="text-xs text-red-400">* Required (512kb max)</span>
                      </div>
                      <label className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border px-4 py-2 w-full bg-[#252525] border-gray-700 text-gray-200 hover:bg-[#2a2a2a] hover:text-white h-9">
                        Select File
                        <input type="file" accept="image/*" required className="hidden" />
                      </label>
                    </div>
                    <div className="mt-6 p-4 bg-green-900/10 border border-green-600/20 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          className="peer shrink-0 rounded-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 h-5 w-5 border-2 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                          id="make-purchase"
                          aria-labelledby="make-purchase-label"
                        ></button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          tabIndex={0}
                          style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0, width: 20, height: 20 }}
                        />
                        <div className="space-y-1">
                          <label id="make-purchase-label" htmlFor="make-purchase" className="text-sm font-medium text-white cursor-pointer">
                            Make initial purchase
                          </label>
                          <p className="text-gray-400 text-xs">The purchase will be processed automatically right after token creation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full text-gray-400 hover:text-white hover:bg-[#2a2a2a]" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 mr-2">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    Show More Options
                  </button>
                  <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full my-4 bg-gray-700"></div>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400">
                      <p>Creation Fee: 0.001 ETH</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium disabled:opacity-50 h-10" type="submit">
                      Create Token
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateToken;