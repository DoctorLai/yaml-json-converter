# YAML ↔ JSON Converter

<!-- Status -->
[![CI](https://github.com/DoctorLai/yaml-json-converter/actions/workflows/ci.yaml/badge.svg)](https://github.com/DoctorLai/yaml-json-converter/actions/workflows/ci.yaml)
[![Test Coverage](https://github.com/DoctorLai/yaml-json-converter/actions/workflows/coverage.yaml/badge.svg)](https://github.com/DoctorLai/yaml-json-converter/actions/workflows/coverage.yaml)
![JavaScript](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/DoctorLai/yaml-json-converter/main/.github/badges/javascript.json)
![Top language](https://img.shields.io/github/languages/top/DoctorLai/yaml-json-converter)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/github/license/DoctorLai/yaml-json-converter)](./LICENSE)

<!-- Project activity -->
![Last commit](https://img.shields.io/github/last-commit/DoctorLai/yaml-json-converter)
![Commit activity](https://img.shields.io/github/commit-activity/m/DoctorLai/yaml-json-converter)
![Repo size](https://img.shields.io/github/repo-size/DoctorLai/yaml-json-converter)
[![Open issues](https://img.shields.io/github/issues/DoctorLai/yaml-json-converter)](https://github.com/DoctorLai/yaml-json-converter/issues)
[![Open PRs](https://img.shields.io/github/issues-pr/DoctorLai/yaml-json-converter)](https://github.com/DoctorLai/yaml-json-converter/pulls)
![Node](https://img.shields.io/badge/node-%E2%89%A518-5FA04E?logo=node.js&logoColor=white)

<!-- Community -->
[![Stars](https://img.shields.io/github/stars/DoctorLai/yaml-json-converter?style=social)](https://github.com/DoctorLai/yaml-json-converter/stargazers)
[![Forks](https://img.shields.io/github/forks/DoctorLai/yaml-json-converter?style=social)](https://github.com/DoctorLai/yaml-json-converter/network/members)
[![Watchers](https://img.shields.io/github/watchers/DoctorLai/yaml-json-converter?style=social)](https://github.com/DoctorLai/yaml-json-converter/watchers)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/DoctorLai/yaml-json-converter)

A simple, fast, **fully client-side** web tool to convert **YAML → JSON** and
**JSON → YAML**. Built with React + Vite, it runs entirely in your browser —
paste your data into either editor and convert with a single click. Nothing you
type ever leaves your device.

## Features

- **YAML ↔ JSON conversion** powered by [`js-yaml`](https://github.com/nodeca/js-yaml).
- **🌍 25 languages** out of the box — including Simplified Chinese (简体中文) and
  Traditional Chinese (繁體中文) — with automatic browser-language detection and
  right-to-left (RTL) support.
- **📋 One-click copy** for each editor, with inline "Copied!" feedback.
- **🌗 Dark mode** that remembers your preference.
- **⇥ Tab support** — pressing <kbd>Tab</kbd> inserts spaces instead of moving focus.
- **📱 Responsive** two-pane layout that stacks on small screens.
- **🔒 Privacy-friendly** — no backend, no tracking, no data collection.
- **🚀 Deploy easily** — `npm run build` then `npm run deploy` to GitHub Pages.

## Live Demo

Try it live: **[doctorlai.github.io/yaml-json-converter](https://doctorlai.github.io/yaml-json-converter/)**

![Screenshot of the YAML to JSON Converter](https://github.com/user-attachments/assets/86d78642-6da0-4ad4-b4df-46e64c1873d0)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18 or newer** (the version in
  [`.nvmrc`](./.nvmrc) is recommended — run `nvm use`).

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/DoctorLai/yaml-json-converter.git
cd yaml-json-converter

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173/yaml-json-converter/](http://localhost:5173/yaml-json-converter/).

## Usage

1. **Enter YAML** in the left editor and click **"Convert to JSON →"**.
2. **Enter JSON** in the right editor and click **"← Convert to YAML"**.
3. Use the **📋 Copy** button on either editor to copy the result.
4. Switch the interface **Language** from the selector in the top-right corner.
5. Toggle **Light / Dark Mode** with the button at the bottom.

## Available Scripts

| Script                 | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Start the Vite dev server.                             |
| `npm run build`        | Build the production bundle into `dist/`.              |
| `npm run preview`      | Preview the production build locally.                  |
| `npm run test`         | Run the test suite once.                               |
| `npm run test:watch`   | Run the tests in watch mode.                           |
| `npm run coverage`     | Run tests and enforce the 80% coverage thresholds.     |
| `npm run lint`         | Lint the codebase with ESLint.                         |
| `npm run lint:fix`     | Lint and auto-fix where possible.                      |
| `npm run format`       | Check formatting with Prettier.                        |
| `npm run format:fix`   | Auto-format the codebase with Prettier.                |
| `npm run check`        | Run format + lint + coverage + build (the full gate).  |
| `npm run deploy`       | Build and publish to GitHub Pages.                     |

## Internationalization

The entire UI is translated into **25 languages**:

> English · 简体中文 · 繁體中文 · Español · हिन्दी · العربية · বাংলা · Português ·
> Русский · 日本語 · Deutsch · Français · 한국어 · Italiano · Türkçe · Tiếng Việt ·
> Polski · Українська · Nederlands · ไทย · Bahasa Indonesia · فارسی · עברית ·
> Svenska · Ελληνικά

Translations live in [`src/lang/`](./src/lang/) — one JSON file per language.
Want to add or improve a translation? See the
[Adding a Translation](./CONTRIBUTING.md#adding-a-translation) guide.

## Testing

Tests are written with [Vitest](https://vitest.dev/) and
[Testing Library](https://testing-library.com/). Coverage is enforced at **80%**
for statements, branches, functions, and lines.

```bash
npm run test       # run once
npm run coverage   # run with coverage report
```

On pull requests, a coverage summary is posted automatically as a comment.

## Tech Stack

- **UI:** React 18
- **Build tool:** Vite 6
- **Parser:** js-yaml
- **Testing:** Vitest + Testing Library (jsdom)
- **Quality:** ESLint + Prettier

## Contributing

Contributions of all kinds are welcome! Please read the
[Contributing Guide](./CONTRIBUTING.md) and our
[Code of Conduct](./CODE_OF_CONDUCT.md) to get started. Make sure
`npm run check` passes before opening a pull request.

## Documentation & Policies

- 📚 [AI-generated wiki](https://deepwiki.com/DoctorLai/yaml-json-converter)
- 📝 [Changelog](./CHANGELOG.md)
- 🤝 [Contributing](./CONTRIBUTING.md)
- 🛟 [Support](./SUPPORT.md)
- 🔐 [Security Policy](./SECURITY.md)
- 🕵️ [Privacy Policy](./PRIVACY.md)
- 📜 [Code of Conduct](./CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE)
file for details.

## Acknowledgments

- Built with ❤️ by [@justyy](https://github.com/doctorlai).
- Initial boilerplate contributed by ChatGPT-4o and o4-mini.
- If you found this tool useful, consider buying me a
  [coffee](https://buymeacoffee.com/y0btg5r) ☕.

