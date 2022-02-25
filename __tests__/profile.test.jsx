import React from 'react'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../components/utils/redux/store'
import FormProfile from '../components/UI/organisms/FormProfile'

const Wrapper = ({ children }) => {
    return(<Provider store={store}>{children}</Provider>)
}

describe('profile', () => {
    it('renders a profile form', () => {
        render(<FormProfile />, {
            wrapper: Wrapper
        })
        expect(screen.getByText(/Akun Saya/i)).toHaveTextContent('Akun Saya')
    })
})