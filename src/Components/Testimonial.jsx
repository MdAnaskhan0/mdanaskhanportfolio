import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screens to complex dashboards. Perfect choice for your next SaaS application.",
    name: "Micheal Gough",
    role: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote:
      "The support team is amazing and the templates are top-notch. Highly recommended for developers who want to save time.",
    name: "Sarah Connor",
    role: "Product Manager at Amazon",
    image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg",
  },
  {
    quote:
      "Fantastic resource! The design system speeds up the development process while ensuring a consistent UI/UX.",
    name: "John Doe",
    role: "CTO at Meta",
    image: "https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-4.jpg",
  },
  {
    quote:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screens to complex dashboards. Perfect choice for your next SaaS application.",
    name: "Micheal Gough",
    role: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true, // You can add this to show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-center font-yujiMai py-8 rounded-xl">
      <div className="max-w-screen-xl px-4 lg:py-16 lg:px-6 mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="max-w-screen-md mx-auto text-center">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  <q>{testimonial.quote}</q>
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={testimonial.image}
                  alt={`Profile of ${testimonial.name}`}
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
