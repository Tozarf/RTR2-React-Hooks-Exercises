import {todoReducer} from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos"


describe('testing todoReducer', () => {

    test('should return default state ', () => {
        
        const state = todoReducer(demoTodos, {})
        
        expect(state).toEqual(demoTodos)
    })
    test('should add a TODO', () => {
        
        const newTodo= {
            id: 3,
            desc : "Learn Express",
            done : false
        }

        

        const action = {
            type:"add",
            payload:newTodo

        }
        const state = todoReducer(demoTodos, action)


        expect(state.length).toBe(3)
        expect ( state ).toEqual([...demoTodos,newTodo])

        
        
    })

    test('should delete a TODO', () => {

        
        const action = { type:"delete", payload: 1}
        const state = todoReducer(demoTodos, action)
        
        expect(state).toEqual([{
            id : 2,
            desc : "Learn React",
            done : false
        }])
    })
    
    test('should TOGGLE a TODO', () => {

        
        const action = { type:"toggle", payload: 1}
        const [first] = todoReducer(demoTodos, action)
        
        expect(first.done).toBe(true)
    })
    
    
})
