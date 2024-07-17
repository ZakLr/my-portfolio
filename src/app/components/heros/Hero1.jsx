import React from 'react'
import './Hero1.css'
import personalPic from "./me.png" // Path: src/app/components/heros/img.jpg
import Image from 'next/image'
function Hero1() {
  return (
    <header className="hero">
        <Image src={personalPic} alt="lol"/>
        <div className="main-title">
            <h1 className="h1">FullStack developer</h1>
            <div className="quote">
                <p>
                    "When i am working on a problem, i never think about beauty 
                    but when i have finished if the solution is not beautiful ,
                    I know it is wronge."
                </p>
                <span>_steve jobs_</span>
            </div>

            <div className="bg-black">
                <h2>Hailey Johnson</h2>
                <h4>Hello, this is Hailey</h4>
                <p>I am a passionate product designer based
                    in sas francisco Designing Minimal products based on the latest design trends
                    and a good user experience in what i care about the most.
                </p>
            </div>
        </div>
    </header>
  )
}

export default Hero1
