import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxqdgeo_q0WPWWP7G5Y6AgnJOX1aZrwZQU11uuIS5IBShKYwcmJPht9Br2pHZ2Pkc3t/exec';
    const form = event.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
  };

  const text = "let's";

  return (
    <div id="contact" className="w-full lg:h-screen pt-20">
      <div className="max-w-[1250px] m-auto px-2 py-6 w-full">
        <p className="text-2xl tracking-widest uppercase">Contact</p>
        <h2 className="py-2 pb-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="col-span-3 lg:col-span-2 rounded-xl w-full h-full bg-white shadow-xl shadow-gray-400 p-4">
            <div className="lg:p-4 h-full">
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/Contact.jpeg"
                  alt="Contact Image"
                  width={400}
                  height={100}
                />
              </div>
              <div>
                <h2 className="py-4 uppercase">Akshay Tonk</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and {text} talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between m-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                    <Link href="https://www.linkedin.com/in/akshay-tonk-674368293" target="_blank">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                    <Link href="https://github.com/akshxy17" target="_blank">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                    <Link href="https://www.instagram.com/akshxyy17/" target="_blank">
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

          {/* Right Section: Contact Form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                name="submit-to-google-sheet"
                className="grid md:grid-cols-2 gap-4 w-full py-2"
                onSubmit={handleFormSubmit}
              >
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-3" htmlFor="username">
                    Name
                  </label>
                  <input
                    id="username"
                    name="username"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    placeholder="Enter your Name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-3" htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="number"
                    placeholder="Enter your Mobile number"
                  />
                </div>

                <div className="flex flex-col py-2 md:col-span-2">
                  <label className="uppercase text-sm py-3" htmlFor="email">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    placeholder="Enter your E-Mail"
                  />
                </div>

                <div className="flex flex-col py-2 md:col-span-2">
                  <label className="uppercase text-sm py-3" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    placeholder="Enter your Subject"
                  />
                </div>

                <div className="flex flex-col py-2 md:col-span-2">
                  <label className="uppercase text-sm py-3" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="8"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>

                <button
                  className="w-full p-4 text-gray-100 mt-4 bg-blue-500 hover:bg-blue-600"
                  type="submit"
                >
                  Submit
                </button>

                <button
                  className="w-full p-4 text-gray-100 mt-4 bg-red-500 hover:bg-red-600"
                  type="reset"
                >
                  Reset
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
