
import "@testing-library/jest-dom"
import {useForm} from "../../hooks/useForm"
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from "enzyme"
import { FormWithCustomHook } from "../../components/02-useEffect/FormWithCustomHook"

describe('Testing useForm ', () => {

    const initialForm = {
        name : "fausto",
        email: "fztjuni@gmail.com"
    }

    
    
    
    test('should return a form by default', () => {
        
        const {result} = renderHook(()=>useForm(initialForm))
        const [value,handleInputChange, reset] = result.current
        

        expect(value).toEqual(initialForm)
        expect(typeof handleInputChange).toBe("function")
        expect(typeof reset).toBe("function")

    })
    
    test('should change the form value', () => {
        const {result} = renderHook(()=>useForm(initialForm))
        const [,handleInputChange] = result.current
        const testingvalue = "Fito"
        const testingResult= {
            ...initialForm,
            name : "Fito"
        }
        act(()=>{
            handleInputChange({
                target:{
                    name : "name",
                    value: testingvalue
                }
            });
        })
        const [value] = result.current
        

        expect ( value ).toEqual(testingResult)

    })

    test('should reset de form to the initialForm value', () => {
        const {result} = renderHook(()=>useForm(initialForm))
        const [,handleInputChange,reset] = result.current
        const testingvalue = "Fito"
        const testingResult= {
            ...initialForm,
            name : "Fito"
        }
        act(()=>{
            handleInputChange({
                target:{
                    name : "name",
                    value: testingvalue
                }
            });
        })
        const [value] = result.current
        
        act(()=>{
            reset();
        })
        const [value2] = result.current
        

        expect( value2 ).toEqual(initialForm)
        

        
    })
    
    
})
