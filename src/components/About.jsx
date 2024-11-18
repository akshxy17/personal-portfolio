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
              Hello, My name is Akshay. I completed My
              Bachelor of Technology at Malla Reddy Institute of Technology in
              2023. In 2022, I began web development. I specialize in
              developing responsive front-end UI applications that integrate
              with APIs and other backend technologies. {text} enthusiastic
              about learning new technologies and recognize that there are
              multiple ways to complete a task. Though I am most comfortable
              building front-end applications with HTML, CSS, Javascript, and
              React, I am a quick learner and can quickly pick up new tech
              stacks as needed. Being a great developer, In my opinion, is about
              selecting the best tool for the job rather than using a specific
              language. {text} now spending my time developing projects with
              ReactJs and Firebase, as well as learning new technologies.
            </p>
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
