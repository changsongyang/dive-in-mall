import required from './required.js';
import whitespace from './whitespace.js';
import type from './type.js';
import range from './range.js';
import enumRule from './enum.js';
import pattern from './pattern.js';

export default {
  required,
  whitespace,
  type,
  range,
  enum: enumRule,
  pattern,
};
