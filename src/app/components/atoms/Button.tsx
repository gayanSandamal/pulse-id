'use client';

import React from 'react';
import clsx from 'clsx';
import { ButtonProps, LabelTypesMap, SpacerSizeMap, ThemeColors } from '@/types/components';
import { Label } from './Label';
import styled from 'styled-components';
import { darken, lighten } from 'polished'
import Image from 'next/image';

const StyledButton = styled.button<{ size: string }>`
    padding-top: ${props => props.size === 'large' ? SpacerSizeMap.S8 : SpacerSizeMap.S4};
    padding-right: ${props => props.size === 'large' ? SpacerSizeMap.S24 : SpacerSizeMap.S10};
    padding-bottom: ${props => props.size === 'large' ? SpacerSizeMap.S8 : SpacerSizeMap.S4};
    padding-left: ${props => props.size === 'large' ? SpacerSizeMap.S24 : SpacerSizeMap.S10};
    min-height: ${props => props.size === 'large' ? SpacerSizeMap.S32 : SpacerSizeMap.S20};
        line-height: '1';
        background-color: ${ThemeColors.Primary};
        &:hover {
            background-color: ${lighten(0.1, ThemeColors.Primary)};
        }
        &:active {
            background-color: ${darken(0.1, ThemeColors.Primary)};
        }
`;

const charmButtonSize = (size: string) => {
    switch (size) {
        case 'large':
            return SpacerSizeMap.S48;
        case 'small':
            return SpacerSizeMap.S36;
        default:
            return SpacerSizeMap.S40;
    }
}

const StyledCharm = styled.button<{ size: string, outline: string }>`
        width: ${props => charmButtonSize(props.size)};
        height: ${props => charmButtonSize(props.size)};
        line-height: '1';
        color: ${ThemeColors.Primary};
        background-color: ${props => props.outline === 'true' ? 'transparent' : ThemeColors.Background};
        border: 1px solid ${props => props.outline === 'true' ? ThemeColors.Background : 'transparent'};
        &:active {
            background-color: ${darken(0.1, ThemeColors.Background)};
        }
`;

export default function Button({ size = 'large', label = '', charm = false, src = '', outline = false, onClick }: ButtonProps) {
    return (
        charm ?
            <StyledCharm
                size={size}
                onClick={onClick}
                className={clsx(
                    'flex items-center justify-center text-white font-medium rounded-full shadow transition-all'
                )}
                outline={outline ? 'true' : 'false'}
            >
                <Image
                    style={{ width: 12, height: 12 }}
                    src={src}
                    alt={label}
                    sizes='12px'
                    width={12}
                    height={12}
                    className="mx-auto"
                />
            </StyledCharm> :
            <StyledButton
                size={size}
                onClick={onClick}
                className={clsx(
                    'flex items-center justify-center text-white font-medium rounded-full shadow transition-all'
                )}
            >
                <Label type={LabelTypesMap.label} color={ThemeColors.Background}>{label}</Label>
            </StyledButton>
    );
}
