import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label } from '@/app/components/atoms/Label';
import { FontSizeMap, FontWeightMap, LabelTypesMap, ThemeColors } from '@/types/components';

describe('Label component', () => {
    it('renders correctly with default props', () => {
        const { getByText } = render(<Label>Default Label</Label>);
        const labelElement = getByText('Default Label');
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveStyle({
            color: ThemeColors.Font,
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F12,
        });
    });

    it('applies custom className', () => {
        const { container } = render(<Label className="custom-class">Label with class</Label>);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
        const customStyles = { margin: '10px' };
        const { getByText } = render(<Label containerStyles={customStyles}>Label with styles</Label>);
        const labelElement = getByText('Label with styles');
        expect(labelElement).toHaveStyle(customStyles);
    });

    it('renders with different label types', () => {
        const { getByText } = render(<Label type={LabelTypesMap.offerCardTitle}>Offer Card Title</Label>);
        const labelElement = getByText('Offer Card Title');
        expect(labelElement).toHaveStyle({
            fontWeight: FontWeightMap.semibold,
            fontSize: FontSizeMap.F16,
        });
    });

    it('renders with different colors', () => {
        const { getByText } = render(<Label color={ThemeColors.Font}>Label with color</Label>);
        const labelElement = getByText('Label with color');
        expect(labelElement).toHaveStyle({
            color: ThemeColors.Font,
        });
    });
});