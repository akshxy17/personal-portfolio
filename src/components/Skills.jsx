import Image from "next/image";

const skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen pt-20 py-4 px-8 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-2xl tracking-widest">Skills</p>
        <h2 className="py-2">What Can I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/html.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/css.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/javascript.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/react.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/nextjs.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>NEXT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/node.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/mongo.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>MongoDb</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/express.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/tailwind.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/github1.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/firebase.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/bootstrap.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/python.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src="/reactnative.png" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center justify-between">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
