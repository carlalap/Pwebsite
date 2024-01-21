import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a Full Stack Web Developer student at Atlas School 
        (formerly Holberton School) in Tulsa, OK. I have a solid foundation 
        in creating efficient technological solutions using JavaScript,
        Python, HTML, CSS, MySQL, and C. With the addition of React and Tailwind
        for my personal web projects, I am expanding my skill set. 
        I am self-motivated and always eager to learn new skills.
        </p>

        <br />

      </div>
    </div>
  );
};

export default About;