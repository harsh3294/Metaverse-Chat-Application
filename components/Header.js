import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Meta from "../asset/Meta.png";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:inline-grid">
        <div className="relative h-28 w-48 mx-auto hidden lg:inline-grid cursor-pointer">
          <Image
            src={Meta}
            layout="fill"
            className="rounded-full object-contain"
          />
        </div>
        <div className="text-left lg:text-center col-span-5">
          <div className="h-28 w-28 relative lg:mx-auto border-pink-500 border-4 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-2xl">Welcome to METAVERSE</h1>
          <h2 className="text-3xl font-bold truncate">
            {user.get("username")}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
