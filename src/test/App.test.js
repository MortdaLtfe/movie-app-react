import { render, screen } from '@testing-library/react';
import App from './App';

test('App Testing', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
