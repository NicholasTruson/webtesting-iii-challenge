// Test away!

// IMPORTS

import React from "react";
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from './Display'

// DISPLAY TESTS

describe('<Display />', ()=>{

// DISPLAYS IF GATE IS OPEN/CLOSED & LOCKED/UNLOCKED

test('it defaults to open and unlocked', () => {

const { getByText } = render(<Display />);
   getByText(/unlocked/i);
    getByText(/open/i);
 });

// DISPLAYS CLOSED IF THE CLOSED PROP IS TRUE & OPEN IF OTHERWISE

it('displays red-led when closed', () => {
    const component = render(<Display closed={true} locked={false}/>)
        const displayclosed = component.getByText('Closed')
            expect(displayclosed).toHaveClass('red-led')
})

/// GREEN LED WHEN

it('displays green-led while open', () => {
    const component = render(<Display closed={false} locked={false}/>)
        const displayopen = component.getByText('Open')
            expect(displayopen).toHaveClass('green-led')
})

// DISPLAYS LOCKED IF THE LOCKED PROP IS TRUE & UNLOCKED IF OTHERWISE

it('displays locked while locked', () => {
    const component = render(<Display closed={true} locked={true}/>)
        component.getByText('Locked')
})

it('displays unlocked while unlocked', () => {
    const component = render(<Display closed={true} locked={false}/>)
        component.getByText('Unlocked')
})

// WHEN LOCKED/CLOSED = RED-LED CLASS

it('displays red-led while locked', () => {
    const component = render(<Display closed={true} locked={true}/>)
        const display = component.getByText('Locked')
            expect(display).toHaveClass('red-led')
})

// WHEN UNLOCKED/OPEN = GREEN-LED CLASS

it('displays green-led while unlocked', () => {
    const component = render(<Display closed={true} locked={false}/>)
        const displaygreen = component.getByText('Unlocked')
            expect(displaygreen).toHaveClass('green-led')
})});