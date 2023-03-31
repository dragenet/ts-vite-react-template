import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootProviderProps } from '~/components/molecules/RootProvider';
import { rootStore } from '~/store/rootStore';
import { theme } from '~/theme';

export const RootProvider = ({ children }: RootProviderProps) => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <Provider store={rootStore}>{children}</Provider>
    </ThemeProvider>
  </HelmetProvider>
);
