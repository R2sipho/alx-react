import React from 'react';
import { act } from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('getFullYear returns correct year', () => {
  expect(getFullYear()).toBe(2022);
});

test('getFooter returns correct string (false)', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getFooter returns correct string (true)', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getLatestNotification returns correct html string', () => {
  expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

