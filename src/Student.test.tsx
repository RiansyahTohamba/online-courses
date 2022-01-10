import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {Student} from './Student';

test('renders a name', ()=>{
    render(<Student name='Riansyah'/>);
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveTextContent("Name is Riansyah");
    expect(divElement).toHaveAttribute("role","contentinfo");

});