export default function Navbar({ links }) {
  return (
    <nav className="bg-vanilla h-[150px] bg-navImage">
      <div className="px-8 pb-15 h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <h1 className="flex flex-row text-blue-600 font-lora text-4xl">
            Brian Lu
          </h1>
          <ul className="flex flex-row space-x-4 text-[#453F78] font-bold underline decoration-2">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
