import { act } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos"



describe('testing <TodoApp/>', () => {
    
    const wrapper = shallow ( <TodoApp/>)

    Storage.prototype.setItem = jest.fn()

    test('should match snapshot', () => {

        expect (wrapper).toMatchSnapshot
        
    })

    test('should add a ToDo', () => {

        const wrapper = mount(<TodoApp/>);
        act(()=>{
            
            wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[0])
            wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[1])
        })

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (2)") //should expect 2 elements "TodoApp ({todos.length})""
    expect (localStorage.setItem).toHaveBeenCalledTimes(2)   
        
    })
    
    test('should delete a TODO', () => {
        
        wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[0]);
        wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);


        expect(wrapper.find("h1").text().trim()).toBe("TodoApp (0)")
    
    })
    
    
    
})
