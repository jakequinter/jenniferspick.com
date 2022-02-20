import { render, screen, waitFor } from '@testing-library/react';

import Curriculum from './Curriculum';

describe('ProfessionalDocuments', () => {
  it('renders curriculum', () => {
    render(<Curriculum />);

    expect(
      screen.getByText(/check out the curriculum 👇/i)
    ).toBeInTheDocument();
  });

  it('shows 13 cards', () => {
    render(<Curriculum />);

    expect(screen.getAllByRole('heading')).toHaveLength(14);
  });
});
