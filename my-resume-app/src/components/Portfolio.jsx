import React from "react";
import MuseumImag from "../assets/portfolio/MuseumImag.jpg";
import SimpleShell from "../assets/portfolio/SimpleShell.jpg";
import AirbnbClone from "../assets/portfolio/AirbnbClone.jpg";
import BunkerBites from "../assets/portfolio/BunkerBites.jpg";
import FutureProject from "../assets/portfolio/FutureProject.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: MuseumImag,
      title: "Museum of Imagination",
    },
    {
      id: 2,
      src: AirbnbClone,
      title: "Airbnb Clone",
    },
    {
      id: 3,
      src: SimpleShell,
      title: "Simple Shell Project",
    },
    {
      id: 4,
      src: BunkerBites,
      title: "Bunker Bites",
    },
    {
      id: 5,
      src: SimpleShell,
      title: "In development",
    },
    {
      id: 6,
      src: SimpleShell,
      title: "In development",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-green-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;