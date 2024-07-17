import React, { useEffect, useRef } from "react";
import { faTwitter, faDribbble, faBehance } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Typed from "typed.js";
import myPic from "../assets/my_pic.jpg";
import Image from "next/image";
import DotsEffect from "./DotsEffect";
import { motion } from "framer-motion";


const HeroHeader8 = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Fullstack Developer", "Machine Learning Engineer"],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 100,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: "",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header className="ezy__header8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white relative overflow-hidden">
            <div className="container px-4 relative z-20">
                <div className="flex gap-3 items-center ">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 2, x:0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-2/3 sm:ml-6">
                        <h2 className="sm:text-3xl leading-none md:text-7xl font-bold mb-6 text-3xl" >
                            Hey there
                        </h2>
                        <h2 className="sm:text-3xl leading-none md:text-7xl font-bold mb-6 text-3xl" >
                            I'm Zakaria Lourghi
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl leading-normal mb-2  typed-text-container min-h-3 text-highlight" ref={typedRef}>
                        </p>
                        
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 2, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}

                        className="w-1/3 mb-6  text-center block ">
                        <Image
                            src={myPic}
                            alt="wtf is wrong"
                            className="max-w-full  shadow-highlight h-auto border-[10px] border-white shadow-lg dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] "
                        />
                    </motion.div>
                </div>
            </div>
            <DotsEffect top={0} right={0} scale={1.5} rotation={45} opacity={0.6} rows={6} columns={6}/>
            
        </header>
    );
};

export default HeroHeader8;