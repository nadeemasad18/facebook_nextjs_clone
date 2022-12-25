import React from "react";
import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center spaxe-x-2 p-4 hover:bg-gray-900 cursor-pointer rounded-xl">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="pr-1 h-8 w-6 text-blue-500" />}
      <p className="hidden lg:inline-flex text-white font-large">{title}</p>
    </div>
  );
}

export default SidebarRow;
