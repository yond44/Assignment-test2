import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders React Axios example - netlify 11/06/2022 ', async () => {
    render(<App />);
    expect(screen.queryByText('React Axios example - netlify 11/06/2022')).not.toBe(null);
    expect(screen.getAllByText('React Axios example - netlify 11/06/2022').length).toBe(1);

  });