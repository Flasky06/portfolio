import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-around items-center py-5 bg-white shadow top-0 z-10 sticky">
      <div className="relative h-16 w-32 p-1 cursor-pointer">
        <Image src={"/images/logo.png"} className="absolute " alt="/" fill />
      </div>
      <ul className="flex gap-4 capitalize">
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">home</li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">about</li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">skills</li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          projects
        </li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          contact{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;
