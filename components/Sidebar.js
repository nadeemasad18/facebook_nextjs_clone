import { useSession } from "next-auth/react";
import React from "react";
import SidebarRow from "./SidebarRow";
import {
  UserGroupIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className=" p-4 mt-5 max-w-[600px] xl:min-w-[300]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
