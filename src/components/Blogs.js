import React from "react";
import Footer from "./Footer";
import Socials from "./Socials";

function Blogs() {

    const blogs = [
        {   name: "blog1",
            url: "https://medium.com/@charliechasegray/map-a-beginners-guide-to-js-array-methods-e55024733ac4",
            description: `Array.prototype.map(): A Beginner's Guide to JavaScript Array Methods`},
        {   name: "blog2",
            url: "https://medium.com/@charliechasegray/all-about-state-react-jss-usestate-hook-df90e8149e19",
            description: `All About State: React.js's useState Hook`}
    ];
    return (
        <div className="bloglist">
            <h1>My Blogs</h1>
            <p className="blogs-p">Below is a list of my blogs I have written on various software development topics!</p>
            <br/>
            <ul className="blogs">
                {blogs.map(blog => (
                    <>
                        <li className="blog-li" key={blog.name}>
                            <a 
                                href={blog.url} 
                                target="blank"
                            >
                                {blog.description}
                            </a>
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

export default Blogs;