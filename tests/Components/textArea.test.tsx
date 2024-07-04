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
                error=""
            />
        );
        expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
    });

    it("calls onChange when typing", () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <TextArea
                label="Mensaje"
                name="message"
                value=""
                onChange={handleChange}
                error=""
            />
        );
        fireEvent.change(getByLabelText("Mensaje"), {
            target: { value: "Nuevo mensaje" },
        });
        expect(handleChange).toHaveBeenCalled();
    });
});
