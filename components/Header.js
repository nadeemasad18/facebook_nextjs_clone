import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  MenuIcon,
  ViewGridIcon,
  UserGroupIcon,
  PuzzleIcon,
} from "@heroicons/react/solid";
import { SearchIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-gray-900 flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}

      <div className="flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex  ml-2 items-center rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className=" hidden md:inline-flex ml-2
                items-center
                bg-transparent 
                outline-none
                placeholder:gray-500
                flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* End of Left */}

      {/* Center */}

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          {/* <FontAwesomeIcon Icon={faStoreIcon} /> */}
          <HeaderIcon Icon={OfficeBuildingIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
          <HeaderIcon Icon={PuzzleIcon} />
          <HeaderIcon Icon={MenuIcon} />
        </div>
      </div>
      {/* End of Center */}

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />

        {/* <Profile Photo */}

        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
      </div>

      {/* End of Right */}
    </div>
  );
}

export default Header;
