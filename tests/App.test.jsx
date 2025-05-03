import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders YAML ↔ JSON Converter', () => {
  render(<App />);
  const linkElement = screen.getByText(/YAML ↔ JSON Converter/i);
  expect(linkElement).to.exist;
});
