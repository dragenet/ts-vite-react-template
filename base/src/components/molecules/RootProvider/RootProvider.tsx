import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import { RootProviderProps } from '~/components/molecules/RootProvider';
import { theme } from '~/theme';

export const RootProvider = ({ children }: RootProviderProps) => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </HelmetProvider>
);
