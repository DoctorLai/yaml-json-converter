# Security Policy

## Supported Versions

The latest release always receives security fixes. Older versions are not
maintained.

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| < 1.1   | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, use GitHub's private vulnerability reporting:

1. Go to the [Security tab](https://github.com/DoctorLai/yaml-json-converter/security)
   of this repository.
2. Click **"Report a vulnerability"** and provide the details.

Please include:

- A description of the vulnerability and its impact.
- Steps to reproduce (a minimal proof of concept is ideal).
- Any known mitigations or workarounds.

We aim to acknowledge reports within a few days and will keep you informed of
the progress toward a fix.

## Scope & Notes

YAML ↔ JSON Converter is a **fully client-side** static web application. It has
no backend, no authentication, and it does not transmit your input anywhere —
all conversion happens locally in your browser.

The most relevant class of issues is therefore the handling of untrusted input
(YAML/JSON parsing). Parsing is performed with
[`js-yaml`](https://github.com/nodeca/js-yaml) using the safe `load`/`dump`
APIs, which do not instantiate arbitrary JavaScript types.
