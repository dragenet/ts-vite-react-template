import { describe, expect, it } from 'vitest';

import { renderTest, withTestRouter } from '~/utils/test';

import Home from '../Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const { container } = renderTest(withTestRouter(<Home />));

    expect(container).toMatchSnapshot();
  });
});
