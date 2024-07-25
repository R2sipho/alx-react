import React from 'react';
import { act } from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns correct string if false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getFooterCopy returns correct string if true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getLatestNotification returns correct HTML string', () => {
    expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

