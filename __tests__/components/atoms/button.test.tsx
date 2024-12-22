import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '@/app/components/atoms/Button';
import { ThemeColors } from '@/types/components';

describe('Button component', () => {
    it('renders charm button correctly', () => {
        const { container } = render(<Button charm={true} src="/icon.png" />);
        const charmButton = container.querySelector('button');
        expect(charmButton).toBeInTheDocument();
        expect(charmButton).toHaveStyle({
            color: ThemeColors.Primary,
        });
    });

    it('applies custom size', () => {
        const { container } = render(<Button size="small" label="Small Button" />);
        const buttonElement = container.querySelector('button');
        expect(buttonElement).toHaveStyle({
            minHeight: '20px',
        });
    });

    it('applies outline style to charm button', () => {
        const { container } = render(<Button charm={true} outline={true} />);
        const charmButton = container.querySelector('button');
        expect(charmButton).toHaveStyle({
            border: `1px solid ${ThemeColors.Background}`,
        });
    });

    it('handles onClick event', () => {
        const handleClick = vi.fn();
        const { getByText } = render(<Button label="Clickable Button" onClick={handleClick} />);
        const buttonElement = getByText('Clickable Button');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});