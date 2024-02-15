import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <main className="relative flex items-center justify-center h-[200px] w-full shadow shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <div className="relative w-full h-28">
        <Image
          className="absolute rounded-xl group-hover:opacity-10  "
          src={backgroundImg}
          alt="/"
          fill
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </main>
  );
};

export default ProjectCard;
