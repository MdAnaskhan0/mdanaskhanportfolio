import React from "react";

const WorkExperience = () => {
  return (
    <div className="space-y-8 mt-8 font-lato">
      {/* Professional Experience */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-black mb-4 font-yujiMai">
          <i className="fa fa-project-diagram mr-2 text-black"></i>
          Professional Experience
        </h3>

        {/* Job 1 */}
        <div className="mb-6">
          <h4 className="text-xl font-medium text-gray-800">
            <ul>
              <li className="flex items-center font-yujiMai mb-2">
                <i className="fas fa-computer mr-2 text-black text-sm"></i>
                Frontedn Web Developer
              </li>
            </ul>
          </h4>
          <h5 className="text-gray-600 text-md">
            Battery Low Interactive Ltd., Dhaka | 2024 - Present
          </h5>
          <ul className="mt-4 space-y-2 text-gray-600 text-justify pr-[30%] text-sm">
            <li className="flex items-start">
              <i className="fas fa-arrow-right mr-2 text-black text-sm"></i>
              Implemented performance improvements through code refactoring,
              image optimization, and leveraging caching techniques, resulting
              in a 30% reduction in page load times and enhanced overall
              website performance.
            </li>
            <li className="flex items-start">
              <i className="fas fa-arrow-right mr-2 text-black text-sm"></i>
              Collaborated with cross-functional teams including UX/UI
              designers and back-end developers to implement new features and
              troubleshoot technical issues, ensuring high-quality code and
              seamless functionality.
            </li>
            <li className="flex items-start">
              <i className="fas fa-arrow-right mr-2 text-black text-sm"></i>
              Developed and optimized user-friendly web applications using
              HTML, CSS, and JavaScript to create responsive and visually
              appealing user interfaces, improving user engagement by 25%.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div>
          <h4 className="text-xl font-medium text-gray-800">
            <ul>
              <li className="flex items-center font-yujiMai mb-2">
                <i className="fas fa-headset mr-2 text-black text-sm"></i>
                Customer Service Representative
              </li>
            </ul>
          </h4>
          <h5 className="text-gray-600 text-md">
            Leopard Calling Service Ltd., Dhaka | 2022 - 2023
          </h5>
          <ul className="mt-4 space-y-2 text-gray-600 text-justify pr-[30%] text-sm">
            <li className="flex items-center">
              <i className="fas fa-arrow-right mr-2 text-black"></i>
              Answered customer calls, addressed inquiries, and provided
              helpful solutions.
            </li>
            <li className="flex items-center">
              <i className="fas fa-arrow-right mr-2 text-black"></i>
              Handled complaints, resolving issues to ensure customer
              satisfaction levels.
            </li>
            <li className="flex items-center">
              <i className="fas fa-arrow-right mr-2 text-black"></i>
              Processed orders, scheduled appointments, and updated customer
              account information.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
