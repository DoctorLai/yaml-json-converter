import './App.css';
import { useState, useEffect } from 'react';
import { convertYamlToJson, convertJsonToYaml } from './functions';
import {
  languages,
  getTranslations,
  getDirection,
  resolveLanguage,
} from './lang';

const YAML_PLACEHOLDER = `name: John Doe
age: 30
hobbies:
  - Reading
  - Traveling
  - Coding
`;

const JSON_PLACEHOLDER = `{
  "name": "John Doe",
  "age": 30,
  "hobbies": ["Reading", "Traveling", "Coding"]
}`;

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial value from localStorage
    const saved = localStorage.getItem('darkMode');
    return saved === 'true'; // convert string to boolean
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return resolveLanguage(saved || navigator.language);
  });

  const [yamlInput, setYamlInput] = useState(
    () => localStorage.getItem('yamlInput') || ''
  );
  const [jsonInput, setJsonInput] = useState(
    () => localStorage.getItem('jsonInput') || ''
  );
  const [copied, setCopied] = useState('');

  const t = getTranslations(language);
  const dir = getDirection(language);

  // Save dark mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Persist the selected language and keep the document direction in sync
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', dir);
  }, [language, dir]);

  // Persist the editor contents so they survive a page reload
  useEffect(() => {
    localStorage.setItem('yamlInput', yamlInput);
  }, [yamlInput]);

  useEffect(() => {
    localStorage.setItem('jsonInput', jsonInput);
  }, [jsonInput]);

  const toJson = () => {
    try {
      setJsonInput(convertYamlToJson(yamlInput));
    } catch (err) {
      alert(`${t.yamlError}: ${err.message}`);
    }
  };

  const toYaml = () => {
    try {
      setYamlInput(convertJsonToYaml(jsonInput));
    } catch (err) {
      alert(`${t.jsonError}: ${err.message}`);
    }
  };

  const clearInputs = () => {
    setYamlInput('');
    setJsonInput('');
  };

  const copyToClipboard = async (text, which) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(''), 1500);
    } catch {
      alert(t.copyFailed);
    }
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
    <div className={darkMode ? 'app dark' : 'app'} dir={dir}>
      <div>
        <div className='toolbar'>
          <h1>{t.title}</h1>
          <label className='language-select'>
            {t.language}:{' '}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={t.language}
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className='textareas-container'>
          <div className='editor'>
            <div className='editor-header'>
              <span className='editor-label'>YAML</span>
              <button
                type='button'
                className='copy-btn'
                onClick={() => copyToClipboard(yamlInput, 'yaml')}
                disabled={!yamlInput}
                aria-label={`${t.copy} YAML`}
              >
                {copied === 'yaml' ? t.copied : `📋 ${t.copy}`}
              </button>
            </div>
            <textarea
              value={yamlInput}
              onChange={(e) => setYamlInput(e.target.value)}
              placeholder={YAML_PLACEHOLDER}
              onKeyDown={(e) => handleTab(e, 'yaml')}
              aria-label='YAML'
              spellCheck='false'
            />
          </div>

          <div className='editor'>
            <div className='editor-header'>
              <span className='editor-label'>JSON</span>
              <button
                type='button'
                className='copy-btn'
                onClick={() => copyToClipboard(jsonInput, 'json')}
                disabled={!jsonInput}
                aria-label={`${t.copy} JSON`}
              >
                {copied === 'json' ? t.copied : `📋 ${t.copy}`}
              </button>
            </div>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder={JSON_PLACEHOLDER}
              onKeyDown={(e) => handleTab(e, 'json')}
              aria-label='JSON'
              spellCheck='false'
            />
          </div>
        </div>

        <div className='button-container'>
          <button onClick={toJson}>{t.convertToJson}</button>
          <button onClick={toYaml}>{t.convertToYaml}</button>
          <button onClick={clearInputs}>❌ {t.clear}</button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? `🌞 ${t.lightMode}` : `🌙 ${t.darkMode}`}
          </button>
        </div>
      </div>
      <footer>
        <p>
          {t.madeWith}{' '}
          <a
            href='https://github.com/doctorlai'
            target='_blank'
            rel='noopener noreferrer'
          >
            @justyy
          </a>
        </p>
        <p>
          {t.coffeePrompt}{' '}
          <a
            href='https://buymeacoffee.com/y0btg5r'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t.coffee}
          </a>{' '}
          ☕
        </p>
        <p>
          {t.openSource}{' '}
          <a
            href='https://github.com/DoctorLai/yaml-json-converter'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </p>
        <p className='version'>
          v{__APP_VERSION__} · {__BUILD_DATE__}
        </p>
      </footer>
    </div>
  );
}
