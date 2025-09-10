import DataHack from "../assets/datahack.png";
import CAA from "../assets/caa.png";
import CSEForums from "../assets/cseforums.png";

const projects = [
  {
    title: "DataHack 2",
    image: DataHack,
    link: "https://datahack-2k25.cse.club/",
    description: "The first event's website I worked on",
  },
  {
    title: "CSE Around Algeria",
    image: CAA,
    link: "https://caa-2025.cse.club/",
    description: "More projects and more experience",
  },
  {
    title: "CSE Forums",
    image: CSEForums,
    link: "https://cse.club/projects/cse-forums",
    description: "The first project I worked on",
  },
];

export default function Projects() {
  return (
    <div
      className="flex flex-col bg-[#F9F7F7] text-black p-8 shadow-lg shadow-[#124170]/35 w-[90%] rounded-3xl mb-10 ml-[5%] scroll-mt-20"
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-700">My Projects</h2>

      <div className="relative flex flex-col md:flex-row md:justify-between md:items-center w-full">
        <div className="absolute md:top-[80%] md:right-0 md:w-[80%] md:ml-[7%] md:border-t-2 md:border-l-0 border-l-2 border-gray-300 left-1/2 -translate-x-1/2 top-16 bottom-0"></div>

        {projects.map((project, index) => (
          <>
            <div className="md:hidden flex w-full items-center mb-8 px-4">
              <div className="w-1/2 pr-4 text-right">
                {index % 2 === 0 ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl shadow-md transition-transform group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-xl font-semibold"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-md text-gray-600">
                      {project.description}
                    </p>
                  </>
                )}
              </div>
              <div className="relative z-10">
                <span className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold ring-4 ring-[#F9F7F7]">
                  {index + 1}
                </span>
              </div>
              <div className="w-1/2 pl-4 text-left">
                {index % 2 === 0 ? (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-xl font-semibold"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-md text-gray-600">
                      {project.description}
                    </p>
                  </>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl shadow-md transition-transform group-hover:scale-110"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="hidden md:block relative flex flex-col items-center w-1/3 px-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center mb-10"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-72 h-32 object-cover rounded-2xl shadow-md transition-transform group-hover:scale-105"
                />
                <h3 className="text-lg font-semibold mt-2 group-hover:text-blue-600">
                  {project.title}
                </h3>
              </a>
              <div className="absolute top-[80%] -translate-y-1/2 w-full flex items-center justify-center">
                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold ring-4 ring-[#F9F7F7]">
                  {index + 1}
                </span>
              </div>
              <p className="mt-6 text-md text-gray-600 text-center">
                {project.description}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
