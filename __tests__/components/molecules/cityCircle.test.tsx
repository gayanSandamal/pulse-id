import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CityCircle from '@/app/components/molecules/CityCircle';
import { SpacerSizeMap } from '@/types/components';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CityCircle component', () => {
    it('renders correctly with default props', () => {
        const { getByText, getByAltText } = render(
            <MemoryRouterProvider>
                <CityCircle href="/city" label="City Label" src="/city.jpg" />
            </MemoryRouterProvider>
        );
        const labelElement = getByText('City Label');
        const avatarElement = getByAltText('City Label');
        expect(labelElement).toBeInTheDocument();
        expect(avatarElement).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(
            <MemoryRouterProvider>
                <CityCircle href="/city" label="City Label" src="/city.jpg" className="custom-class" />
            </MemoryRouterProvider>
        );
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('renders with correct styles', () => {
        const { container } = render(
            <MemoryRouterProvider>
                <CityCircle href="/city" label="City Label" src="/images/cities/tokyo.ppg" />
            </MemoryRouterProvider>
        );
        const linkElement = container.querySelector('a');
        const avatarContainer = linkElement?.firstChild;
        expect(avatarContainer).toHaveStyle({
            marginBottom: SpacerSizeMap.S8,
        });
    });

    it('navigates to the correct href', () => {
        const { container } = render(
            <MemoryRouterProvider>
                <CityCircle href="/city" label="City Label" src="/images/cities/tokyo.ppg" />
            </MemoryRouterProvider>
        );
        const linkElement = container.querySelector('a');
        expect(linkElement).toHaveAttribute('href', '/city');
    });
});