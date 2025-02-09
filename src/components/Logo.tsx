import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2 mb-6 cursor-pointer">
      <img
        alt="Logo"
        width="32"
        height="32"
        className="rounded-lg"
        src="https://plotfun.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.005438bc.png&w=64&q=75"
      />
      <h1 className="text-xl font-bold text-white">PLOTBSC.fun</h1>
    </div>
  );
};

export default Logo;
