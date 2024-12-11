import React from "react";
import Image from "../assets/Images/About.jpg";
import SkillsBar from "../Components/SkillsBar";

const About = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* About Title and Description */}
        <section className="text-left mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 font-yujiMai">About</h3>
          <hr className="w-16 border-t-2 border-blue-500 mb-6" />
          <p className="text-md md:text-lg text-gray-600 leading-relaxed text-justify font-lato">
            I am a Full Stack Developer with comprehensive expertise in HTML,
            CSS, JavaScript, React.js, and Tailwind CSS, along with a solid
            understanding of Express.js and MongoDB. This combination enables me
            to effectively create and manage reliable web applications across
            the entire development stack. I specialize in utilizing modern
            frameworks and technologies to deliver high-quality,
            industry-standard code that meets both user needs and business
            objectives. Driven by a strong passion for solving complex problems,
            I am committed to continuous learning and professional development.
          </p>
        </section>

        {/* About Details Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between mb-16 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={Image}
              alt="Profile"
              className="rounded-[5%] h-[450px] w-full lg:w-[450px] object-cover shadow-lg border-none border-gray-500 shadow-gray-500/50 hover:shadow-gray-500/100"
            />
          </div>

          <div className="text-center lg:text-left w-full lg:w-1/2 space-y-4 font-lato">
            <h3 className="text-3xl font-semibold text-gray-900 font-yujiMai">
              UI/UX Designer & Web Developer
            </h3>
            <p className="text-gray-700 text-lg">
              A passionate full-stack developer from Bangladesh.
            </p>

            <div className="space-y-3 text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fa fa-angle-right text-indigo-500 mr-2"></i>
                  <span className="font-medium pr-2">Birthday:</span> 24 Sep 2000
                </li>
                <li className="flex items-center">
                  <i className="fa fa-angle-right text-indigo-500 mr-2"></i>
                  <span className="font-medium pr-2">Phone:</span> 019813-80806
                </li>
                <li className="flex items-center">
                  <i className="fa fa-angle-right text-indigo-500 mr-2"></i>
                  <span className="font-medium pr-2">Email:</span> anas.cse.201@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="fa fa-angle-right text-indigo-500 mr-2"></i>
                  <span className="font-medium pr-2">City:</span> Dhaka, Bangladesh
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mt-6 text-justify font-lato">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsBar />
      </div>
    </>
  );
};

export default About;
