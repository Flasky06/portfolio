"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="flex justify-around items-center py-3 bg-white shadow top-0 z-10 sticky">
      <div className="relative h-16 w-36 p-1 cursor-pointer">
        <Image src={"/images/logo.png"} className="absolute " alt="/" fill />
      </div>
      <ul className="flex gap-4 capitalize">
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          <Link to="hero" spy={true} smooth={true} offset={50} duration={700}>
            home
          </Link>
        </li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          <Link to="about" spy={true} smooth={true} offset={50} duration={700}>
            about
          </Link>
        </li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          <Link to="skills" spy={true} smooth={true} offset={50} duration={700}>
            skills
          </Link>
        </li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            projects
          </Link>
        </li>
        <li className="cursor-pointer py-1 px-2 hover:text-blue-700">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
