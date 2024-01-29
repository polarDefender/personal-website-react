import React from "react";
import Footer from "./Footer";
import Socials from "./Socials";

function Pricing() {
    return (
        <div className="price-list">
            <div className="pricing-intro">
                <h1>Project Pricing</h1>
                <p>The following is my current tiered pricing system for projects. While this is a general guide to how I price my services, please note that each project and its requirements will vary, and adjustments may need to occur based on different factors. For a personalized project estimate, fill out my contact form and I will be happy to help!</p>
            </div>
            <div className="pre-booking-discount">
                <div className="discount-titles">
                    <h1 className="pre-booking-title">Pre-Booking Discount</h1>
                    <h1 className="discount">20% Off Total Cost Until April 1, 2024</h1>
                </div>
                <p>While attending to some personal projects, I will not actively be taking clients until April 1, 2024. With that said, anyone who pre-books their project with me (deposit paid and contract signed) until April 1 will receive 20% off their total project cost!</p>
            </div>
            <div className="basic">
                <div className="tier-and-price">
                    <h1 className="tier">Basic</h1>
                    <h1 className="pricing">Estimate: $500-$1500</h1>
                </div>
                <ul className="details">
                    <li>$25 per hour</li>
                    <li>20-60 hours</li>
                    <li>4-8 pages</li>
                </ul>
            </div>
            <div className="plus">
                <div className="tier-and-price">
                    <h1 className="tier">Plus</h1>
                    <h1 className="pricing">Estimate: $1500-$3000</h1>
                </div>
                <ul className="details">
                    <li>$25 per hour</li>
                    <li>60-120 hours</li>
                    <li>4-8 pages</li>
                </ul>
            </div>
            <div className="elite">
                <div className="tier-and-price">
                    <h1 className="tier">Elite</h1>
                    <h1 className="pricing">Estimate: $3000-$6000</h1>
                </div>
                <ul className="details">
                    <li>$25 per hour</li>
                    <li>120-240 hours</li>
                    <li>4-8 pages</li>
                </ul>
            </div>
            <div className="additional-services">
                <h1>Additional Services</h1>
                <ul className="details">
                    <li className="header-li">Project Maintenance</li>
                        <ul>
                            <li>$25 per month</li>
                            <li>Regular maintenance</li>
                            <li>Bug fixes</li>
                            <li>Functionality updates</li>
                            <li className="last-li">Keeping the headache away from you!</li>
                        </ul>
                </ul>
            </div>
            <Footer />
            <Socials />
        </div>
    )
}

export default Pricing;