import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import PostSection from './components/PostSection/view.js'
import '@testing-library/jest-dom'

// exercise: fix this test
test('renders text', async () => {
  const testText = "Apapun";
 
  render(<PostSection />);

  
  const input = screen.getByTestId("input-title");

  
  userEvent.type(input, testText)

  const textElement = await screen.findByText(`Title: ${testText}`);
  expect(textElement).toBeInTheDocument();
});
