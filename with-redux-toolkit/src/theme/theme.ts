import { Theme } from '~/theme/types';

export const theme: Theme = {
  colors: {
    white: '#ffffff',
    black: '#000',
    darkGrey: '#13131c',
    indigo: '#0282c4',
    mint: '#5ad6a7',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export type Colors = keyof typeof theme.colors;
