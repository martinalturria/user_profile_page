import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Interests from "@/views/Interests/Interests";
import { interests } from "@/data/data";

describe("Interests", () => {
    it("renders the interests list", () => {
        render(<Interests />);
        expect(screen.getByText("Intereses")).toBeInTheDocument();
        interests.forEach((interest) => {
            expect(screen.getByText(interest)).toBeInTheDocument();
        });
    });
});
