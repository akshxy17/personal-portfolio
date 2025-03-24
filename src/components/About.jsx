import Image from "next/image";
import React from "react";

const about = () => {
  const text = `I'm`;
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen  py-2 px-8 flex items-center justify-center"
      >
        <div className="max-w-[1240px] md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-2xl tracking-widest">about</p>
            <h2 className="py-2">Who I Am</h2>
            <p className="py-4 ">
            As a B.Tech graduate from Malla Reddy Institute of Technology, I specialize in developing responsive front-end applications using React, HTML, CSS, and JavaScript, with a focus on creating seamless API integrations and user experiences. Currently, I am building innovative solutions with ReactJS and Firebase, leveraging my expertise to deliver efficient and dynamic web applications. Driven by a passion for continuous learning, I consistently explore and adapt to new technologies to enhance my development capabilities and stay current with industry trends            </p>
          </div>
          <div className="w-full h-auto m-auto bg-red-100 shadow-xl shadow-red-100 ease-in duration-300 rounded-full flex items-center justify-between p-4 hover:scale-105">
            <Image
              className="rounded-full"
              src="/Image.jpg"
              width={700}
              height={500}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
