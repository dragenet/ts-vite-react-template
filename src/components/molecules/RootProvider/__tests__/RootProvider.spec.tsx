import { describe, expect, it } from 'vitest';

import { RootProvider } from '~/components/molecules/RootProvider';
import { renderTest } from '~/utils/test/renderTest';

describe('RootProvider', () => {
  it('children renders correctly', () => {
    const { container } = renderTest(
      <RootProvider>
        <div>I am here</div>
      </RootProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
