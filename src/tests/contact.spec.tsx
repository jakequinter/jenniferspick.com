import { render, screen } from '@testing-library/react';

import Contact from 'pages/contact';

describe('Contact', () => {
  it('renders contact page with email address', () => {
    render(<Contact />);

    expect(screen.getByText(/get in touch./i)).toBeInTheDocument();
    expect(screen.getByText(/jspick13@gmail.com/i)).toBeInTheDocument();
  });
});
