import { useState } from "react";
import ReactCert from "../assets/Learn React-1.png";
import ExpressCert from "../assets/Learn Express.js-1.png";
import NodeCert from "../assets/Learn Node.js-1.png";
import TailwindcssCert from "../assets/Learn Tailwind CSS-1.png";

const certificates = [
  { id: 1, title: "React Certificate", image: ReactCert },
  { id: 2, title: "Express.js Certificate", image: ExpressCert },
  { id: 3, title: "Node.js Certificate", image: NodeCert },
  { id: 4, title: "Tailwind CSS Certificate", image: TailwindcssCert },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div
      className="flex flex-col bg-[#F9F7F7] text-black p-8 shadow-lg shadow-[#124170]/35 w-[90%] rounded-3xl mb-10 ml-[5%] scroll-mt-20"
      id="certificates"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-700">
        My Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col text-gray-800 hover:text-blue-600 items-center bg-white rounded-2xl shadow-md p-4 w-full max-w-md hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-lg shadow-sm w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-lg font-semibold mt-4 ">{cert.title}</h3>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-[90%] p-10 relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800 text-center">
              {selectedCert.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
