import image from "../../images/coding-bg.jpg";

export default function Navbar({ links }) {
  const navStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <nav className="bg-vanilla h-[150px]" style={navStyle}>
      <div className="px-8 pb-15 h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <h1 className="flex flex-row text-[#8980F5] font-lora text-4xl">
            Brian Lu
          </h1>
          <ul className="flex flex-row space-x-4 text-[#21897E] font-bold underline decoration-2">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
