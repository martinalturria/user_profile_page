import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "@/views/About/About";

describe("About", () => {
    it("renders the about section with description", () => {
        render(<About />);
        expect(
            screen.getByText("Este es un texto de ejemplo sobre mí.")
        ).toBeInTheDocument();
    });
});
