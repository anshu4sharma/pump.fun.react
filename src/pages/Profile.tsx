const Profile = () => {
  return (
    <main className=" pt-16 lg:pt-0">
      <div className="p-4 lg:p-8">
        <div className="p-4 lg:p-8">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              My Profile
            </h1>
            <p className="text-sm lg:text-base text-gray-400 mt-1">
              0x858c...0aCf
            </p>
          </div>
          <div dir="ltr" data-orientation="horizontal" className="space-y-4">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground w-full bg-[#1c1c1c] border-gray-700"
              tabIndex={0}
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-:r1b:-content-balances"
                data-state="active"
                id="radix-:r1b:-trigger-balances"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item
              >
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
                  className="lucide lucide-wallet w-4 h-4 mr-2"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
                <span className="hidden sm:inline">Token</span> Balances
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r1b:-content-deployed"
                data-state="inactive"
                id="radix-:r1b:-trigger-deployed"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item
              >
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
                  className="lucide lucide-package w-4 h-4 mr-2"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
                <span className="hidden sm:inline">Deployed</span> Tokens
              </button>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r1b:-trigger-balances"
              id="radix-:r1b:-content-balances"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ animationDuration: "0s" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r1b:-trigger-deployed"
              hidden
              id="radix-:r1b:-content-deployed"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
