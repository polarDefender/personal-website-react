import React from "react";
import Footer from "./Footer";
import Socials from "./Socials";

function Portfolio() {

    const repos = [
        {name: "repo1", url: "https://weather-app-eight-azure-11.vercel.app/", description: "Weather Forecast By Zip Code (React)"},
        {name: "repo2", url: "https://rainbow-recipe-repository.vercel.app/", description: "Recipe Logging App with User Authentication (React, Firebase)"}
    ];

    return (
        <div className="portfolio">
            <h1>Portfolio Projects</h1>
            <p className="portfolio-p">Welcome to my portfolio page! Below is a list of links to repositories of significant projects I have completed!</p>
            <br/>

            <ul className="repos">
                {repos.map(repo => (
                    <>
                        <li key={repo.name}>
                            <a href={repo.url} target="blank">{repo.description}</a>
                        </li>
                        <br/>
                    </>
                ))}
            </ul>
            <br/>
            <Socials />
            <br/>
            <Footer />
        </div>
    )
}

export default Portfolio;