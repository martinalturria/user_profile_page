import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ContactForm from "@/views/ContactForm/ContactForm";

describe("ContactForm", () => {
    it("displays success message on successful form submission", () => {
        const { getByLabelText, getByText } = render(<ContactForm />);
        fireEvent.change(getByLabelText("Nombre"), {
            target: { value: "Juan" },
        });
        fireEvent.change(getByLabelText("Email"), {
            target: { value: "juan@example.com" },
        });
        fireEvent.change(getByLabelText("Mensaje"), {
            target: { value: "Hola, este es un mensaje." },
        });
        fireEvent.click(getByText("Enviar"));
        expect(getByText("Mensaje enviado con éxito!")).toBeInTheDocument();
    });

    it("disables the submit button until the form is valid", () => {
        const { getByLabelText, getByText } = render(<ContactForm />);
        const submitButton = getByText("Enviar");
        expect(submitButton).toBeDisabled();
        fireEvent.change(getByLabelText("Nombre"), {
            target: { value: "Juan" },
        });
        fireEvent.change(getByLabelText("Email"), {
            target: { value: "juan@example.com" },
        });
        fireEvent.change(getByLabelText("Mensaje"), {
            target: { value: "Hola, este es un mensaje." },
        });
        expect(submitButton).not.toBeDisabled();
    });
});
