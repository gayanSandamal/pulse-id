'use client';

import clsx from 'clsx';
import { FontSizeMap, FontWeightMap, LabelProps, LabelTypesMap, ThemeColors } from '@/types/components';

export const Label = (LabelProps: LabelProps) => {
    const { children, type = LabelTypesMap.label, className, color = ThemeColors.Font, containerStyles } = LabelProps;

    const labelTypeStyles = {
        [LabelTypesMap.offerCardTitle]: {
            fontWeight: FontWeightMap.semibold,
            fontSize: FontSizeMap.F16,
        },
        [LabelTypesMap.popupAction]: {
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F16,
        },
        [LabelTypesMap.sectionTitle]: {
            fontWeight: FontWeightMap.semibold,
            fontSize: FontSizeMap.F14,
        },
        [LabelTypesMap.storyTitle]: {
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F14,
        },
        [LabelTypesMap.link]: {
            fontWeight: FontWeightMap.semibold,
            fontSize: FontSizeMap.F12,
        },
        [LabelTypesMap.label]: {
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F12,
        },
        [LabelTypesMap.filterBold]: {
            fontWeight: FontWeightMap.bold,
            fontSize: FontSizeMap.F12,
        },
        [LabelTypesMap.filter]: {
            fontWeight: FontWeightMap.regular,
            fontSize: FontSizeMap.F12,
        },
        [LabelTypesMap.offerCardSubtitle]: {
            fontWeight: FontWeightMap.light,
            fontSize: FontSizeMap.F12,
        },
        [LabelTypesMap.offerCardSmall]: {
            fontWeight: FontWeightMap.light,
            fontSize: FontSizeMap.F10,
        },
        [LabelTypesMap.review]: {
            fontWeight: FontWeightMap.semibold,
            fontSize: FontSizeMap.F10,
        },
        [LabelTypesMap.productCardTitle]: {
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F10,
        },
        [LabelTypesMap.userSubtitle]: {
            fontWeight: FontWeightMap.regular,
            fontSize: FontSizeMap.F10,
        },
        [LabelTypesMap.productCardSubtitle]: {
            fontWeight: FontWeightMap.medium,
            fontSize: FontSizeMap.F8,
        },
    }

    const styles = {
        color,
        ...labelTypeStyles[type],
        ...containerStyles,
    }

    return (
        <span
            className={clsx(className)}
            style={styles}
        >
            {children}
        </span>
    );
}
