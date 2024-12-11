import React from "react";
import { FaLaptopCode, FaShop } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { TbSlideshow } from "react-icons/tb";
import { FaCodeFork } from "react-icons/fa6";


const CardDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-lato">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4">
        <FaLaptopCode className="text-6xl text-gray-900 mb-4 hover:text-blue-500 transition-all duration-300 bg-gray-100 p-4 rounded-full hover:bg-blue-100" />
        <h3 className="text-2xl font-semibold text-gray-900 font-yujiMai mb-2">
          Frontend Development
        </h3>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify">
          Specializing in building responsive and interactive user interfaces using modern technologies like React.js, Vue.js, and Tailwind CSS. I create seamless experiences that engage users and provide intuitive navigation.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4">
        <LuBrainCircuit className="text-6xl text-gray-900 mb-4 hover:text-blue-500 transition-all duration-300 bg-gray-100 p-4 rounded-full hover:bg-blue-100" />
        <h3 className="text-2xl font-semibold text-gray-900 font-yujiMai mb-2">
          Backend Development
        </h3>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify">
          Building robust server-side applications with Node.js, Express.js, and MongoDB. I focus on creating efficient APIs, handling server logic, and managing database interactions to ensure smooth data flow.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4">
        <FaCodeFork className="text-6xl text-gray-900 mb-4 hover:text-blue-500 transition-all duration-300 bg-gray-100 p-4 rounded-full hover:bg-blue-100" />
        <h3 className="text-2xl font-semibold text-gray-900 font-yujiMai mb-2">
          Full Stack Development
        </h3>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify">
          Experienced in full-stack development with expertise in both frontend and backend technologies. I integrate frontend frameworks with backend services to deliver end-to-end solutions that meet user needs and business goals.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4">
        <FaShop className="text-6xl text-gray-900 mb-4 hover:text-blue-500 transition-all duration-300 bg-gray-100 p-4 rounded-full hover:bg-blue-100" />
        <h3 className="text-2xl font-semibold text-gray-900 font-yujiMai mb-2">
          E-commerce Solutions
        </h3>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify">
          Developing scalable e-commerce platforms that provide seamless user experience with features like product catalog, shopping cart, secure checkout, and user authentication. My solutions ensure high performance and reliability.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4">
        <CiMobile3 className="text-6xl text-gray-900 mb-4 hover:text-blue-500 transition-all duration-300 bg-gray-100 p-4 rounded-full hover:bg-blue-100" />
        <h3 className="text-2xl font-semibold text-gray-900 font-yujiMai mb-2">
          Mobile App Development
        </h3>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify">
          Building mobile-first applications using React Native and Flutter. I focus on delivering cross-platform apps that are optimized for performance and user experience, helping businesses reach a wider audience.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4">
        <TbSlideshow className="text-6xl text-gray-900 mb-4 hover:text-blue-500 transition-all duration-300 bg-gray-100 p-4 rounded-full hover:bg-blue-100" />
        <h3 className="text-2xl font-semibold text-gray-900 font-yujiMai mb-2">
          UI/UX Design
        </h3>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify">
          Designing user interfaces with a focus on usability, accessibility, and aesthetics. I create engaging and intuitive designs that enhance user interaction and improve overall user satisfaction.
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
