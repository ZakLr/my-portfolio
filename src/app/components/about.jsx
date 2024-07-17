import React, { useRef, useEffect,useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../assets/my_pic.jpg";
import DotsEffect from "./DotsEffect";

const AboutMe = () => {
  //typing stuff
  

  //animation stuff
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  
  return (
    <motion.div
      className="min-h-full bg-background-primary relative overflow-hidden">
      <header className=" light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
        <div className="container px-4 relative">
          <motion.p

            className="text-center  my-8 text-[1rem] sm:text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] text-text-primary italic font-bold"
          >
            About me
          </motion.p>
          <div className="flex items-center justify-around">
            
            <motion.div
              initial={{ x: -30, scale: 90, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x:0
              }}
              transition={{duration:2}}
              className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
              <div className="">
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary">
                  <span className="bullet">&#8226;</span> I'm a second-year
                  student at <span className="text-highlight">ESI</span> (High
                  National School of Computer Science) based in Tlemcen/Algeria.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary">
                  <span className="bullet">&#8226;</span> Proficient in{" "}
                  <span className="text-highlight">HTML, CSS</span>, and{" "}
                  <span className="text-highlight">JavaScript</span>, adept in{" "}
                  <span className="text-highlight">MERN stack</span> (MongoDB,
                  Express, React, Node.js).
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary">
                  <span className="bullet">&#8226;</span> Advanced in{" "}
                  <span className="text-highlight">
                    Python, machine learning
                  </span>{" "}
                  and <span className="text-highlight">data science</span>{" "}
                  libraries like{" "}
                  <span className="text-highlight">
                    Numpy, Pandas, Scikit-learn, TensorFlow
                  </span>
                  , and <span className="text-highlight">Keras</span>.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary">
                  <span className="bullet">&#8226;</span> Excels in crafting
                  user-centric websites, implementing machine learning models.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary">
                  <span className="bullet">&#8226;</span> Committed to{" "}
                  <span className="text-highlight">
                    continual learning, staying updated
                  </span>{" "}
                  on the latest web technologies and{" "}
                  <span className="text-highlight">best practices</span> to
                  enhance project outcomes.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary">
                  <span className="bullet">&#8226;</span> Contributed in many
                  university clubs as a technical team member like{" "}
                  <span className="text-highlight">GDG SBA, GDSC ESI SBA</span>
                  ...
                </p>
              </div>
            </motion.div>
            <div className="hidden sm:flex col-span-12 lg:col-span-5 xl:col-span-4 lg:order-2 mb-6 lg:mb-0 text-center lg:text-start">
              <Image
                src={profilePic}
                alt="wtf is wrong"
                className="hidden md:flex max-w-full h-[] border-[20px] border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
              />
            </div>
          </div>
        </div>
      </header>
      <DotsEffect top={2} left={0} rows={3} columns={3} opacity={ 0.5} />
    </motion.div>
  );
};

export default AboutMe;
