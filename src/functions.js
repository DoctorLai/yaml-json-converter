import yaml from 'js-yaml';

export function convertYamlToJson(yamlStr) {
  // if the YAML is invalid, js-yaml will throw an error
  try {
    const data = yaml.load(yamlStr);
    return JSON.stringify(data, null, 2);
  } catch (e) {
    throw new Error('Invalid YAML');
  }
}

export function convertJsonToYaml(jsonStr) {
  try {
    return yaml.dump(JSON.parse(jsonStr));
  } catch (e) {
    throw new Error('Invalid JSON');
  }
}
