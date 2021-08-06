import React from 'react'
import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"



describe('testing <RealExampleref/> ', () => {
    
    const wrapper = shallow(<RealExampleRef/>)
    
    test('should  match snapshot ', () => {
        
        expect(wrapper).toMatchSnapshot()
        expect( wrapper.find("MultipleCustomHooks").exists() ).toBe(false)

    })
    
    test('should show the component <MultipleCustomHooks/>', () => {
        
        wrapper.find("button").simulate("click")

        expect( wrapper.find("MultipleCustomHooks").exists() ).toBe(true)

    })
    
})
