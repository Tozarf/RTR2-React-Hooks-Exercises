import { shallow } from 'enzyme'
import React from 'react'
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"

import { useCounter } from '../../../hooks/useCounter'
import { useFetch } from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter') //This is how we coul mock hooks to be used below for testing



describe('Tesing <MultipleCustomHooks/>', () => {
    
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    test('should match with snapshot', () => {
        
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error: null
        })
        
        const wrapper = shallow(<MultipleCustomHooks/>)

        expect (wrapper).toMatchSnapshot();
    })
    
    test('should show information', () => {
        useFetch.mockReturnValue({
            data:[{
                author : "Fausto",
                quote : "tired af"

            }],
            loading:false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>)

        expect( wrapper.find(".alert").exists()).toBe( false )
        expect( wrapper.find(".mb-0").text().trim()).toBe( "tired af")
        expect( wrapper.find("footer").text().trim()).toBe( "Fausto")


    })
    
    
})
