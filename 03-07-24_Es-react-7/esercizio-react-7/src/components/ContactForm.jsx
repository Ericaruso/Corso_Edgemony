import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(form);
    };

    return (
        <div className={styles.contactForm}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name <span>*</span></label>
                    <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name <span>*</span></label>
                    <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Query Type <span>*</span></label>
                    <div className={styles.radioGroup}>
                        <label>
                            <input type="radio" name="queryType" value="general" checked={form.queryType === "general"} onChange={handleChange} required />
                            General Enquiry
                        </label>
                        <label>
                            <input type="radio" name="queryType" value="support" checked={form.queryType === "support"} onChange={handleChange} required />
                            Support Request
                        </label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label>
                        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                        I consent to being contacted by the team <span>*</span>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
