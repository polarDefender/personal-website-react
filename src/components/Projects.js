import React from "react";

function Projects() {

    const repos = [
        {name: "repo1", url: "https://github.com/charliechase96/Phase-1-Project", description: "Kitten image collection sorter (Vanilla JavaScript)"},
        {name: "repo2", url: "https://github.com/charliechase96/Phase-2-Project", description: "Kitten image collection sorter (React)"}
    ];

    return (
        <div className="portfolio">
            <h1>Portfolio Projects</h1>
            <p className="portfolio-p">Below is a list of significant portfolio projects I have completed, along with links to their repositories.</p>
            <br/>

            <ul className="repos">
                <a href={"https://github.com/charliechase96"} target="blank">My GitHub Profile</a>
                <br/>
                {repos.map(repo => (
                    <li key={repo.name}>
                        <a href={repo.url} target="blank">{repo.description}</a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Projects;