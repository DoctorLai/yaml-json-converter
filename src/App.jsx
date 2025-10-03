import './App.css';
import { useState, useEffect } from 'react';
import { convertYamlToJson, convertJsonToYaml } from './functions';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial value from localStorage
    const saved = localStorage.getItem('darkMode');
    return saved === 'true'; // convert string to boolean
  });

  const [yamlInput, setYamlInput] = useState('');
  const [jsonInput, setJsonInput] = useState('');

  // Save dark mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toJson = () => {
    try {
      setJsonInput(convertYamlToJson(yamlInput));
    } catch (err) {
      alert('YAML parse error: ' + err.message);
    }
  };

  const toYaml = () => {
    try {
      setYamlInput(convertJsonToYaml(jsonInput));
    } catch (err) {
      alert('JSON parse error: ' + err.message);
    }
  };

  const clearInputs = () => {
    setYamlInput('');
    setJsonInput('');
  };

  // Handle Tab key functionality
  const handleTab = (e, type) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert two spaces at the cursor position
      const newText =
        textarea.value.slice(0, start) + '  ' + textarea.value.slice(end);

      // Update the appropriate input state based on the type ('yaml' or 'json')
      if (type === 'yaml') {
        setYamlInput(newText);
      } else {
        setJsonInput(newText);
      }

      // Move the cursor to the right after the inserted spaces
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div>
        <h1>YAML ↔ JSON Converter</h1>
        <div>
          <textarea
            value={yamlInput}
            onChange={(e) => setYamlInput(e.target.value)}
            placeholder='name: John Doe
age: 30
hobbies:
  - Reading
  - Traveling
  - Coding
'
            onKeyDown={(e) => handleTab(e, 'yaml')}
          />
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder='{
"name": "John Doe",
"age": 30,
"hobbies": [
  "Reading",
  "Traveling",
  "Coding"
]'
            onKeyDown={(e) => handleTab(e, 'json')}
          />
        </div>
        <div>
          <button onClick={toJson}>Convert to JSON →</button>
          <button onClick={toYaml}>← Convert to YAML</button>
          <button onClick={clearInputs}>❌Clear</button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
      <footer>
        <p>
          Made with ❤️ by{' '}
          <a
            href='https://github.com/doctorlai'
            target='_blank'
            rel='noopener noreferrer'
          >
            @justyy
          </a>
        </p>
        <p>
          If you found this useful, consider buying me a{' '}
          <a
            href='https://justyy.com/out/bmc'
            target='_blank'
            rel='noopener noreferrer'
          >
            coffee
          </a>{' '}
          ☕
        </p>
        <p>
          Open Source on{' '}
          <a
            href='https://github.com/DoctorLai/yaml-json-converter'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
