import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import App from '../App'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('strike button', () => {

        const container = document.body
        const { getByText } = render(<App />)

        const button = getByText('Strike');

        for (let j = 1; j < 4; j++) {


            fireEvent.click(button);
            if (j >= 3) {
                expect(getByTestId(container, /strike/i).textContent).toBe(`0`)
            }
            else {
                expect(getByTestId(container, /strike/i).textContent).toBe(`${j}`)
            }
        }
    })

    it('Ball button', () => {

        const container = document.body
        const { getByText } = render(<App />)

        const button = getByText('Ball');

        for (let j = 1; j < 5; j++) {


            fireEvent.click(button);
            if (j >= 4) {
                expect(getByTestId(container, /ball/i).textContent).toBe(`0`)
            }
            else {
                expect(getByTestId(container, /ball/i).textContent).toBe(`${j}`)
            }
        }
    })

    it('Foul button', () => {

        const container = document.body
        const { getByText } = render(<App />)

        const button = getByText('Foul');

        for (let j = 1; j < 3; j++) {


            fireEvent.click(button);
            if (j >= 3) {
                expect(getByTestId(container, /strike/i).textContent).toBe(`2`)
            }
            else {
                expect(getByTestId(container, /strike/i).textContent).toBe(`${j}`)
            }
            
            
        }
    })

    it('Hit button', () => {

        const container = document.body
        const { getByText } = render(<App />)

        const button = getByText('Hit');
        fireEvent.click(button);
        expect(getByTestId(container, /strike/i).textContent).toBe(`0`)
        expect(getByTestId(container, /ball/i).textContent).toBe(`0`)

    })
})