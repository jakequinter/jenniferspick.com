import Router from 'next/router';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProfessionalDocuments from './ProfessionalDocuments';

describe('ProfessionalDocuments', () => {
  it('renders tabs', () => {
    render(<ProfessionalDocuments />);

    expect(
      screen.getByText(/professional documents for your leisure/i)
    ).toBeInTheDocument();
  });

  it('shows icon tabs', () => {
    render(<ProfessionalDocuments />);

    expect(
      screen.getByRole('button', {
        name: /resume/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /transcripts/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /courses/i,
      })
    ).toBeInTheDocument();
  });
});
