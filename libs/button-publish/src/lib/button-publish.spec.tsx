import { render } from '@testing-library/react';

import ButtonPublish from './button-publish';

describe('ButtonPublish', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonPublish />);
    expect(baseElement).toBeTruthy();
  });
});
