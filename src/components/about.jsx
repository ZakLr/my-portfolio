import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../assets/my_pic.jpg";
import DotsEffect from "./DotsEffect";

const AboutMe = () => {
  //typing stuff

  //animation stuff
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  return (
    <motion.div id="about" className="min-h-full bg-background-primary relative overflow-hidden">
      <header className="  py-24  ">
        <div className="container px-4 relative">
          <div className="text-5xl font-bold italic text-text-primary text-center p-5 pb-7">
            About Me
          </div>
          <div className="flex items-center justify-around">
            <div className="hidden sm:flex  mb-6 lg:mb-0 text-center lg:text-start">
              <Image
                src={profilePic}
                alt="wtf is wrong"
                className="hidden md:flex max-w-full h-[] border-[20px] border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
              />
            </div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ visible: 0.5 }}
              transition={{ duration: 2 }}
              className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12 p-4"
            >
              <div className="text-justify">
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span>  . I&apos;m a second-year
                  student at
                  <span className="text-text-secondary"> ESI</span> (High
                  National School of Computer Science) based in Tlemcen,
                  Algeria.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span> . Proficient in
                  <span className="text-text-secondary"> HTML, CSS</span>, and
                  <span className="text-text-secondary"> JavaScript</span>.
                  Adept in the
                  <span className="text-text-secondary"> MERN stack</span>{" "}
                  (MongoDB, Express, React, Node.js).
                </p>
                
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span> . Excels in crafting
                  user-centric websites,
                  using
                  <span className="text-text-secondary"> Next.js</span> and
                  popular React libraries such as
                  <span className="text-text-secondary"> Redux, Axios</span>,
                  and
                  <span className="text-text-secondary"> React Query</span>.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span> . Advanced in
                  <span className="text-text-secondary">
                    {" "}
                    Python, machine learning
                  </span>
                  , and
                  <span className="text-text-secondary">
                    {" "}
                    data science
                  </span>{" "}
                  libraries like
                  <span className="text-text-secondary">
                    {" "}
                    Numpy, Pandas, Scikit-learn, TensorFlow
                  </span>
                  , and
                  <span className="text-text-secondary"> Keras</span>.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span> . Experienced in backend
                  technologies, particularly with
                  <span className="text-text-secondary"> PostgreSQL</span> and
                  <span className="text-text-secondary"> Prisma</span>.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span> . Committed to
                  <span className="text-text-secondary">
                    {" "}
                    continual learning
                  </span>
                  , staying updated on the latest web technologies and
                  <span className="text-text-secondary">
                    {" "}
                    best practices
                  </span>{" "}
                  to enhance project outcomes.
                </p>
                <p className="my-paragraph text-xl lg:text-2xl text-text-primary p-2">
                  <span className="bullet"></span> . Contributed to many
                  university clubs as a technical team member, including
                  <span className="text-text-secondary"> GDG SBA</span> and
                  <span className="text-text-secondary"> GDSC ESI SBA</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default AboutMe;
