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

  it('round-trips JSON → YAML → JSON without data loss', () => {
    const jsonStr = '{"name":"Ryan","age":10,"hobbies":["a","b"]}';
    const yamlOut = convertJsonToYaml(jsonStr);
    const jsonBack = convertYamlToJson(yamlOut);
    expect(JSON.parse(jsonBack)).toEqual(JSON.parse(jsonStr));
  });

  it('throws with a descriptive (non-empty) message for malformed YAML', () => {
    expect(() => convertYamlToJson('"unterminated')).toThrow(/./);
  });

  it('throws with a descriptive (non-empty) message for malformed JSON', () => {
    expect(() => convertJsonToYaml('{bad')).toThrow(/./);
  });

  it('converts a null YAML document to the JSON null literal', () => {
    expect(convertYamlToJson('null')).toBe('null');
  });

  it('converts nested structures from YAML to JSON', () => {
    const yamlStr = 'server:\n  host: localhost\n  ports:\n    - 80\n    - 443';
    const parsed = JSON.parse(convertYamlToJson(yamlStr));
    expect(parsed).toEqual({ server: { host: 'localhost', ports: [80, 443] } });
  });
});
