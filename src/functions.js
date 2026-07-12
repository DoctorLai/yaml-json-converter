import { load, dump } from 'js-yaml';

/**
 * Convert a YAML string to a pretty-printed JSON string.
 * @param {string} yamlStr - The YAML source text.
 * @returns {string} The equivalent JSON, indented with two spaces.
 * @throws {Error} If the input is not valid YAML. The original `js-yaml` error
 *   is allowed to propagate so its type and stack trace are preserved.
 */
export function convertYamlToJson(yamlStr) {
  const data = load(yamlStr);
  return JSON.stringify(data, null, 2);
}

/**
 * Convert a JSON string to a YAML string.
 * @param {string} jsonStr - The JSON source text.
 * @returns {string} The equivalent YAML document.
 * @throws {Error} If the input is not valid JSON. The original `JSON.parse`
 *   error is allowed to propagate so its type and stack trace are preserved.
 */
export function convertJsonToYaml(jsonStr) {
  return dump(JSON.parse(jsonStr));
}
