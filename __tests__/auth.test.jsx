import React from 'react'
import { render, screen } from '@testing-library/react'
import FormLogin from '../components/UI/organisms/FormLogin'
import FormRegister from '../components/UI/organisms/FormRegister'
import LupaPassword from '../components/UI/template/LupaPassword'
import { store } from '../components/utils/redux/store'
import { Provider } from 'react-redux';

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe('Login', () => {
  it('renders a login form', () => {
    render(<FormLogin />, {
        wrapper: Wrapper
    })

    expect(screen.getByText(/Selamat Datang,/i)).toHaveTextContent('Selamat Datang,')
  })
})

describe('register', () => {
  it('renders a register form', () => {
    render(<FormRegister />, {
        wrapper: Wrapper
    })

    expect(screen.getByText(/Daftar Akun,/i)).toHaveTextContent('Daftar Akun,')
  })
})

describe('lupa password', () => {
  it('renders a lupa password form', () => {
    render(<LupaPassword />, {
        wrapper: Wrapper
    })

    expect(screen.getByText(/Reset password,/i)).toHaveTextContent('Reset password,')
  })
})