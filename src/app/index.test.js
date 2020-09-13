import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '.';

describe('App', () => {
  it('should have a heading with the correct text', async () => {
    render(<App />);

    expect(screen.getByRole('heading', /my react template/i)).toBeInTheDocument();
  });
});
