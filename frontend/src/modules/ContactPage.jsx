import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { BsFillEnvelopeHeartFill } from "react-icons/bs";

export const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [animal, setAnimal] = useState('');
    const [services, setServices] = useState([]);
    const [timePreference, setTimePreference] = useState(''); // State for time preference
    const redirect = useNavigate();

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setServices((prevServices) =>
            checked ? [...prevServices, value] : prevServices.filter((service) => service !== value)
        );
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_name: name,
            to_email: email,
            message: message,
            favourite_animal: animal,
            selected_services: services.join(', '),
            time_preference: timePreference,
        };

        emailjs.send('service_ko6d1bg', 'template_as7bb1e', templateParams, 'vEbgBjsp7NxikpMnc')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                redirect('/contactSuccess');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send your email. Please try again later.');
            });
    };

    return (
        <>
            <h2>Let's keep in touch!</h2>
            <article>
                <p>Now that you've read about me, I'd like to know more about you! Please fill out this form with the given prompts, and I'll reach out if you'd like to stay in touch. </p>
                <p id="asteriskWarning">Fields that have asterisks next to them are required for submission.</p>
                <form onSubmit={sendEmail}>
                    <fieldset>
                        <legend>Your Information</legend>
                        <label htmlFor="name" className="required">What's your first and last name?</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="required"
                            placeholder="Firstname Lastname"
                            required
                            aria-required="true"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email" className="required">Your email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="required"
                            placeholder="name@email.com"
                            required
                            aria-required="true"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="message" className="required">Leave anything you'd like to tell me below!</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Any feedback or questions?"
                            minLength="3"
                            maxLength="500"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </fieldset>

                    <fieldset>
                        <legend>More about you...</legend>
                        <label htmlFor="animal">What's your favourite animal?</label>
                        <select
                            name="animal"
                            id="animal"
                            value={animal}
                            onChange={(e) => setAnimal(e.target.value)}
                        >
                            <option value="">Select an animal</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Goose">Goose</option>
                            <option value="Otter">Otter</option>
                            <option value="Capybara">Capybara</option>
                            <option value="Dinosaur">Dinosaur</option>
                            <option value="Koala">Koala</option>
                            <option value="Moose">Moose</option>
                            <option value="Penguin">Penguin</option>
                            <option value="Other">Other</option>
                        </select>

                        <p>Are you a morning or night person?</p>
                        <div>
                            <label htmlFor="early-bird">
                                <input
                                    type="radio"
                                    id="early-bird"
                                    name="timePreference"
                                    value="Early bird"
                                    onChange={(e) => setTimePreference(e.target.value)}
                                />
                                Early bird
                            </label>
                            <label htmlFor="night-owl">
                                <input
                                    type="radio"
                                    id="night-owl"
                                    name="timePreference"
                                    value="Night owl"
                                    onChange={(e) => setTimePreference(e.target.value)}
                                />
                                Night owl
                            </label>
                        </div>
                        
                        <p>What services do you use?</p>
                        <div>
                            <label htmlFor="ig">
                                <input
                                    type="checkbox"
                                    name="services"
                                    id="ig"
                                    value="Instagram"
                                    onChange={handleCheckboxChange}
                                /> Instagram
                            </label>
                            <label htmlFor="x">
                                <input
                                    type="checkbox"
                                    name="services"
                                    id="x"
                                    value="X"
                                    onChange={handleCheckboxChange}
                                /> X
                            </label>
                            <label htmlFor="fb">
                                <input
                                    type="checkbox"
                                    name="services"
                                    id="fb"
                                    value="Facebook"
                                    onChange={handleCheckboxChange}
                                /> Facebook
                            </label>
                            <label htmlFor="yt">
                                <input
                                    type="checkbox"
                                    name="services"
                                    id="yt"
                                    value="YouTube"
                                    onChange={handleCheckboxChange}
                                /> YouTube
                            </label>
                        </div>
                    </fieldset>

                    <button type="submit" id="submit" name="submitted">Submit<br></br><BsFillEnvelopeHeartFill /></button>
                </form>
            </article>
        </>
    );
};

export default ContactMe;
