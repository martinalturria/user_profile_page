import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "@/views/About/About";
import { aboutText } from "@/data/data";

describe("About", () => {
    it("renders the about section with description", () => {
        render(<About />);
        expect(screen.getByText(aboutText)).toBeInTheDocument();
    });
});
