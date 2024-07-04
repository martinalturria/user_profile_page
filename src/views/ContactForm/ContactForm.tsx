import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { ContactFormState } from "../../interfaces/ContactFormState";

import InputField from "@/Form/InputField/InputField";
import TextArea from "@/Form/TextArea/TextArea";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [form, handleChange, resetForm] = useForm<ContactFormState>({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
        resetForm();
    };

    return (
        <section className={styles.contactForm}>
            <h2 className={styles.heading}>Contacto</h2>
            {success ? (
                <p className={styles.successMessage}>
                    Mensaje enviado con éxito!
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Nombre"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <TextArea
                        label="Mensaje"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    />
                    <button className={styles.button} type="submit">
                        Enviar
                    </button>
                </form>
            )}
        </section>
    );
};

export default ContactForm;
