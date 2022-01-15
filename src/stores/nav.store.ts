import { writable } from 'svelte/store';

type Color = 'navy' | 'yellow' | 'red' | 'green' | 'blue' | 'lunarblue';
type Variant = '' | '-hsl' | '-contrast' | '-contrast-hsl';
type ThemeVars = `var(--app-color-${Color}${Variant})`;

export const navColor = writable<ThemeVars>('var(--app-color-navy-contrast)');
