// Test away!

// IMPORTS

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Controls from './Controls'

// CONTROLS TEST

describe('<Control />', () => {

// BUTTONS TOGGLE CLOSED & LOCKED STATES

it('renders btn to toggle closed and locked states', ()=>{
    const { getByText } = render(<Controls/>)
        getByText(/close gate/i)
            getByText(/lock gate/i)
  })

// BUTTONS TEXT CHANGES TO REFLECT STATE

it('renders btn text change based on state change', ()=>{
    const { getByText } = render(<Controls/>)
        getByText(/close gate/i)
            getByText(/lock gate/i)
  })

// CLOSED TOGGLE IS DISABLED IF GATE IS LOCKED

it('disables open/close btn when locked', ()=>{
    const {getByText} = render(<Controls locked={true} />)
        const btn = getByText(/close gate/i)
            expect(btn).toBeDisabled()
})

// LOCKED TOGGLE BUTTON IS DISABLED IF GATE IS OPEN

it('disbles lock/unlock btn when open', ()=>{
    const { getByText } = render(<Controls closed={false} />)
        const btn = getByText(/lock gate/i)
            expect(btn).toBeDisabled();
  })});