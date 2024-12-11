// src/components/Portfolio.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DailyNeeds from "../assets/Images/DailyNeeds.jpg";
import NeedShopBD from "../assets/Images/Need_Shop_BD.png";
import OnlineRestaurant from "../assets/Images/OnlineRestaurant.png";
import EShop from "../assets/Images/E-Shop.png";
import TravelWithWEEKAWAY from "../assets/Images/TravelWithWEEKAWAY-.png";
import VirtualWorldVision from "../assets/Images/Virtual_World_Vision.png";
import DreamAgency from "../assets/Images/Dream_Agency.png";

const projects = [
  {
    title: "Need-Shop-BD",
    description:
      "MERN Stack Ecommerce Website built with MongoDB, Express, React, and Node.js. Tailwind-powered CRUD App with an Admin Panel.",
    image: {
      src: NeedShopBD,
      alt: "Need-Shop-BD Project",
    },
    category: "Full Stack",
    repoLink: "https://github.com/MdAnaskhan0/Need-Shop-BD.git",
  },
  {
    title: "Restaurant Management System",
    description:
      "Local area online restaurant management system. Full Stack E-commerce Web Application.",
    image: {
      src: OnlineRestaurant,
      alt: "Restaurant Management System",
    },
    category: "Full Stack",
    repoLink:
      "https://github.com/MdAnaskhan0/Online-Restaurant-Management-System.git",
  },
  {
    title: "DailyNeeds - E-commerce Web Application",
    description: "MERN Stack E-commerce Web Application.",
    image: {
      src: DailyNeeds,
      alt: "DailyNeeds Project",
    },
    category: "Full Stack",
    repoLink: "https://github.com/MdAnaskhan0/DailyNeeds-E-Commerce.git",
  },
  {
    title: "E-Shop - Online Shopping Website",
    description:
      "React E-commerce Website with User Authentication, Add to Cart, Checkout, Search Product, and Filter Product functionality.",
    image: {
      src: EShop,
      alt: "E-Shop Project",
    },
    category: "Web Design",
    repoLink: "https://github.com/MdAnaskhan0/BatteryLowEcomerce.git",
  },
  {
    title: "Travel_with_WEEKAWAY",
    description: "Travel Booking Portfolio Website.",
    image: {
      src: TravelWithWEEKAWAY,
      alt: "Travel_with_WEEKAWAY",
    },
    category: "Web Design",
    repoLink: "https://github.com/MdAnaskhan0/Travel_with_WEEKAWAY.git",
  },
  {
    title: "Virtual_World_Vision",
    description: "Virtual Reality (VR) development platform website.",
    image: {
      src: VirtualWorldVision,
      alt: "Virtual_World_Vision Project",
    },
    category: "Web Design",
    repoLink: "https://github.com/MdAnaskhan0/Virtual_World_Vision.git",
  },
  {
    title: "Dream_Agency",
    description: "Dream_Agency Portfolio Website.",
    image: {
      src: DreamAgency,
      alt: "Dream_Agency Project",
    },
    category: "Web Design",
    repoLink: "https://github.com/MdAnaskhan0/Dream_Agency.git",
  },
];

const categories = ["All", "Full Stack", "Web Design"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 sm:px-8 lg:px-12 font-yujiMai">
      <section className="text-left mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h3>
        <hr className="w-16 border-t-2 border-blue-500 mb-6" />
        <p className="text-md md:text-lg text-gray-600 leading-relaxed text-justify font-lato">
          Welcome to my portfolio! Here, you'll find a curated selection of my
          projects that showcase my skills and expertise as a developer. I
          specialize in creating robust, user-friendly, and scalable web
          applications using modern technologies like React, Node.js, MongoDB,
          and Tailwind CSS. From full-stack e-commerce platforms to dynamic
          portfolio websites and cutting-edge virtual reality development
          platforms, each project represents a step forward in my journey as a
          passionate developer. I strive to deliver high-quality solutions that
          blend innovation with functionality. Feel free to explore the
          projects, check out the repositories, and get a glimpse of my
          dedication to creating impactful digital experiences. Let's build
          something amazing together!
        </p>
      </section>

      <div className="flex justify-start space-x-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? "bg-gray-300 text-black"
                : "bg-gray-600 text-white"
            } hover:bg-gray-600 transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 transition-shadow hover:shadow-xl"
          >
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="rounded-t-lg w-full h-48 object-cover hover:scale-105 transition duration-300 mb-4"
            />
            <div className="p-4">
              <div className="min-h-[100px]">
              <h3 className="text-md font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 font-lato text-sm">{project.description.slice(0, 30)}...</p>
              </div>
              <Link
                to={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 text-g-500 hover:text-gray-800 font-medium border border-gray-300 rounded-md px-4 py-2 transition duration-300"
              >
                View Repository →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
