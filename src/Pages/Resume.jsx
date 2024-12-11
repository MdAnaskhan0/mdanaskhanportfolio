import React from "react";
import Summary from "../Components/Resume/Summary";
import Education from "../Components/Resume/Education";
import WorkExperience from "../Components/Resume/WorkExperience";

const Resume = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-16 sm:px-8 lg:px-12 font-lato">
        {/* Resume Title and Description */}
        <section className="text-left mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 font-yujiMai">Resume</h3>
          <hr className="w-16 border-t-2 border-blue-500 mb-6" />
          <p className="text-md md:text-lg text-gray-600 leading-relaxed text-justify">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </section>

        {/* Resume Details Section */}
        <div className="space-y-8">
          {/* Summary */}
          <Summary />

          {/* Education */}
          <Education />
        </div>

        {/* Works Experience */}
        <WorkExperience />
      </div>
    </>
  );
};

export default Resume;
