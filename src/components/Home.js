import React from "react";
import Footer from "./Footer";
import Socials from "./Socials";

function Home() {
    return (
        <div className="about-background">
            <div className="about">
                <h1>Charlie Chase Productions</h1>
                <h2>Professional Excellence in Full Stack Development</h2>
                <br/>
                <p>Hello, and welcome to Charlie Chase Productions, the center for all of my software development endeavors! I'm Charlie, a passionate full stack developer with a flair for creating dynamic and user-friendly web applications. My journey in software development is marked by a deep expertise in JavaScript, with an exceptional skill set in React, making me adept at crafting responsive and interactive user interfaces. React isn't just a tool for me; it's a canvas where I blend functionality with creativity.</p>

                <p>My proficiency doesn't stop at front-end technologies. I'm equally skilled in Python, utilizing its powerful and efficient nature to develop robust back-end solutions. Combined with Flask, I create seamless and scalable server-side applications. Moreover, my knowledge of SQL ensures that data management and manipulation in my applications are both efficient and secure.</p>

                <p>Dive into my portfolio to see how I bring together JavaScript, React, Python, Flask, and SQL to build seamless, full-stack solutions that not only meet but exceed user expectations.</p>
                <br/>
                <h3 className="outro">Let's embark on this journey of innovation and excellence together!</h3>
                <br/>
            </div>
            <Footer />
            <Socials />
        </div>
    )
}

export default Home;