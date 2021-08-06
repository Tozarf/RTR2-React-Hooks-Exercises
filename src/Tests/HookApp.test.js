import { shallow } from 'enzyme'
import React from 'react'
import HookApp from "../HookApp"

describe('testing <HookApp/>', () => {

    test('should match snapshot', () => {
        
        const wrapper= shallow(<HookApp/>)

        expect(wrapper).toMatchSnapshot()

    })
    
    
})
