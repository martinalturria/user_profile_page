import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "@/components/Form/TextArea/TextArea";

describe("TextArea", () => {
    it("renders the textarea with label", () => {
        render(
            <TextArea
                label="Mensaje"
                name="message"
                value=""
                onChange={() => {}}
            />
        );
        expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
    });

    it("displays an error message when there is an error", () => {
        const { getByText } = render(
            <TextArea
                label="Mensaje"
                name="message"
                value=""
                onChange={() => {}}
                error="Este campo es obligatorio"
            />
        );
        expect(getByText("Este campo es obligatorio")).toBeInTheDocument();
    });

    it("calls onChange when typing", () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <TextArea
                label="Mensaje"
                name="message"
                value=""
                onChange={handleChange}
            />
        );
        fireEvent.change(getByLabelText("Mensaje"), {
            target: { value: "Nuevo mensaje" },
        });
        expect(handleChange).toHaveBeenCalled();
    });
});
