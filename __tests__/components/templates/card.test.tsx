import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '@/app/components/templates/Card';

describe('Card component', () => {
    it('renders correctly with children', () => {
        const { container, getByText } = render(<Card>Test Content</Card>);
        expect(container.firstChild).toHaveClass('relative w-full mx-auto shadow-md rounded-xl overflow-hidden');
        expect(getByText('Test Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<Card className="custom-class">Test Content</Card>);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('applies gradient styles correctly', () => {
        const { container } = render(<Card>Test Content</Card>);
        const gradientDiv = container.querySelector('div > div.absolute');
        expect(gradientDiv).toHaveStyle({
            width: '100%',
            height: '180%',
            background: 'radial-gradient(circle, rgb(255, 152, 0) -80%, rgba(255, 152, 0, 0.2) 60%)',
            top: '-40%',
            zIndex: '0'
        });
    });
});