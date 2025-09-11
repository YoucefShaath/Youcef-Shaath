import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <footer
      className="flex flex-col bg-[#124170] text-white p-8 shadow-lg shadow-[#124170]/35 w-[90%] rounded-3xl mb-10 ml-[5%] scroll-mt-20"
      id="contact"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <a
            href="mailto:oy_shaath@esi.dz"
            className="text-md text-[#F9F7F7] hover:underline hover:text-gray-200"
          >
            oy_shaath@esi.dz
          </a>
        </div>

        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/YoucefShaath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} className="hover:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaath-youcef-59a3a5332/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} className="hover:text-gray-300" />
          </a>
        </div>
      </div>
      <p className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Youcef Shaath. All rights reserved.
      </p>
    </footer>
  );
}
