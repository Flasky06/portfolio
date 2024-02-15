import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="">
      <section
        id="hero"
        className="flex flex-col max-w-4xl mx-auto items-center justify-center gap-8 pt-40"
      >
        <p className="font-extralight text-xl ">
          LET'S BUILD SOMETHING TOGETHER
        </p>
        <h3 className="text-lg">
          Hi, I'm <span className="text-blue-700 text-xl">Bonface Njuguna</span>
        </h3>
        <h1 className="uppercase text-3xl">Software Developer </h1>
        <p className="text-center font-normal text-slate-950">
          I build and manage software and webapplication that seamlessly serve
          the requirements of both individual clients and enterprises, blending
          functionality with a touch of innovation
        </p>
        <div className="flex gap-4">
          <span className="h-16 w-16 border flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 hover:border-[#5651e5] ease-in duration-300 ">
            <FaLinkedin className="text-blue-700 text-2xl" />
          </span>
          <span className="h-16 w-16 border flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 hover:border-[#5651e5] ease-in duration-300">
            <FaGithub className="text-2xl hover:scale-110  ease-in duration-300" />
          </span>
          <span className="h-16 w-16 border flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 hover:border-[#5651e5] ease-in duration-300">
            <CgMail className="text-red-500 text-2xl" />
          </span>
        </div>
      </section>
      <section
        id="about"
        className=" flex flex-col max-w-4xl mx-auto   justify-center gap-4 mt-10 pt-48"
      >
        <h3 className="text-center font-light text-3xl tracking-widest uppercase text-blue-700 mb-10">
          About Me
        </h3>
        <h3 className="text-lg font-extralight capitalize">Who am i ?</h3>
        <p className="text-md py-2">
          I am a Software Developer,With over 2+ years of professional
          experience, I have a proven track record of delivering high-quality
          projects that combine my technical skills and creative flair. My work
          spans from creating visualy appealing user interfaces to developing
          robust web applications.
        </p>
        <p className="text-md">
          I pride my self in bieng adaptable to new technologies and working in
          new teams while delivering the desired results.
        </p>
        <p
          className="cursor-pointer py-1 px-2 text-slate-800 hover:text-blue-600 underline underline-offset-4
