import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// The expect function is already provided by the '@testing-library/jest-dom' library.
// You do not need to implement it yourself. You can remove the placeholder code.
