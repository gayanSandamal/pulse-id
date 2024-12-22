import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from '@/app/components/atoms/Avatar';
import { AvatarSizeMap } from '@/types/components';

describe('Avatar component', () => {
    it('renders correctly with default props', () => {
        const { container } = render(<Avatar />);
        const avatarElement = container.querySelector('div');
        expect(avatarElement).toBeInTheDocument();
    });

    it('applies custom alt text', () => {
        const { getByAltText } = render(<Avatar src="/avatar.png" alt="Custom Alt Text" />);
        const imageElement = getByAltText('Custom Alt Text');
        expect(imageElement).toBeInTheDocument();
    });

    it('applies custom size', () => {
        const { container } = render(<Avatar src="/avatar.png" size={AvatarSizeMap.medium} />);
        const avatarElement = container.querySelector('div');
        expect(avatarElement).toHaveStyle({
            width: `${AvatarSizeMap.medium}px`,
            height: `${AvatarSizeMap.medium}px`,
        });
    });

    it('applies custom className', () => {
        const { container } = render(<Avatar src="/avatar.png" className="custom-class" />);
        const avatarElement = container.querySelector('.custom-class');
        expect(avatarElement).toBeInTheDocument();
    });

    it('renders image with correct src', () => {
        const { getByAltText } = render(<Avatar src="/images/user.jpg" />);
        const imageElement = getByAltText('Avatar');
        expect(imageElement).toHaveAttribute('src', '/_next/image?url=%2Fimages%2Fuser.jpg&w=3840&q=75');
    });
});