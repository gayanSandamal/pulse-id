import { ReactNode } from "react";

export enum ThemeColors {
    Primary = '#FF9800',
    Background = '#FFFFFF',
    Font = '#000000',
    Subtitle = '#AD9D87',
    Inactive = '#D0D0D0'
}

export enum FontWeightMap {
    light = 300,
    regular = 400,
    medium = 500,
    semibold = 600,
    bold = 800,
}

export enum FontSizeMap {
    F8 = '0.5rem',
    F10 = '0.625rem',
    F12 = '0.75rem',
    F14 = '0.875rem',
    F16 = '1rem',
}

export enum LabelTypesMap {
    sectionTitle = 'sectionTitle',
    offerCardTitle = 'offerCardTitle',
    offerCardSubtitle = 'offerCardSubtitle',
    offerCardSmall = 'offerCardSmall',
    productCardTitle = 'productCardTitle',
    productCardSubtitle = 'productCardSubtitle',
    link = 'link',
    label = 'label',
    filter = 'filter',
    filterBold = 'filterBold',
    storyTitle = 'storyTitle',
    userSubtitle = 'userSubtitle',
    popupAction = 'popupAction',
    review = 'review',
}

export type LabelProps = {
    children: ReactNode;
    type?: LabelTypesMap;
    className?: string;
    color?: ThemeColors;
    containerStyles?: Record<string, string | number>;
}

export enum AvatarSizeMap {
    small = 36,
    medium = 62,
}

export type AvatarProps = {
    src?: string;
    alt?: string;
    size?: AvatarSizeMap;
    className?: string;
}

export enum SpacerSizeMap {
    S4 = '4px',
    S8 = '8px',
    S10 = '10px',
    S12 = '12px',
    S14 = '14px',
    S16 = '16px',
    S20 = '20px',
    S24 = '24px',
    S30 = '30px',
    S32 = '32px',
    S36 = '36px',
    S40 = '40px',
    S48 = '48px',
}

export type UserProps = {
    title: string;
    subtitle?: string;
    src?: string;
    className?: string;
}

export type Link = {
    href: string;
    label?: string;
}

export type SectionProps = {
    title: string;
    children: ReactNode;
    more?: Link,
    contentPadding?: boolean;
}

export type CityCircleProps = {
    src: string;
    className?: string;
} & Link;

export enum RadiusMap {
    small = '8px',
    medium = '16px',
    large = '24px',
}

export type SliderImage = {
    id: number;
    src: string;
    alt?: string;
}

export type ImageSliderProps = {
    images: SliderImage[];
    width?: number | string;
}

export type ButtonProps = {
    size?: 'small' | 'large';
    src?: string;
    label?: string;
    charm?: boolean;
    outline?: boolean;
    onClick?: () => void;
};

export type CardProps = {
    children: ReactNode;
    className?: string; // Optional custom styles
};