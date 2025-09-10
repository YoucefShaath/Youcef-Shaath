import Pic from "../assets/pic1.jpg";

export default function About() {
  return (
    <div
      className="flex flex-col bg-[#F9F7F7] p-8 shadow-lg shadow-[#124170]/35 w-[90%] rounded-3xl ml-[5%] mt-16 mb-16 scroll-mt-20"
      id="about"
    >
      <h2 className="md:text-4xl text-2xl font-bold mb-8 text-gray-700">
        About Me
      </h2>
      <div className="mx-auto flex md:flex-row flex-col items-center">
        <img
          src={Pic}
          alt="Youcef Shaath"
          className="md:w-[250px] md:h-[250px] w-40 h-40 object-cover rounded-full shadow-lg shadow-[#124170]/50 md:ml-24 md:mb-0 mb-8 border-2 border-[#124170]"
        />
        <p className="md:text-2xl text-lg text-gray-700 max-w-3xl text-center md:ml-4">
          Hi! I'm Youcef Shaath, a tech-savvy web developer passionate about
          building state-of-the-art dynamic and interactive web applications. My
          early days in this profession were driven by curiosity towards
          technology and the need to build things. I love bringing ideas to life
          with code and design, always with the hope of making interactive and
          smooth digital experiences for users.
        </p>
      </div>
    </div>
  );
}
