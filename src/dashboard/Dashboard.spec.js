// Test away

// IMPORTS

import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard.js";

// SHOWS THE CONTROLS AND DISPLAY

describe('Dashboard test', () => {
    it('should render controls & display',() => {
        const { getByText } = render(<Dashboard />)
        getByText(/unlocked/i)
        getByText(/lock gate/i)
        getByText(/open/i)
        getByText(/close gate/i)
    })
})

