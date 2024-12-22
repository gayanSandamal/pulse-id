import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Cities } from '@/app/components/organisms/CitiesList';
import { cityImages } from '@/constants/cities';
import { SpacerSizeMap } from '@/types/components';

describe('Cities component', () => {
    it('renders correctly', () => {
        const { container } = render(<Cities />);
        expect(container.firstChild).toHaveClass('flex flex-no-wrap overflow-x-auto');
    });

    it('renders the correct number of CityCircle components', () => {
        const { getAllByTestId } = render(<Cities />);
        const cityCircles = getAllByTestId('city-circle');
        expect(cityCircles.length).toBe(cityImages.length);
    });

    it('applies correct styles to city containers', () => {
        const { container } = render(<Cities />);
        const cityContainers = container.querySelectorAll('div > div');

        cityContainers.forEach((cityContainer) => {
            expect(cityContainer).toHaveStyle({
                marginLeft: `${SpacerSizeMap.S12}px`,
                marginRight: `${SpacerSizeMap.S12}px`,
            });
        });
    });
});