import Image from "next/image";
import { useMoralis } from "react-moralis";
import Meta from "../asset/Meta.png";
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src={Meta}
          width={270}
          height={200}
          className="rounded-full"
          objectFit="cover"
        />
        <button
          className="bg-yellow-500 rounded-xl p-6 font-bold animate-pulse text-black"
          onClick={authenticate}
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
