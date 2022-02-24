import React from 'react'
import { fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react'
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

  test('input email with invalid format', () => {
    render(<FormLogin />, {
      wrapper: Wrapper
    })

    fireEvent.change(screen.getByPlaceholderText('e-mail'), {
      target: {
        value: 'dsdsd@.com'
      }
    })

    expect(screen.getByText(/format email tidak valid/i)).toHaveTextContent('format email tidak valid')
  })

  test('input password minimal 6 character', () => {
    render(<FormLogin />, {
      wrapper: Wrapper
    })

    fireEvent.change(screen.getByPlaceholderText('password'), {
      target: {
        value: '123'
      }
    })

    expect(screen.getByText(/password minimal 6 karakter/i)).toHaveTextContent('password minimal 6 karakter')
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