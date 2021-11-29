import { render } from '@testing-library/react';

import FancyPub from './fancy-pub';

describe('FancyPub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FancyPub />);
    expect(baseElement).toBeTruthy();
  });
});
