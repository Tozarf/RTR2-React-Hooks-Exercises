import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from 'enzyme'
import { TodoList } from '../../../../components/08-useReducer/components/TodoList'
import { demoTodos } from '../../../fixtures/demoTodos'

describe('testing <TodoList/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrapper = shallow(
        <TodoList
        todos={demoTodos} 
        handleDelete={handleDelete} 
        handleToggle={handleToggle}
        />
    )

    test('should match snapshot', () => {

        expect(wrapper).toMatchSnapshot()
        
    })
    
    test('should have 2 <TodoListItem/>', () => {

        const itemsAmount= wrapper.find("TodoListItem").length


        expect(itemsAmount).toBe(demoTodos.length)
        
    })
    
    
})
