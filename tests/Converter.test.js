import { describe, it, expect } from 'vitest';
import { convertYamlToJson, convertJsonToYaml } from '../src/functions';

describe('YAML ↔ JSON converter', () => {
  it('converts YAML to JSON', () => {
    const yamlStr = 'name: Ryan\nage: 10';
    const json = convertYamlToJson(yamlStr);
    expect(json).toContain('"name": "Ryan"');
    expect(json).toContain('"age": 10');
  });

  it('converts JSON to YAML', () => {
    const jsonStr = '{ "name": "Ryan", "age": 10 }';
    const yamlOut = convertJsonToYaml(jsonStr);
    expect(yamlOut).toContain('name: Ryan');
    expect(yamlOut).toContain('age: 10');
  });

  it('handles invalid YAML input gracefully', () => {
    const invalidYaml = ' :    Ry   an\nage:'; // Invalid YAML
    expect(() => convertYamlToJson(invalidYaml)).toThrow();
  });

  it('handles invalid JSON input gracefully', () => {
    const invalidJson = '{ name: Ryan, age: 10 '; // Missing closing brace
    expect(() => convertJsonToYaml(invalidJson)).toThrow();
  });
});
