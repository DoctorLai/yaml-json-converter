# YAML ↔ JSON Converter
[![Yaml Json Converter CI](https://github.com/DoctorLai/yaml-json-converter/actions/workflows/ci.yaml/badge.svg)](https://github.com/DoctorLai/yaml-json-converter/actions/workflows/ci.yaml)

A simple web-based tool to convert YAML to JSON and vice versa. This app is built using React and runs in the browser. It provides an easy-to-use interface with two text areas, where you can paste your YAML or JSON data and convert it between formats with just a click!

## Features

- **YAML ↔ JSON Conversion**: Convert YAML to JSON and vice versa.
- **Dark Mode**: Toggle between light and dark modes for better readability.
- **Tab Support**: Properly inserts spaces when pressing the "Tab" key inside text areas.
- **Simple and Intuitive UI**: Easy to use with a clean interface.
- **Deploy Easily**: `npm run build` and `npm run deploy`

## Live Demo

You can try the live demo of this tool at [Github Page: Yaml Json Converter](https://doctorlai.github.io/yaml-json-converter/)

![image](https://github.com/user-attachments/assets/86d78642-6da0-4ad4-b4df-46e64c1873d0)

## Installation

To run the tool locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/doctorlai/yaml-json-converter.git
    cd yaml-json-converter
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Tests:
    ```bash
    npm run test
    ```

5. Format Code:
    Use `prettier --check` or `prettier --write` to check or format the code.
    ```bash
    npm run format
    ## Fix the code style automatically
    npm run format:fix
    ```

6. Visit [http://localhost:5173/yaml-json-converter/](http://localhost:5173/yaml-json-converter/) to start using the tool locally.

## Usage

1. **Enter YAML data** in the YAML input box.
2. **Click "Convert to JSON →"** to convert the YAML to JSON.
3. **Enter JSON data** in the JSON input box.
4. **Click "← Convert to YAML"** to convert the JSON to YAML.

You can also switch between **Light Mode** and **Dark Mode** by clicking the button on the top right corner.

## Contributing

Feel free to fork this project and submit issues or pull requests for improvements!

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Documentation
Here is the [AI generated wiki](https://deepwiki.com/DoctorLai/yaml-json-converter)

## Acknowledgments

- Built with ❤️ by [@justyy](https://github.com/doctorlai).
- Initial Boilerplate code contributed by ChatGPT-4o and o4-mini.
- If you found this tool useful, consider buying me a [coffee](https://justyy.com/out/bmc).
