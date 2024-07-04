import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputField from "@/components/Form/InputField/InputField";

describe("InputField", () => {
    it("renders the input field with label", () => {
        render(
            <InputField
                label="Nombre"
                type="text"
                name="name"
                value=""
                onChange={() => {}}
                error=""
            />
        );
        expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    });

    it("calls onChange when typing", () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <InputField
                label="Nombre"
                type="text"
                name="name"
                value=""
                onChange={handleChange}
                error=""
            />
        );
        fireEvent.change(getByLabelText("Nombre"), {
            target: { value: "Nuevo valor" },
        });
        expect(handleChange).toHaveBeenCalled();
    });
});
