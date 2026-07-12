# Contributing to YAML ↔ JSON Converter

First off, thank you for taking the time to contribute! 🎉 This project is a
small, friendly, open-source tool and contributions of all kinds are welcome —
bug reports, features, documentation, and translations.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Available Scripts](#available-scripts)
- [Adding a Translation](#adding-a-translation)
- [Commit & Pull Request Guidelines](#commit--pull-request-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our
[Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to
uphold it.

## Getting Started

You will need [Node.js](https://nodejs.org/) **18 or newer** (the version in
[`.nvmrc`](./.nvmrc) is recommended — run `nvm use`).

```bash
# 1. Fork and clone the repository
git clone https://github.com/<your-username>/yaml-json-converter.git
cd yaml-json-converter

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## Development Workflow

1. Create a feature branch: `git checkout -b feature/short-description`.
2. Make your change, adding or updating tests where it makes sense.
3. Run the full quality gate before pushing:

   ```bash
   npm run check
   ```

   This runs formatting, linting, tests with coverage, and a production build —
   the same checks that run in CI.
4. Commit, push, and open a pull request against `main`.

## Available Scripts

| Script                 | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Start the Vite dev server.                             |
| `npm run build`        | Build the production bundle into `dist/`.              |
| `npm run preview`      | Preview the production build locally.                  |
| `npm run test`         | Run the test suite once.                               |
| `npm run test:watch`   | Run the tests in watch mode.                           |
| `npm run coverage`     | Run tests and enforce coverage thresholds.             |
| `npm run lint`         | Lint the codebase with ESLint.                         |
| `npm run lint:fix`     | Lint and auto-fix where possible.                      |
| `npm run format`       | Check formatting with Prettier.                        |
| `npm run format:fix`   | Auto-format the codebase with Prettier.                |
| `npm run check`        | Run format + lint + coverage + build (the full gate).  |

## Adding a Translation

The UI is fully internationalized. Translations live in
[`src/lang/`](./src/lang/) — one JSON file per language.

1. Copy [`src/lang/en.json`](./src/lang/en.json) to `src/lang/<code>.json`,
   where `<code>` is the [BCP 47](https://www.rfc-editor.org/info/bcp47) code
   (e.g. `pt-BR`).
2. Translate every value. **Keep the keys unchanged** — a test verifies that
   every language has exactly the same keys as English.
3. Register the language in [`src/lang/index.js`](./src/lang/index.js):
   - add the `import` and an entry in the `translations` map, and
   - add an entry to the `languages` array with the native `name` and the text
     direction (`dir: 'rtl'` for right-to-left scripts, otherwise `'ltr'`).
4. Run `npm run test` — the i18n consistency test should stay green.

## Commit & Pull Request Guidelines

- Keep pull requests focused and reasonably small.
- Write clear commit messages in the imperative mood
  (e.g. "Add Portuguese translation").
- Make sure `npm run check` passes before requesting a review.
- Reference any related issue in the PR description (e.g. `Closes #123`).

Happy hacking! ☕
