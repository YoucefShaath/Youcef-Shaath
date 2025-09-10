import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 bg-[#124170] bg-opacity-95 w-full sticky top-0 text-white flex justify-between items-center px-8 py-1 mb-8">
      
      <div className="flex items-center justify-between w-full">
        <h1 className="flex gap-2 items-center text-2xl font-bold md:p-4 p-4 px-0">
        <img
          src="https://www.svgrepo.com/show/474334/coding.svg"
          alt="logo"
          className="w-8"
        />
        Youcef Shaath
      </h1>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col space-y-1 p-2"
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>
      </div>
      <ul
        className={`md:flex space-x-4 p-4 ${
          isOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-[#124170] bg-opacity-95 pl-8"
            : "hidden"
        } md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent md:flex-row md:pl-0`}
      >
        <li>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#FC5185] p-2 px-6 md:px-0 rounded font-bold block md:inline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#FC5185] p-2 rounded font-bold block md:inline"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#FC5185] p-2 rounded font-bold block md:inline"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#FC5185] p-2 rounded font-bold block md:inline"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#certificates"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#FC5185] p-2 rounded font-bold block md:inline"
          >
            Certificates
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#FC5185] p-2 rounded font-bold block md:inline"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
