import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

import Link from "next/link";

const GTC = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh]  z-10 opacity-40 bg-slate-950" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/skills/html.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-slate-950"> GTC-mall </h2>
          <h3> Shopping mall,business centre and real estate complex</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 ">
          <h2 className="text-xl text-slate-950 font-light mb-4">
            Project Overview
          </h2>
          <p className="text-sm">
            This application was built using REACT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive landing page for a fast food
            restaurant.. Users may select their desired meals from the menu. A
            few features to note with this project are React routing , ability
            of the user to filter the meals either by type or by price.
          </p>
          <a
            href="https://foody-nu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-1 px-2 mt-4 mr-8 text-blue-800 underline">
              Visit site
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2 flex flex-col ">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer px-2 py-1">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default GTC;
