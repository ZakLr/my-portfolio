import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import myPic from "../assets/mypic3.png";
import Image from "next/image";
import DotsEffect from "./DotsEffect";
import { motion } from "framer-motion";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const HeroHeader8 = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full-Stack Web Developer", "Machine Learning Enthusiast"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="ezy__header8 light  bg-background-primary h-[80vh] relative overflow-hidden  md:min-h-screen flex items-center">
      <div className="container px-4 relative z-20">
        <div className="flex gap-3 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-2/3 sm:ml-6 "
          >
            <div>
            <h2 className="sm:text-3xl leading-none md:text-7xl font-bold sm:mb-6 text-3xl text-text-primary ">
              Hey there,
            </h2>
            <h2 className="sm:text-3xl leading-none md:text-7xl font-bold mb-6 text-3xl text-text-primary">
                          I&apos;m
                          <span className="text-text-secondary p-3">
                          Zakaria Lourghi
                          </span>
            </h2>
            </div>
            <p
              className="text-xl md:text-2xl lg:text-3xl leading-normal mb-2  typed-text-container h-3 text-highlight"
              ref={typedRef}
                      ></p>
                      
            <div className="flex gap-4 text-3xl sm:text-4xl text-text-secondary p-8 ">
                <motion.a 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 100 }}
                href="https://www.linkedin.com/in/zakaria-lourghi" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">
                    <SiLinkedin/>
                </motion.a>
                <motion.a 
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  style={{ x: 100 }}
                  href="https://www.facebook.com/zaki.lr.5" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">
                    <SiFacebook/>
                </motion.a>
                <motion.a 
                  style={{ x: 100 }}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/ZakLr" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">
                    <SiGithub/>
                </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-1/3 mb-6  text-center block "
          >
            <Image
              src={myPic}
              alt="wtf is wrong"
              className="w-full  shadow-highlight h-auto border-[10px] border-white shadow-lg dark:border-gray-700 rounded-tl-[30%] rounded-br-[30%] rounded-tr-[30%] rounded-bl-[30%] "
            />
          </motion.div>
        </div>
      </div>
      <DotsEffect
        top={0}
        right={-3}
        scale={1.5}
        rotation={45}
        opacity={0.6}
        rows={6}
        columns={6}
      />
      <DotsEffect
        bottom={1}
        left={0}
        scale={0.7}
        rotation={45}
        opacity={0.6}
        rows={3}
        columns={3}
      />
    </header>
  );
};

export default HeroHeader8;
