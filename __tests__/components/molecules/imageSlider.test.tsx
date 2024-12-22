import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ImageSlider from '@/app/components/molecules/ImageSlider';

const mockImages = [
    { id: 1, src: '/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/image3.jpg', alt: 'Image 3' },
];

describe('ImageSlider component', () => {
    it('renders correctly with images', () => {
        const { getByAltText } = render(<ImageSlider images={mockImages} />);
        mockImages.forEach(img => {
            expect(getByAltText(img.alt || `Slide ${img.id}`)).toBeInTheDocument();
        });
    });

    it('renders bullet navigations', () => {
        const { container } = render(<ImageSlider images={mockImages} />);
        const bullets = container.querySelectorAll('button');
        expect(bullets.length).toBe(mockImages.length);
    });

    it('does not render if no images are provided', () => {
        const { container } = render(<ImageSlider images={[]} />);
        expect(container.firstChild).toBeNull();
    });
});