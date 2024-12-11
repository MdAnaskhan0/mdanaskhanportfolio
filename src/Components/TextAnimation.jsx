import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TextAnimation = () => {
  const el = useRef(null);  // The element to display the typed text

  useEffect(() => {
    const options = {
      strings: ["Designer", "Developer", "Freelancer", "Photographer"],  // Add your desired words here
      typeSpeed: 100,  // Speed of typing
      backSpeed: 50,   // Speed of erasing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before starting typing
      loop: true,      // Loop the typing effect
      showCursor: true,  // Show the blinking cursor
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <p className="text-lg md:text-2xl font-medium mb-6">
      I&apos;m <span className="typed" ref={el}></span>
      <span className="typed-cursor" aria-hidden="true">|</span>
    </p>
  );
};

export default TextAnimation;
