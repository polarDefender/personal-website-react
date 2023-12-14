import React from "react";

function Contact() {
    return (
        <div className="contact">
            <h1>Let's start a project together!</h1>
            <p>For all inquiries, or to schedule an interview, please fill out the form below:</p>
            <br/>
            <form>
                <label>*Full Name:</label>
                <input 
                    required 
                    name="name" 
                    type="text" 
                    placeholder="Name"
                >
                </input>
                <br/>
                <label>Company (Optional):</label>
                <input
                    name="company"
                    type="text"
                    placeholder="Company"
                >                
                </input>
                <br/>
                <label>*Email:</label>
                <input
                    required
                    name="email"
                    type="text"
                    placeholder="Email"
                >
                </input>
                <br/>
                <label>*Phone:</label>
                <input 
                    required
                    name="phone"
                    type="text"
                    placeholder="Phone"
                >
                </input>
                <br/>
                <label>*Subject:</label>
                <input
                    required
                    name="subject"
                    type="text"
                    placeholder="Subject"
                >
                </input>
                <br/>
                <label>*Message:</label>
                <textarea
                    required
                    name="message"
                    type="text"
                    placeholder="Message..."
                >
                </textarea>
                <button 
                    type="submit" 
                    className="submit-button"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;