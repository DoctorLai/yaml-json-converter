# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-07-12

### Added

- **Internationalization (i18n)** for the entire UI with **25 languages**,
  including Simplified Chinese (`zh-CN`) and Traditional Chinese (`zh-TW`), plus
  right-to-left (RTL) support for Arabic, Persian, and Hebrew.
- A **language selector** that auto-detects the browser language and remembers
  the choice in `localStorage`.
- **Copy-to-clipboard** buttons for both the YAML and JSON editors, with inline
  "Copied!" feedback.
- **ESLint** (flat config) plus new `lint`, `lint:fix`, `check`, and
  `test:watch` npm scripts. `npm run check` runs format + lint + coverage +
  build.
- Project documentation: `SECURITY.md`, `CONTRIBUTING.md`, `SUPPORT.md`,
  `PRIVACY.md`, `CODE_OF_CONDUCT.md`, and this `CHANGELOG.md`.
- Repository tooling: GitHub pull-request template, Dependabot configuration,
  `.gitattributes`, `.nvmrc`, and `.editorconfig`.
- Additional status badges in the README.

### Changed

- Consolidated the Vitest configuration into `vite.config.js` (single source of
  truth) and raised coverage thresholds to **80%** across the board.
- The responsive two-pane layout now uses the intended CSS containers, so the
  editors stack correctly on small screens.
- Parse errors now include the underlying reason for easier debugging.
- Updated the funding / "buy me a coffee" links.

### Removed

- The unused Jest/Babel toolchain (`jest`, `babel-jest`, `@babel/*`,
  `babel.config.js`) and the deprecated `crypto` dependency, reducing install
  size and the dependency-vulnerability surface.

### Fixed

- Corrected the test setup file path that the Vite test config pointed to.

## [1.0.0] - 2025-05-03

### Added

- Initial release: convert YAML ↔ JSON in the browser, dark mode, tab-to-spaces
  support, and one-command deployment to GitHub Pages.

[Unreleased]: https://github.com/DoctorLai/yaml-json-converter/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/DoctorLai/yaml-json-converter/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/DoctorLai/yaml-json-converter/releases/tag/v1.0.0
