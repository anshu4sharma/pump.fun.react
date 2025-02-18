import { ethers } from "ethers";
import { useState } from "react";

// Instead, add these constants for the Pinata API
const PINATA_API_KEY = '42d5b6b54df287ff79bf';
const PINATA_SECRET_KEY = '69097122a8a3d0b52b4634667cc2302aab4b532f7d84cc4fecdd5ef035d40731';

const CreateToken = ({ fee, provider, factory }: { fee: any, provider: any, factory: any }) => {
  const [imageFile, setImageFile] = useState<any>(null);
 // Updated function to upload image to Pinata using fetch
 const uploadImage = async (file: string | Blob) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_SECRET_KEY,
      },
      body: formData,
    });

    const result = await response.json();
    return result.IpfsHash; // Return the CID (Content Identifier)
  } catch (error) {
    console.error('Error uploading image to Pinata:', error);
    return null;
  }
};

// Handler for form submission
const listHandler = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const ticker = formData.get("ticker");
  const imageFile = formData.get("image");


  // Upload image to Pinata and get CID
  let imageCID = null;
  if (imageFile) {
    imageCID = await uploadImage(imageFile);
    if (!imageCID) {
      alert("Failed to upload image. Please try again.");
      return;
    }
    // Show the image path or name
    alert(`Image uploaded successfully! Image CID: ${imageCID}`);
  }

  // Connect to the signer
  const signer = await provider.getSigner();

  // Call the `create` function in the smart contract
  try {
    const transaction = await factory.connect(signer).create(name, ticker, imageCID, { value: fee });
    await transaction.wait();

    console.log("Token created successfully! Image CID:", imageCID);
  } catch (error) {
    console.error("Error creating token:", error);
    alert("Failed to create token. Please check the console for details.");
  }
};

  return (
    <main className="pt-16 lg:pt-0">
      <div className="p-4 lg:p-8">
        <div className="flex justify-center min-h-[calc(100vh-5rem)]">
          <div className="w-full max-w-md pt-4 lg:pt-8">
            <div className="rounded-lg border text-card-foreground shadow-sm bg-[#1c1c1c] border-gray-700 w-full max-w-md">
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="tracking-tight text-2xl font-bold text-white">Create Token</div>
              </div>
              <div className="p-6 pt-0">
                <form className="space-y-4" onSubmit={listHandler}>
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
                        name="ticker"
                        required
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-gray-200">Logo</label>
                      </div>
                      <label className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border px-4 py-2 w-full bg-[#252525] border-gray-700 text-gray-200 hover:bg-[#2a2a2a] hover:text-white h-9">
                      {imageFile ? typeof imageFile === 'string' ? imageFile : imageFile.name : 'Please select an image'}
                        <input  type="file" accept="image/*" required className="hidden" name="image" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
                      </label>
                    </div>
                  </div>
                  <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full my-4 bg-gray-700"></div>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400">
                      <p>Creation Fee: {ethers.formatUnits(fee, 18)} BNB</p>
                    </div>
                    {/* change the button to a gradient button */}
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium h-10" type="submit">
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