import { shallow } from 'enzyme'
import React from 'react'
import { TodoAdd } from '../../../../components/08-useReducer/components/TodoAdd'



describe('testing <TodoAdd/>', () => {

    const handleAddToDo = jest.fn()

    const wrapper = shallow(<TodoAdd handleAddToDo={handleAddToDo}/>)

    test('should match snapshot', () => {
        
        expect(wrapper).toMatchSnapshot()
        
    })
    
    test('should not call handleAddToDo', () => {
        
        const formSubmit = wrapper.find("form").prop("onSubmit")

        formSubmit({preventDefault (){}})

        expect(handleAddToDo).toHaveBeenCalledTimes(0)

    })

    test('should not call handleAddToDo', () => {
        
        const value = "Learn Express"
        
        wrapper.find("input").simulate("change",{
            target:{
            value:value,
            name:"description"
            }
        });

        const formSubmit = wrapper.find("form").prop("onSubmit")

        formSubmit({preventDefault (){}})

        expect(handleAddToDo).toHaveBeenCalledTimes(1)
        expect(handleAddToDo).toHaveBeenCalledWith (expect.any(Object))
        expect(handleAddToDo).toHaveBeenCalledWith ({
            id : expect.any(Number),
            desc : value,
            done: false
        })
        expect ( wrapper.find("input").prop("value")).toBe("")

    })

})
