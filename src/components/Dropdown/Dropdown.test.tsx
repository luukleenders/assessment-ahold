import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders with correct label', () => {
    render(<Dropdown label='Test Dropdown'>Content</Dropdown>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Dropdown');
  });

  it('toggles content visibility on click', async () => {
    render(<Dropdown label='Test Dropdown'>Test Content</Dropdown>);

    const content = screen.getByText('Test Content');
    expect(content).toHaveClass('opacity-0');

    await userEvent.click(screen.getByRole('button'));
    expect(content).toHaveClass('opacity-100');
  });

  it('accepts and applies custom className', () => {
    render(
      <Dropdown label='Test' className='custom-class'>
        Content
      </Dropdown>
    );
    expect(screen.getByTestId('dropdown-container')).toHaveClass('custom-class');
  });
});
