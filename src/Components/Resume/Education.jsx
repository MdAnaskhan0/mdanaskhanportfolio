import React from "react";

const Education = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-lato">
      <h3 className="text-2xl font-semibold text-black mb-4 font-yujiMai">
        <i className="fas fa-graduation-cap mr-2 text-black"></i>
        Education
      </h3>
      <div className="mt-4">
        <h4 className="text-xl font-medium text-gray-800 mb-4">
          <ul>
            <li className="flex items-center font-yujiMai">
              <i className="fas fa-university mr-2 text-black text-sm"></i>
              BSC in Computer Science and Engineering
            </li>
          </ul>
        </h4>
        <div className="pl-8 flex flex-col gap-2 text-sm">
          <h5 className="text-gray-600">
            Green University of Bangladesh (GUB), Dhaka
          </h5>
          <ul className="flex flex-col gap-2">
            <li>2020 - Continue</li>
            <li>CGPA: 3.10 (Out of 4)</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-medium text-gray-800 mb-4">
          <ul>
            <li className="flex items-center font-yujiMai">
              <i className="fas fa-school mr-2 text-black text-sm"></i>
              Higher Secondary Certificate in (Science)
            </li>
          </ul>
        </h4>
        <div className="pl-8 flex flex-col gap-2 text-sm">
          <h5 className="text-gray-600">AKM Rahmatullah College, Dhaka</h5>
          <ul className="flex flex-col gap-2">
            <li>2017 - 2019</li>
            <li>CGPA: 3.92 (Out of 5)</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-medium text-gray-800 mb-4">
          <ul>
            <li className="flex items-center font-yujiMai">
              <i className="fas fa-school mr-2 text-black text-sm"></i>
              Secondary School Certificate in (Science)
            </li>
          </ul>
        </h4>
        <div className="pl-8 flex flex-col gap-2 text-sm">
          <h5 className="text-gray-600">Banani Model School, Dhaka</h5>
          <ul className="flex flex-col gap-2">
            <li>2017 - 2019</li>
            <li>CGPA: 5.00 (Out of 5)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
