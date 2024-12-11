import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import ContactForm from "./Components/ContactForm";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Access current location for animations

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 }, // Start off-screen to the right
    animate: { opacity: 1, x: 0 }, // Move to the center
    exit: { opacity: 0, x: -100 }, // Move off-screen to the left
  };

  return (
    <div className="h-screen flex flex-col md:grid md:grid-cols-5">
      {/* Mobile Header */}
      <div className="flex justify-between w-full sticky top-0 z-50 bg-gray-800 text-white px-4 py-2 md:hidden">
        <h1 className="text-xl font-bold">Md Anas Khan</h1>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:col-span-1 z-50`}
      >
        <Sidebar />
      </div>

      {/* Main Content with Animated Routes */}
      <div className="flex-1 bg-gray-100 md:col-span-4 z-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/resume"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Resume />
                </motion.div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Portfolio />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Service />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ContactForm />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
