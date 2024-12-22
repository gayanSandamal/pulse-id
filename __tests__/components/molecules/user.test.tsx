import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { User } from '@/app/components/molecules/User';
import { ThemeColors, SpacerSizeMap, FontWeightMap, FontSizeMap } from '@/types/components';

describe('User component', () => {
    it('renders correctly with default props', () => {
        const { getByText, getByAltText } = render(<User title="John Doe" subtitle="Developer" src="/images/user.jpg" />);
        const titleElement = getByText('John Doe');
        const subtitleElement = getByText('Developer');
        const avatarElement = getByAltText('John Doe');

        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveAttribute('src', '/_next/image?url=%2Fimages%2Fuser.jpg&w=3840&q=75');
    });

    it('applies custom className', () => {
        const { container } = render(<User title="John Doe" subtitle="Developer" src="/images/user.jpg" className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('renders with correct styles', () => {
        const { getByText } = render(<User title="John Doe" subtitle="Developer" src="/images/user.jpg" />);
        const titleElement = getByText('John Doe');
        const subtitleElement = getByText('Developer');

        expect(titleElement).toHaveStyle({
            color: ThemeColors.Font,
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F12,
        });

        expect(subtitleElement).toHaveStyle({
            color: ThemeColors.Subtitle,
            fontWeight: FontWeightMap.regular,
            fontSize: FontSizeMap.F10,
        });
    });

    it('renders with correct margin', () => {
        const { container } = render(<User title="John Doe" subtitle="Developer" src="/images/user.jpg" />);
        const flexColElement = container.querySelector('.flex-col');

        expect(flexColElement).toHaveStyle({
            marginRight: SpacerSizeMap.S16,
        });
    });

    it('renders avatar with correct size', () => {
        const { getByAltText } = render(<User title="John Doe" subtitle="Developer" src="/images/user.jpg" />);
        const avatarElement = getByAltText('John Doe');

        expect(avatarElement).toHaveStyle({
            width: '100%',
            height: '100%',
        });
    });
});