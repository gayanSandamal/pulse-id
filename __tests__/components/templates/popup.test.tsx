import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Popup from '@/app/components/templates/Popup';

describe('Popup component', () => {
    const defaultProps = {
        isOpen: true,
        onClose: vi.fn(),
        title: 'Sample Title',
        location: 'Sample Location',
        reviews: 10,
        rating: 4.5,
        imageSrc: '/images/sample.jpg',
    };

    it('renders correctly when open', () => {
        const { container } = render(<Popup {...defaultProps} />);
        expect(container.firstChild).toHaveClass('fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50');
    });

    it('does not render when closed', () => {
        const { container } = render(<Popup {...defaultProps} isOpen={false} />);
        expect(container.firstChild).toBeNull();
    });

    it('displays the correct title, location, rating, and reviews', () => {
        const { getByText } = render(<Popup {...defaultProps} />);
        expect(getByText(defaultProps.title)).toBeInTheDocument();
        expect(getByText(defaultProps.location)).toBeInTheDocument();
        expect(getByText(`${defaultProps.rating}`)).toBeInTheDocument();
        expect(getByText(`${defaultProps.reviews} reviews`)).toBeInTheDocument();
    });

    it('renders the image with the correct src', () => {
        const { getByAltText } = render(<Popup {...defaultProps} />);
        const image = getByAltText('Logo');
        expect(image).toHaveAttribute('src', '/_next/image?url=%2Fimages%2Flogo.png&w=3840&q=75');
    });
});