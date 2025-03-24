import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const HeroSection = () => {
  const text = `I'm`;
  return (
    <>
      <div id="home" className="w-full h-screen text-center">
        <div className="flex flex-col max-w-[1240px] w-full h-full mx-auto p-2 items-center justify-center">
          <div>
            <h1 className="py-2 gap-2 ">
              Hi, {text} <span className="text-red-500 "> Akshay</span>
            </h1>
            <h1 className="py-2 ">Full Stack Java Developer</h1>
            <p className="py-2 max-w-[70%] m-auto">
            As a Full Stack Java Developer, I craft robust web applications by leveraging MySQL, Spring Boot, and React.js to deliver exceptional digital solutions. My expertise lies in creating dynamic and responsive applications that combine powerful backend functionality with intuitive user interfaces, ensuring seamless user experiences across platforms. Driven by a commitment to excellence, I stay at the forefront of web technologies and industry best practices, consistently delivering high-quality, efficient, and scalable solutions
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:bg-red-500 hover:shadow-red-400 hover:scale-105 ease-in duration-300 text-xl text-black hover:text-white">
                <Link
                  href="https://www.linkedin.com/in/akshay-tonk" target="_blank"
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
    </>
  );
};

export default HeroSection;
