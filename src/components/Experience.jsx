import ReactWorkshop from "../assets/ReactWorkshop.png";
import Pic from "../assets/promo.jpg";

const experiences = [
  {
    id: 1,
    title: "ESI Student",
    description:
      "Computer Science student at the Higher National School of Computer Science",
    image: Pic,
  },
  {
    id: 2,
    title: "React Workshop",
    description: "Conducted a workshop on React.js",
    image: ReactWorkshop,
  },
];

export default function Experience() {
  return (
    <div
      className="flex flex-col bg-[#F9F7F7] text-black p-8 shadow-lg shadow-[#124170]/35 w-[90%] rounded-3xl mb-10 ml-[5%] scroll-mt-20"
      id="experience"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-700">My Experience</h2>

      <div className="relative flex flex-col items-center">
        <div className="absolute md:top-20 top-24 bottom-0 left-[49.8%] border-l-4 border-gray-300"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="flex w-full max-w-4xl items-center mb-16"
          >
            <div className="w-1/2 pr-8  text-right">
              {index % 2 === 0 ? (
                <div className="flex justify-end">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-64 rounded-2xl shadow-md"
                  />
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-md text-gray-600">{exp.description}</p>
                </>
              )}
            </div>

            <div className="relative z-9">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white font-bold ring-8 ring-[#F9F7F7]">
                {index + 1}
              </span>
            </div>

            <div className="w-1/2 pl-8 text-left">
              {index % 2 === 0 ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-md text-gray-600">{exp.description}</p>
                </>
              ) : (
                <div className="flex justify-start">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-64 rounded-2xl shadow-md"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
