import yaml from 'js-yaml';

export function convertYamlToJson(yamlStr) {
  return JSON.stringify(yaml.load(yamlStr), null, 2);
}

export function convertJsonToYaml(jsonStr) {
  return yaml.dump(JSON.parse(jsonStr));
}