"
        >
          Check out some of my latest projects.
        </p>
      </section>
      <section
        id="skills"
        className="flex flex-col max-w-6xl mx-auto items-center justify-center gap-4 pt-48"
      >
        <h3 className="text-center font-light text-3xl tracking-widest uppercase text-blue-700 mb-10">
          Skills
        </h3>
        <div>
          <div className="grid grid-cols-5 gap-4 justify-center items-center py-4">
            {/*  html*/}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-16 h-16">
                  <Image
                    src={"/skills/html.png"}
                    className="absolute"
                    alt="/"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">HTML5</h3>
                </div>
              </div>
            </div>
            {/*  css*/}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-16 h-16">
                  <Image
                    src={"/skills/css.png"}
                    className="absolute"
                    alt="/"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">CSS</h3>
                </div>
              </div>
            </div>
            {/*  javascript*/}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-20 h-16">
                  <Image
                    src={"/skills/javascript.png"}
                    className="absolute w-full h-full"
                    alt="javascript"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Javascript</h3>
                </div>
              </div>
            </div>
            {/* typescript */}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-16 h-16">
                  <Image
                    src={"/skills/typescript.png"}
                    className="absolute w-full h-full"
                    alt="/"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Typescript</h3>
                </div>
              </div>
            </div>
            {/* React */}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-14 h-16">
                  <Image
                    src={"/skills/react.png"}
                    className="absolute"
                    alt="/"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">React js</h3>
                </div>
              </div>
            </div>
            {/* Node js */}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-20 h-16">
                  <Image
                    src={"/skills/nodejs.png"}
                    className="absolute"
                    alt="node"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Node js</h3>
                </div>
              </div>
            </div>
            {/*  Express*/}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-16 h-16">
                  <Image
                    src={"/skills/express.png"}
                    className="absolute"
                    alt="/"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Express js</h3>
                </div>
              </div>
            </div>
            {/*  Mongodb*/}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-24 h-16">
                  <Image
                    src={"/skills/mongodb.png"}
                    className="absolute"
                    alt="mongodb"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Mongo DB</h3>
                </div>
              </div>
            </div>
            {/* git  */}
            <div className="p-2 shadow rounded-xl  ease-in duration-300">
              <div className="flex flex-row gap-1 justify-center items-center">
                <div className="relative  w-24 h-14">
                  <Image
                    src={"/skills/git.png"}
                    className="absolute"
                    alt="/"
                    fill
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Git</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex flex-col max-w-5xl mx-auto items-center justify-center gap-8 pt-48 "
      >
        <h3 className="text-center font-light text-3xl tracking-widest uppercase text-blue-700">
          Projects
        </h3>
        <div className="grid grid-cols-3 gap-4 w-full">
          <ProjectCard
            title="gtc"
            backgroundImg="/skills/postgress.png"
            tech="next js"
            projectUrl="gtc"
          />
          <ProjectCard
            title="gtc"
            backgroundImg="/skills/postgress.png"
            tech="next js"
            projectUrl="www.gtc.com"
          />
          <ProjectCard
            title="gtc"
            backgroundImg="/skills/postgress.png"
            tech="next js"
            projectUrl="www.gtc.com"
          />
          <ProjectCard
            title="gtc"
            backgroundImg="/skills/postgress.png"
            tech="next js"
            projectUrl="www.gtc.com"
          />
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col max-w-5xl mx-auto  justify-center gap-8 pt-40"
      >
        <h3 className="text-center font-light text-3xl tracking-widest uppercase text-blue-700">
          Contact Me
        </h3>
        <div className="flex lg:flex-row flex-col gap-4">
          <div className=" w-1/3 flex flex-col items-center h-full border rounded-xl p-4 shadow">
            <div className="lg:px-4 h-full ">
              <div className="relative w-32 h-32 rounded">
                <Image
                  className="absolute rounded"
                  src="/images/me.jpg"
                  alt="me"
                  fill
                  priority={false}
                />
              </div>
              <div className="">
                <h2 className="py-1 text-slate-950 font-bold">
                  Bonface Njuguna
                </h2>
                <p className="text-sm italic">Software Developer </p>
                <p className="py-4 font-light">
                  I am available for freelance or full-time positions.
                  <br /> Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase  pt-2">Connect With Me</p>
                <div className="flex items-center justify-start py-4 space-x-3">
                  <Link
                    href="https://www.linkedin.com/in/sammy-wekesa-562b801a5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full border p-3 cursor-pointer hover:scale-110 hover:border-[#5651e5] ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/Flasky06"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full border p-3 cursor-pointer hover:scale-110 hover:border-[#5651e5] ease-in duration-300">
                      <FaLinkedin className="text-blue-600" />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/Flasky06"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full border p-3 cursor-pointer hover:scale-110 hover:border-[#5651e5] ease-in duration-300">
                      <FaXTwitter />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/Flasky06"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full border p-3 cursor-pointer hover:scale-110 hover:border-[#5651e5] ease-in duration-300">
                      <CgMail className="text-red-500 text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/3 border last:rounded-xl lg:px-1">
            <div className="p-4">
              <form
                action="https://getform.io/f/631187e3-0dba-4dc9-a5da-732bec21b4d5"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-2 w-full py-1">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">Name</label>
                    <input
                      className="border font-light text-sm rounded-lg px-2 py-1 flex border-gray-300"
                      type="text"
                      name="name"
                      placeholder="Bonface Njuguna"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">
                      Phone Number
                    </label>
                    <input
                      className="border font-light text-sm rounded-lg px-2 py-1 flex border-gray-300"
                      type="text"
                      name="phone"
                      placeholder="+254717299106"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-1">
                  <label className="uppercase text-sm py-1">Email</label>
                  <input
                    className="border font-light text-sm rounded-lg px-2 py-1 flex border-gray-300"
                    type="email"
                    name="email"
                    placeholder="bonnienjuguna@gmail.com"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border font-light text-sm rounded-lg px-2 py-1 flex border-gray-300"
                    type="text"
                    name="subject"
                    placeholder="Reason for enquiry"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border font-light text-sm rounded-lg px-2 py-1 border-gray-300"
                    rows="3"
                    name="message"
                    placeholder="I am contacting you ..."
                  ></textarea>
                </div>
                <button className="w-1/2 flex justify-center rounded mx-auto px-3 py-2 text-gray-100 mt-4 bg-[#5651e5]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="h-28">{/* <p>@copyright 2024</p> */}</footer>
    </main>
  );
}
