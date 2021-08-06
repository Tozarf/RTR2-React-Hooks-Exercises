import {renderHook, act} from "@testing-library/react-hooks"
import { useCounter } from "../../hooks/useCounter"

describe('testing useCounter', () => {
    
    test('should return default values', () => {
        
        const {result} = renderHook(()=>useCounter())

        expect(result.current.counter).toBe(10)
        expect( typeof result.current.increment).toBe("function")
        expect(typeof result.current.decrement).toBe("function")
        expect(typeof result.current.reset).toBe("function")
    })
    
    test('should return the counter with a value of 100', () => {
        
        const {result} = renderHook(()=>useCounter(100));

        expect(result.current.counter).toBe(100);
    
    })

    test('should increment counter in 1', () => {

        const{result} = renderHook( ()=> useCounter(100));

        const{increment}= result.current;
        act(()=>{
            increment();
        })

        const {counter} = result.current;
        expect(counter).toEqual(101)

    })
    test('should decrement counter in 1', () => {

        const{result} = renderHook( ()=> useCounter(100));

        const{decrement}= result.current;
        act(()=>{
            decrement();
        })

        const {counter} = result.current;
        expect(counter).toEqual(99)

    })
    test('should reset the counter to initial value () after increasing', () => {

        const{result} = renderHook( ()=> useCounter(100));

        const{increment,reset}= result.current;
        act(()=>{
            increment();
            reset();
        })

        const {counter} = result.current;
        expect(counter).toEqual(100)

    })
    test('should reset the counter to initial value (100) after decreasing', () => {

        const{result} = renderHook( ()=> useCounter(100));

        const{decrement,reset}= result.current;
        act(()=>{
            decrement();
            reset();
        })

        const {counter} = result.current;
        expect(counter).toEqual(100)

    })
    


})
