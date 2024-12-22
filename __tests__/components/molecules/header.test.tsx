import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '@/app/components/molecules/Header';
import { headerStyles } from '@/styles/headerStyles';

vi.mock('next/link', () => ({
    __esModule: true,
    default: ({ children, ...rest }) => <a {...rest}>{children}</a>,
}));

vi.mock('next/image', () => ({
    __esModule: true,
    default: ({ ...props }) => <img {...props} />,
}));

vi.mock('./User', () => ({
    User: ({ title, subtitle, src }) => (
        <div>
            <img src={src} alt={title} />
            <div>{title}</div>
            <div>{subtitle}</div>
        </div>
    ),
}));

describe('Header component', () => {
    it('renders correctly', () => {
        render(<Header />);
        expect(screen.getByAltText('Logo')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Welcome')).toBeInTheDocument();
    });

    it('applies styles', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toHaveStyle(headerStyles(0).header);
    });

    it('updates width on resize', () => {
        render(<Header />);
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toHaveStyle(headerStyles(500).header);
    });
});