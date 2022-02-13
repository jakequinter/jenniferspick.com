import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Container from './Container';

describe('Home', () => {
  it('renders nav links', () => {
    render(<Container />);

    const contact = screen.getAllByText(/contact/i)[0];

    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(screen.getByText(/resume/i)).toBeInTheDocument();
  });

  it('renders portfolio links', () => {
    render(<Container />);

    const portfolioDropdown = screen.getByText(/portfolio/i);

    userEvent.click(portfolioDropdown);
    expect(screen.getByText(/overview/i)).toBeInTheDocument();
  });

  it('renders children within container', async () => {
    render(
      <Container>
        <p>test</p>
      </Container>
    );

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
