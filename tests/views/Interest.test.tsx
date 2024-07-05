import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { interests } from "@/data/data";
import Interests from "@/views/Interests/Interests";

describe("Interests", () => {
    it("renders the interests list", () => {
        render(<Interests />);
        expect(screen.getByText("Intereses")).toBeInTheDocument();
        interests.forEach((interest) => {
            expect(screen.getByText(interest)).toBeInTheDocument();
        });
    });
});
