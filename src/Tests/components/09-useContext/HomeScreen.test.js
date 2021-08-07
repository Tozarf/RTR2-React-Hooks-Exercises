import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen'




describe('testing <HomeScreen/>', () => {
    const user = {
        name : "Fausto",
        email : "user@example.com"
    }
    const wrapper = mount(
    <UserContext.Provider value = {{
        user
    }}>
        <HomeScreen/>
    </UserContext.Provider>
    )

    test('should match snapshot ', () => {

        expect(wrapper).toMatchSnapshot()

    })
    
})
