import React from "react";
import Footer from "./Footer";

function Projects() {

    const repos = [
        {name: "repo1", url: "https://weather-app-eight-azure-11.vercel.app/", description: "Weather Forecast By Zip Code (React)"},
        {name: "repo2", url: "https://rainbow-recipe-repository.vercel.app/", description: "Recipe Logging App with User Authentication (React, Firebase)"}
    ];

    return (
        <div className="portfolio">
            <h1>Portfolio Projects</h1>
            <p className="portfolio-p">Below are my GitHub profile and LinkedIn profile, as well as a list of links to repositories of significant projects I have completed!</p>
            <br/>

            <ul className="repos">
                <li>
                    <a 
                        className="profile" 
                        href={"https://github.com/charliechase96"} target="blank"
                    >
                        My GitHub Profile
                    </a>
                </li>
                <li className="linkedin">
                    <a
                        href={"https://www.linkedin.com/in/charliechasegray/"}
                        target="blank"
                    >
                        My LinkedIn Profile
                    </a>
                </li>
                {repos.map(repo => (
                    <li key={repo.name}>
                        <a href={repo.url} target="blank">{repo.description}</a>
                    </li>
                ))}
            </ul>
            <br/>
            <Footer />
        </div>
    )
}

export default Projects;