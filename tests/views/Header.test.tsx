import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "@/views/Header/Header";

describe("Header", () => {
    it("renders the profile picture and name", () => {
        render(<Header />);
        expect(screen.getByAltText("Profile Picture")).toBeInTheDocument();
        expect(screen.getByText("Martin Alturria")).toBeInTheDocument();
    });
});
