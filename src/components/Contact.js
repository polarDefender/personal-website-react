import React, {useState} from "react";

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        fetch("https://formspree.io/f/mbjnrdvo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        setFormState({
            name: '',
            company: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
        setIsSubmitted(true);
    };

    function handleChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    return (
        <div className="contact">
            <h1>Let's start a project together!</h1>
            <p>For all inquiries, or to schedule an interview, please fill out the form below:</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>*Full Name:</label>
                <input 
                    required 
                    name="name" 
                    type="text" 
                    placeholder="Name..."
                    value={formState.name}
                    onChange={handleChange}
                >
                </input>
                <br/>
                <label>Company (Optional):</label>
                <input
                    name="company"
                    type="text"
                    placeholder="Company..."
                    value={formState.company}
                    onChange={handleChange}
                >                
                </input>
                <br/>
                <label>*Email:</label>
                <input
                    required
                    name="email"
                    type="text"
                    placeholder="Email..."
                    value={formState.email}
                    onChange={handleChange}
                >
                </input>
                <br/>
                <label>*Phone:</label>
                <input 
                    required
                    name="phone"
                    type="text"
                    placeholder="Phone..."
                    value={formState.phone}
                    onChange={handleChange}
                >
                </input>
                <br/>
                <label>*Subject:</label>
                <input
                    required
                    name="subject"
                    type="text"
                    placeholder="Subject..."
                    value={formState.subject}
                    onChange={handleChange}
                >
                </input>
                <br/>
                <label>*Message:</label>
                <textarea
                    required
                    name="message"
                    type="text"
                    placeholder="Message..."
                    value={formState.message}
                    onChange={handleChange}
                >
                </textarea>
                <button 
                    type="submit" 
                    className="submit-button"
                >
                    Submit
                </button>
            </form>
            {isSubmitted ? <p>Thank you for your submission! I will be in touch shortly!</p> : null}
            <br/>
            <div className="contact-logo">
                <img src="https://i.imgur.com/EULjniJ.png" alt="Charlie Chase Productions Logo" />
            </div>
        </div>
    )
}

export default Contact;