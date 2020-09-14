import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '.';

const renderApp = () => {
  const utils = render(<App />);

  return {
    ...utils,

    urlInput: screen.getByLabelText(/url/i),
    startPageInput: screen.getByLabelText(/páginas:/i),
    endPageInput: screen.getByLabelText(/até/i),

    submitButton: screen.getByRole('button', { name: /visualizar/i }),
  };
};

describe('App', () => {
  it('should clear the form after submit', async () => {
    const { submitButton, urlInput, startPageInput, endPageInput } = renderApp();

    await Promise.resolve([
      userEvent.type(urlInput, 'uma url'),
      userEvent.type(startPageInput, '123'),
      userEvent.type(endPageInput, '456'),
    ]);
    userEvent.click(submitButton);

    expect(urlInput).toHaveValue('');
    expect(startPageInput).toHaveValue('');
    expect(endPageInput).toHaveValue('');
  });
});
