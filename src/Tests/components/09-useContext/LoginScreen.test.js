import { mount } from 'enzyme'
import React from 'react'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'




describe('Testing <LoginScreen/>', () => {
    const setUser = jest.fn()
    const wrapper = mount(
        <UserContext.Provider value = {{
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>)

    
    test('should match snapshot ', () => {
        

        expect( wrapper ).toMatchSnapshot()

    })

    test('should execute setUser', () => {
        
        wrapper.find("button").prop("onClick")();

        expect (setUser).toHaveBeenCalledWith({
            id:1909,
            name: "Fausto"
        })
       
    })
    
    
})
