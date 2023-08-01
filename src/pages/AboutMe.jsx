import image from "../images/contact-img.jpg"

export default function AboutMe() {
  return (
    <div className="w-screen h-[650px] px-[20px] py-[50px] bg-[#3F2E56]">
      <div className="w-1/2 mx-auto">
        <h1 className="pb-[10px] font-bold text-4xl text-white text-left border-b-[5px] border-b-black w-1/3">
          Background
        </h1>
        <div style={{margin:0}}className="p-0 grid place-items-center w-1/4 m-0">
          <img src={image} alt="About Me Image" className="w-full h-full"/>
        </div>
        <p className="text-white text-lg">
          Hi! I'm currently aiming to become a Full Stack Engineer. I graduated
          from UCLA with a degree in Computational and Systems Biology, where I
          first got my foot into the door of the coding world. I took three
          traditional coding classes with a focus on C++. I went on to do
          research at Dr. Willy Hugo's lab, where I learned R, Python, and
          Command Line to an intermediate level. After graduation, I decided to
          enroll in UCSD's Full Stack Coding Bootcamp, where I learned HTML,
          CSS, JavaScript, NodeJS, SQL, Mongo, and React.
        </p>
        <p className="pt-[20px] text-white text-lg">
          When I'm not coding, I can be found going to the gym, playing piano,
          and listening to music!
        </p>
      </div>
    </div>
  );
}