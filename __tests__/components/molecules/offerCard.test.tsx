import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import OfferCard from '@/app/components/molecules/OfferCard';
import { ThemeColors, SpacerSizeMap } from '@/types/components';

describe('OfferCard component', () => {
    it('renders the OfferCard component correctly', () => {
        render(<OfferCard />);
        
        const titleLabel = screen.getByText('Get Special Offers');
        expect(titleLabel).toBeInTheDocument();
        expect(titleLabel).toHaveStyle({
            color: ThemeColors.Primary,
            marginBottom: SpacerSizeMap.S12,
        });

        const subtitleLabel = screen.getByText('Many offers waiting for you, get it now');
        expect(subtitleLabel).toBeInTheDocument();
        expect(subtitleLabel).toHaveStyle({
            color: ThemeColors.Font,
        });

        const button = screen.getByRole('button', { name: 'Add a card' });
        expect(button).toBeInTheDocument();

        const image = screen.getByAltText('Special Offers');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/images/card-offer.svg');
    });

    it('calls the onClick handler when the button is clicked', () => {
        const consoleSpy = vi.spyOn(console, 'log');
        render(<OfferCard />);

        const button = screen.getByRole('button', { name: 'Add a card' });
        fireEvent.click(button);

        expect(consoleSpy).toHaveBeenCalledWith('Add a card clicked');
    });
});