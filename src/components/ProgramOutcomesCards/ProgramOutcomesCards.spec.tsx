import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProgramOutcomesCards from '././ProgramOutcomesCards';

describe('ProgramOutcomesCards', () => {
  it('renders 6 cards', () => {
    render(<ProgramOutcomesCards />);

    expect(screen.getByText(/leadership/i)).toBeInTheDocument();
    expect(screen.getByText(/performance/i)).toBeInTheDocument();
    expect(screen.getByText(/recruitment/i)).toBeInTheDocument();
    expect(screen.getByText(/effectiveness/i)).toBeInTheDocument();
    expect(screen.getByText(/financial strategies/i)).toBeInTheDocument();
    expect(screen.getByText(/communication/i)).toBeInTheDocument();
  });

  it('cards are expandable', () => {
    render(<ProgramOutcomesCards />);

    const leadershipTab = screen.getByText(/leadership/i);
    userEvent.click(leadershipTab);

    expect(
      screen.getByText(
        /address political, legal, regulatory, governmental, and ethical issues associated with diverse healthcare settings./i
      )
    ).toBeInTheDocument();
  });
});
