import yaml from 'js-yaml';

/**
 * Convert a YAML string to a pretty-printed JSON string.
 * @param {string} yamlStr - The YAML source text.
 * @returns {string} The equivalent JSON, indented with two spaces.
 * @throws {Error} If the input is not valid YAML.
 */
export function convertYamlToJson(yamlStr) {
  // if the YAML is invalid, js-yaml will throw an error
  try {
    const data = yaml.load(yamlStr);
    return JSON.stringify(data, null, 2);
  } catch (e) {
    // Surface the parser's own reason; the caller adds a localized label.
    throw new Error(e.message);
  }
}

/**
 * Convert a JSON string to a YAML string.
 * @param {string} jsonStr - The JSON source text.
 * @returns {string} The equivalent YAML document.
 * @throws {Error} If the input is not valid JSON.
 */
export function convertJsonToYaml(jsonStr) {
  try {
    return yaml.dump(JSON.parse(jsonStr));
  } catch (e) {
    // Surface the parser's own reason; the caller adds a localized label.
    throw new Error(e.message);
  }
}
