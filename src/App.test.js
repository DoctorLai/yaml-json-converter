import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YAML ↔ JSON Converter', () => {
  render(<App />);
  const linkElement = screen.getByText(/YAML ↔ JSON Converter/i);
  expect(linkElement).toBeInTheDocument();
});
