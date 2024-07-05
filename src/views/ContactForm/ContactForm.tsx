import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { ContactFormState } from "../../interfaces/contactFormState";
import InputField from "@/components/Form/InputField/InputField";
import TextArea from "@/components/Form/TextArea/TextArea";
import SubmitButton from "@/components/Form/SubmitButton/SubmitButton";
import ConfirmModal from "@/components/Form/ConfirmModal/ConfirmModal";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [form, errors, handleChange, isFormValid, resetForm] =
        useForm<ContactFormState>({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid()) {
            ConfirmModal({
                title: "¡Mensaje enviado con éxito!",
                text: "Gracias por contactarnos. Te responderemos a la brevedad.",
                icon: "success",
                confirmButtonText: "Cerrar",
            });
            setSuccess(true);
            resetForm();
        }
    };

    return (
        <section className={styles.contactForm}>
            <h2 className={styles.heading}>Contacto</h2>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <InputField
                    label="Nombre"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    reset={success}
                />
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    reset={success}
                />
                <TextArea
                    label="Mensaje"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    reset={success}
                />
                <SubmitButton disabled={!isFormValid()}>Enviar</SubmitButton>
            </form>
        </section>
    );
};

export default ContactForm;
