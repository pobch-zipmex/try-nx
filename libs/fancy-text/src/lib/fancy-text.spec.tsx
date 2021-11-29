import { render } from '@testing-library/react';

import FancyText from './fancy-text';

describe('FancyText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FancyText />);
    expect(baseElement).toBeTruthy();
  });
});
