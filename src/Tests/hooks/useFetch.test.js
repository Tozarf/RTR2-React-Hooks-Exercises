import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"



describe('testing useFecth hook', () => {
    
    test('should bring default information', () => {
        
        const {result}= renderHook(()=>useFetch("https://www.breakingbadapi.com/api/quotes/1"));
        
        const {data, loading, error}= result.current;

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)

    });

    test('should have desired info ', async() => {
        
        const {result, waitForNextUpdate}= renderHook(()=>useFetch("https://www.breakingbadapi.com/api/quotes/1"));
        
        await waitForNextUpdate({timeout:2000})

        const {data, loading, error}= result.current;

        expect (data.length).toBe(1)
        expect( loading ).toBe(false)
        expect ( error).toBe(null)
    })

    test('should manage error ', async() => {
        
        const {result, waitForNextUpdate}= renderHook(()=>useFetch("https://reqres.in/apid/users?page=2"));
        
        await waitForNextUpdate({timeout:2000})

        const {data, loading, error}= result.current;

        expect (data).toBe(null)
        expect( loading ).toBe(false)
        expect ( error).toBe("Couldn't get data")
    })
    

})
