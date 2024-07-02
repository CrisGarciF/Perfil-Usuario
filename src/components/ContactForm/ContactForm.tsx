'use client'

import styles from './ContactForm.module.css'
import { useState } from 'react';
import { FormEvent } from 'react';


const ContactForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    }

    return (
        <section className={styles.contact} >
            <h2>Contacto</h2>
            {submitted ? ( <p className={styles.message}>Mensaje Enviado</p> )
            : (
                <form onSubmit={handleSubmit}>
                    <label>Nombre:
                    <input type="text" name='name' value={formData.name} placeholder='Ej: Luis' required onChange={handleChange}/>
                    </label>
                    
                    <label > Email:
                    <input type="email" name='email' value={formData.email} placeholder='example@gmail.com' required onChange={handleChange}/> 
                    </label>
                    
                    <label> Mensaje: 
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    
                    <button type='submit'>Enviar</button>
                </form>
            )}
        </section>
    )
};

export default ContactForm;
