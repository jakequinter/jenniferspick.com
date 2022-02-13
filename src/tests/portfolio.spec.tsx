import { render, screen } from '@testing-library/react';

import Portfolio from 'pages/portfolio';

describe('Portfolio', () => {
  it('renders portfolio page', () => {
    render(<Portfolio />);

    expect(screen.getByText(/jennifer spick, m.s., b.s./i)).toBeInTheDocument();
  });
});
