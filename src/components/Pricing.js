import React from "react";
import Footer from "./Footer";
import Socials from "./Socials";

function Pricing() {
    return (
        <>
        <div className="price-list">
            <div className="pricing-intro">
                <h1>Project Pricing</h1>
                <p>The following is my current tiered pricing system for projects. While this is a general guide to how I price my services, please note that each project and its requirements will vary, and adjustments may need to occur based on different factors. For a personalized project estimate, fill out my contact form and I will be happy to help!</p>
            </div>
            <div className="basic">
                <div className="tier-and-price">
                    <h1>Basic</h1>
                    <h1>$750-$1500</h1>
                </div>
                <ul className="details">
                    <li>$25 per hour</li>
                    <li>30-60 hours</li>
                    <li>4-8 pages</li>
                </ul>
            </div>
            <div className="plus">
                <div className="tier-and-price">
                    <h1>Plus</h1>
                    <h1>$1500-$3000</h1>
                </div>
                <ul className="details">
                    <li>$25 per hour</li>
                    <li>60-120 hours</li>
                    <li>4-8 pages</li>
                </ul>
            </div>
            <div className="elite">
                <div className="tier-and-price">
                    <h1>Elite</h1>
                    <h1>$3000-$6000</h1>
                </div>
                <ul className="details">
                    <li>$25 per hour</li>
                    <li>120-240 hours</li>
                    <li>4-8 pages</li>
                </ul>
            </div>
            <Footer />
            <Socials />
        </div>
        
        </>
    )
}

export default Pricing;