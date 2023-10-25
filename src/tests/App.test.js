import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
// import { HttpResponse, http, delay } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from '../mocks/handlers'
import { setupStore } from '../store/store'
import { Provider } from 'react-redux'

const server = setupServer(...handlers)

// console.log(server.listHandlers())
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('Login', async () => {
  const store = setupStore()
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
  const emailField = screen.getByLabelText('Name')
  fireEvent.input(emailField, { target: { value: 'Kovalev Aleksandr' } })
  const passwordField = screen.getByLabelText('Password')
  fireEvent.input(passwordField, { target: { value: '123456789' } })
  const button = screen.getByRole('button')
  fireEvent.click(button)

  const about = await screen.findByText('About')
  expect(about).toBeInTheDocument()
})
