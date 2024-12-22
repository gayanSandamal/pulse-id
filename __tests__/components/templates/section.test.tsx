import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Section from '@/app/components/templates/Section';
import { sectionStyles } from '@/styles/sectionStyles';

describe('Section component', () => {
    it('renders correctly with children', () => {
        const { getByText } = render(<Section title="Section Title">Test Content</Section>);
        expect(getByText('Section Title')).toBeInTheDocument();
        expect(getByText('Test Content')).toBeInTheDocument();
    });

    it('renders the "more" link when provided', () => {
        const more = { href: '/more', label: 'More' };
        const { getByText } = render(<Section title="Section Title" more={more}>Test Content</Section>);
        const linkElement = getByText('More');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest('a')).toHaveAttribute('href', '/more');
    });

    it('applies content padding styles correctly', () => {
        const { container } = render(<Section title="Section Title" contentPadding={false}>Test Content</Section>);
        const sectionElement = container.querySelector('section');
        expect(sectionElement).toHaveStyle(sectionStyles(false).section);
    });

    it('applies default content padding styles correctly', () => {
        const { container } = render(<Section title="Section Title">Test Content</Section>);
        const sectionElement = container.querySelector('section');
        expect(sectionElement).toHaveStyle(sectionStyles(true).section);
    });
});