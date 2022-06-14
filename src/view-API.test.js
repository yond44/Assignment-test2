import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import GetSection from './components/GetSection/view.js';



const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

beforeAll(() => server.listen({ 
  onUnhandledRequest: ({ method, url }) => {
    if (!url.pathname.startsWith("/greeting")) {
      throw new Error(`Unhandled ${method} request to ${url}`);
    }
  },
}));






test('renders result', async () => {
    render(<GetSection url="/greeting" />);

   

  const button = await screen.getByText('Get All');
  fireEvent.click(button)
  await waitFor(() => screen.getByRole('alert'))
  expect(screen.getByRole('alert')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
});
