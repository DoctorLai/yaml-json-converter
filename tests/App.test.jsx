import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import App from '../src/App';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the converter title', () => {
    render(<App />);
    expect(screen.getByText(/YAML ↔ JSON Converter/i)).toBeInTheDocument();
  });

  it('converts YAML to JSON when the convert button is clicked', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('YAML'), {
      target: { value: 'name: Ryan\nage: 10' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Convert to JSON/i }));
    const json = screen.getByLabelText('JSON');
    expect(json.value).toContain('"name": "Ryan"');
    expect(json.value).toContain('"age": 10');
  });

  it('converts JSON to YAML when the convert button is clicked', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('JSON'), {
      target: { value: '{"name":"Ryan","age":10}' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Convert to YAML/i }));
    const yaml = screen.getByLabelText('YAML');
    expect(yaml.value).toContain('name: Ryan');
    expect(yaml.value).toContain('age: 10');
  });

  it('alerts on invalid YAML', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('YAML'), {
      target: { value: '"unterminated' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Convert to JSON/i }));
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining('YAML parse error')
    );
  });

  it('alerts on invalid JSON', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('JSON'), {
      target: { value: '{ name: Ryan, ' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Convert to YAML/i }));
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining('JSON parse error')
    );
  });

  it('clears both inputs', () => {
    render(<App />);
    const yaml = screen.getByLabelText('YAML');
    const json = screen.getByLabelText('JSON');
    fireEvent.change(yaml, { target: { value: 'a: 1' } });
    fireEvent.change(json, { target: { value: '{"a":1}' } });
    fireEvent.click(screen.getByRole('button', { name: /Clear/i }));
    expect(yaml.value).toBe('');
    expect(json.value).toBe('');
  });

  it('toggles dark mode and persists the choice', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Dark Mode/i }));
    expect(localStorage.getItem('darkMode')).toBe('true');
    expect(
      screen.getByRole('button', { name: /Light Mode/i })
    ).toBeInTheDocument();
  });

  it('changes the interface language and persists it', () => {
    render(<App />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'fr' },
    });
    expect(localStorage.getItem('language')).toBe('fr');
    expect(screen.getByText(/Convertisseur YAML/i)).toBeInTheDocument();
  });

  it('inserts two spaces when Tab is pressed in the YAML textarea', () => {
    render(<App />);
    const yaml = screen.getByLabelText('YAML');
    fireEvent.keyDown(yaml, { key: 'Tab' });
    expect(yaml.value).toBe('  ');
  });

  it('inserts two spaces when Tab is pressed in the JSON textarea', () => {
    render(<App />);
    const json = screen.getByLabelText('JSON');
    fireEvent.keyDown(json, { key: 'Tab' });
    expect(json.value).toBe('  ');
  });

  it('ignores non-Tab key presses', () => {
    render(<App />);
    const yaml = screen.getByLabelText('YAML');
    fireEvent.keyDown(yaml, { key: 'a' });
    expect(yaml.value).toBe('');
  });

  it('copies YAML to the clipboard and shows feedback', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });
    render(<App />);
    fireEvent.change(screen.getByLabelText('YAML'), {
      target: { value: 'a: 1' },
    });
    fireEvent.click(screen.getAllByRole('button', { name: /copy/i })[0]);
    expect(writeText).toHaveBeenCalledWith('a: 1');
    expect(await screen.findByText(/Copied!/i)).toBeInTheDocument();
  });

  it('alerts when clipboard copy fails', async () => {
    const writeText = vi.fn().mockRejectedValue(new Error('denied'));
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });
    render(<App />);
    fireEvent.change(screen.getByLabelText('JSON'), {
      target: { value: '{"a":1}' },
    });
    fireEvent.click(screen.getAllByRole('button', { name: /copy/i })[1]);
    await waitFor(() => expect(window.alert).toHaveBeenCalled());
  });

  it('resets the previous copy-feedback timer when copying again', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });
    render(<App />);
    fireEvent.change(screen.getByLabelText('YAML'), {
      target: { value: 'a: 1' },
    });
    fireEvent.change(screen.getByLabelText('JSON'), {
      target: { value: '{"a":1}' },
    });
    fireEvent.click(screen.getAllByRole('button', { name: /copy/i })[0]);
    expect(await screen.findByText(/Copied!/i)).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: /copy/i })[1]);
    expect(writeText).toHaveBeenCalledTimes(2);
    expect(await screen.findByText(/Copied!/i)).toBeInTheDocument();
  });

  it('restores the saved language from localStorage on load', () => {
    localStorage.setItem('language', 'de');
    render(<App />);
    expect(screen.getByText(/YAML ↔ JSON Konverter/i)).toBeInTheDocument();
  });

  it('remembers the editor contents across reloads', () => {
    const { unmount } = render(<App />);
    fireEvent.change(screen.getByLabelText('YAML'), {
      target: { value: 'name: Ryan' },
    });
    fireEvent.change(screen.getByLabelText('JSON'), {
      target: { value: '{"a":1}' },
    });
    expect(localStorage.getItem('yamlInput')).toBe('name: Ryan');
    expect(localStorage.getItem('jsonInput')).toBe('{"a":1}');

    unmount();
    render(<App />);
    expect(screen.getByLabelText('YAML').value).toBe('name: Ryan');
    expect(screen.getByLabelText('JSON').value).toBe('{"a":1}');
  });

  it('shows the app version and build date', () => {
    render(<App />);
    expect(screen.getByText(/v\d+\.\d+\.\d+/)).toBeInTheDocument();
  });
});
