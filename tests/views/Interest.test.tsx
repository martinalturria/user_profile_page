import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Interests from "@/views/Interests/Interests";

describe("Interests", () => {
    it("renders the interests list", () => {
        render(<Interests />);
        expect(screen.getByText("Intereses")).toBeInTheDocument();
        expect(screen.getByText("Programación")).toBeInTheDocument();
        expect(screen.getByText("Leer")).toBeInTheDocument();
        expect(screen.getByText("Deportes")).toBeInTheDocument();
    });
});
