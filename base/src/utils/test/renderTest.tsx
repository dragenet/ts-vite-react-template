import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RootProvider } from '~/components/molecules/RootProvider';

export const renderTest = (children: JSX.Element) => ({
  user: userEvent.setup(),
  ...render(<RootProvider>{children}</RootProvider>),
});
