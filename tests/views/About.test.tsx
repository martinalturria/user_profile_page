import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { aboutText } from "@/data/data";
import About from "@/views/About/About";

describe("About", () => {
    it("renders the about section with description", () => {
        render(<About />);
        expect(screen.getByText(aboutText)).toBeInTheDocument();
    });
});
