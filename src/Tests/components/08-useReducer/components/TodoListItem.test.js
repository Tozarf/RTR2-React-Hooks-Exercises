import React from 'react'
import { shallow } from 'enzyme'
import "@testing-library/jest-dom"
import { TodoListItem } from '../../../../components/08-useReducer/components/TodoListItem'

import { demoTodos } from "../../../fixtures/demoTodos"


describe('testing <TodoListItem/>', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const [todo1]= demoTodos
    const wrapper = shallow(
        <TodoListItem todo={todo1} i={0} handleDelete={handleDelete} handleToggle={handleToggle}/>)
        
    test('should match snapshot', () => {

        expect(wrapper).toMatchSnapshot()   
    })
    test('should call handleDelete func', () => {
        

        wrapper.find("button").simulate("click")

        expect ( handleDelete ).toHaveBeenCalledWith(todo1.id)

    })
    test('should call handleToggle func', () => {
        
        wrapper.find("p").simulate("click")

        expect( handleToggle ).toBeCalledWith(todo1.id)

    })

    test('should show the text correctly', () => {
        
        const text = wrapper.find("p")
        expect(text.text().trim()).toEqual(`1. ${todo1.desc}`)


    })
    test('should have complete className if TODO.done=true', () => {
        
        todo1.done=true
        const wrapper = shallow(
            <TodoListItem todo={todo1}/>)
        
        expect(wrapper.find("p").hasClass("complete")).toBe(true)

    })

    

    
    
})
