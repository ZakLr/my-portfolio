import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring,useTransform } from "framer-motion";
const routes = [
  { name: "Home", href: "#", isActive: true },
  { name: "Services", href: "#", isActive: false },
  { name: "Why us?", href: "#", isActive: false },
  { name: "How It Works", href: "#", isActive: false },
  { name: "Features", href: "#", isActive: false },
  { name: "Testimonials", href: "#", isActive: false },
];

const NavMenu = ({ routes }) => (
  <ul
    className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
    id="navbar"
  >
    {routes.map((route, i) => (
      <li key={i}>
        <a
          className={`px-4 ${
            route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          href={route.href}
        >
          {route.name}
        </a>
      </li>
    ))}
  </ul>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
};

const Navigation1 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );
  return (
    <motion.nav className="sticky top-0 z-50 bg-background-primary  backdrop-blur-md backdrop-opacity-75 bg-opacity-75">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-5/6 mx-auto py-4">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16">
            {/* logo */}
            <div>
              <p
                className="text-3xl font-serif font-bold text-highlight "
              >
                My Portfolio
              </p>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 text-text-primary text-xl">
              <a href="#">Home</a>
              <a href="#">Benefits</a>
              <a href="#">Our Classes</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex items-center gap-6">
            
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)} className="text-highlight text-lg">
                HERE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-white text-black overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-screen"
        }`}
      >
        <div className="px-12 py-16">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#" className="border-l-4 border-gray-600 pl-4">Features</a>
            <a href="#" className="pl-4">Pricing</a>
            <a href="#" className="pl-4">Download</a>
            <a href="#" className="pl-4">Classic</a>
          </div>
        </div>
      </div>
      <motion.div style={{
          // scaleX: scrollYProgress,
          scaleX,
          transformOrigin: "left",
          // background: "blue",
          
          position: "sticky",
          top: 0,
          width: "100%",
          height: "5px",
        }}
        className="bg-highlight"
      />
    </motion.nav>
  );
};
export default Navigation1;