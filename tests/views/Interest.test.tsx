import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Interests from "@/views/Interests/Interests";

describe("Interests", () => {
    it("renders the interests list", () => {
        render(<Interests />);
        expect(screen.getByText("Intereses")).toBeInTheDocument();
        expect(screen.getByText("Interés 1")).toBeInTheDocument();
        expect(screen.getByText("Interés 2")).toBeInTheDocument();
        expect(screen.getByText("Interés 3")).toBeInTheDocument();
    });
});
