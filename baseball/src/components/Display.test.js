import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

import Display from './Display';

describe('<Display />', () => {
    it('should show "0 balls and 0 strikes" if none of the buttons clicked', () => {
        const count = {
            balls:0,
            strikes:0
        }
        
        const {getByTestId} = render(<Display count={count}/>);

        const renderedBall = getByTestId(/ball/i)
        // const renderedStrike = getAllByTestId(/strike/i)[0]
        // const actual = renderedBall.textContent + ' balls'
        console.log('count balls ',count.balls)
        // console.log('rendered ball ', renderedBall.textContent )
        expect(renderedBall.textContent).toBe(`${count.balls}`)
        
        // expect(renderedStrike.textContent).toBe(`${count.strikes}`)
    })
})
