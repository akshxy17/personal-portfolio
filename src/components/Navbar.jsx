"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  const text = `Let's`;
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-100 bg-[#ecf0f3] shadow-lg">
      <div className="flex justify-between w-full h-full px-10 items-center">
        <Link href="/">
          <Image src="/blacklogo.jpg" width={45} height={50} alt="Logo" />
        </Link>
        <div>
          <ul className="hidden md:flex uppercase gap-7">
            <Link href="/">
              <li className="text-black hover:text-red-500">HOME</li>
            </Link>
            <Link href="/#about">
              <li className="text-black hover:text-red-500">About</li>
            </Link>
            <Link href="/#skills">
              <li className="text-black hover:text-red-500">Skills</li>
            </Link>
            {/* <Link href="/projects">
              <li className="text-black hover:text-red-500">Projects</li>
            </Link> */}
            <Link href="/#contact">
              <li className="text-black hover:text-red-500">contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div className="border-b border-gray-300 pb-6">
            <div className="flex w-full items-center justify-between ">
              <Image src="/SK Logo.png" width={45} height={50} alt="Logo" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:bg-red-500 hover:shadow-red-400 ease-in duration-300 text-black hover:text-white"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
          </div>
          <div className="py-4">
            <ul className="uppercase">
              <Link href={"/"}>
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm hover:text-red-500"
                >
                  Home
                </li>
              </Link>
              <Link href={"/#about"}>
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm hover:text-red-500"
                >
                  About
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm hover:text-red-500"
                >
                  Skills
                </li>
              </Link>
              {/* <Link href={"/projects"}>
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm hover:text-red-500"
                >
                  Projects
                </li>
              </Link> */}
              <Link href={"/#contact"}>
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm hover:text-red-500"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <p className="uppercase tracking-widest">{text} Connect</p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                <Link
                  href="https://www.linkedin.com/in/akshay-tonk-674368293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBVCZKVdcQd6J9eIbFmhyOA%3D%3D"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                <Link href="https://github.com/akshxy17" target="_blank">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                <Link
                  href="https://www.instagram.com/akshxyy17/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                <Link href="https://twitter.com/home" target="_blank">
                  <AiOutlineTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
