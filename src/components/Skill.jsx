import { useState, useEffect, useRef } from "react";

export default function Skill(props) {
  const [isHovered, setHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const skillRef = useRef(null);

  const isEven = props.index % 2 === 0;

  useEffect(() => {
    if (isHovered) {
      setProgressWidth(Number(props.level) || 0);

      if (skillRef.current) {
        const rect = skillRef.current.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const dialogWidth = 280;
        const dialogMargin = 20;

        if (window.innerWidth >= 768) {
          if (rect.right + dialogWidth + dialogMargin > screenWidth) {
            setShowLeft(true);
          } else {
            setShowLeft(false);
          }
        } else {
          if (rect.left + dialogWidth > screenWidth) {
            setShowLeft(true);
          } else {
            setShowLeft(false);
          }
        }
      }

      if (window.innerWidth < 768) {
        const handleScroll = () => setHovered(false);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    } else {
      setProgressWidth(0);
    }
  }, [isHovered, props.level]);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      const timeout = setTimeout(() => setHovered(true), 1000);
      setHoverTimeout(timeout);
    } else {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHovered(false);
  };

  return (
    <li
      ref={skillRef}
      className="relative md:w-[110px] md:h-[110px] w-24 h-24 rounded-full shadow-lg hover:scale-105 ease-in duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isHovered ? 10 : 1 }}
    >
      <img
        src={props.link}
        alt={props.name}
        className="p-4 object-fill rounded-full bg-white"
      />

      {isHovered && (
        <div
          className={`absolute w-[280px] bg-gray-800 text-white p-5 rounded-lg shadow-2xl transition-opacity duration-300
            ${
              window.innerWidth >= 768
                ? showLeft
                  ? "md:top-1/2 md:right-[calc(100%+20px)] md:-translate-y-1/2"
                  : "md:top-1/2 md:left-[calc(100%+20px)] md:-translate-y-1/2"
                : isEven
                ? "top-full left-0 mt-2"
                : "top-full right-0 mt-2"
            }`}
          style={{ zIndex: 9999 }}
        >
          <h3 className="font-bold text-xl mb-3">{props.name}</h3>
          <p className="text-sm mb-4 leading-relaxed">
            {props.description || "No description available."}
          </p>
          <div className="relative pt-2">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-xs font-semibold">Proficiency</span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-[#124170]">
                {props.level}%
              </span>
            </div>
            <div className="overflow-hidden h-3 flex rounded-full bg-gray-700">
              <div
                className="shadow-md flex justify-center bg-gradient-to-r from-[#124170] to-blue-600"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
