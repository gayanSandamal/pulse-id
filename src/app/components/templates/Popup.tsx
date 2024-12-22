'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';
import { darken } from 'polished';
import styled from 'styled-components';
import { LabelTypesMap, SpacerSizeMap, ThemeColors } from '@/types/components';
import { Label } from '../atoms/Label';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    location: string;
    reviews: number;
    rating: number;
    imageSrc: string;
};

const StyledSeeMore = styled.div`
    background-color: ${darken(0.1, ThemeColors.Primary)};
    border-radius: ${SpacerSizeMap.S24};
    padding: ${SpacerSizeMap.S4};
`;

import { modalStyles } from '@/styles/popupModalStyles';

export default function Popup({
    isOpen,
    onClose,
    title,
    location,
    reviews,
    rating = 0,
    imageSrc,
}: ModalProps) {
    if (!isOpen) return null;

    const StyledPopup = styled.div`
        background-image: url(${imageSrc});
        padding: ${SpacerSizeMap.S16};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 385px;
    `;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" style={modalStyles.container}>
            <StyledPopup className="relative bg-white rounded-2xl overflow-hidden w-96 max-w-full shadow-lg">
                <div className='absolute w-full h-full bg-black bg-opacity-50 top-0 left-0 z-0'></div>
                <div className='relative flex flex-row items-center justify-between w-full z-10'>
                    <Image
                        src={'/images/logo.png'}
                        alt={'Logo'}
                        sizes={'37px'}
                        width={37}
                        height={28}
                        className="object-cover"
                    />
                    <Button onClick={onClose} charm src='/images/close.svg' outline />
                </div>

                <div className="absolute z-10" style={modalStyles.content}>
                    <span
                        className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-flex items-center justify-center"
                        style={{
                            backgroundColor: '#FFF4E4',
                            paddingLeft: SpacerSizeMap.S8,
                            paddingRight: SpacerSizeMap.S8,
                            height: SpacerSizeMap.S24,
                        }}>
                        <Label type={LabelTypesMap.productCardTitle} color={ThemeColors.Primary}>{location}</Label>
                    </span>
                    <div className="block" style={modalStyles.titleContainer}>
                        <Label type={LabelTypesMap.offerCardTitle} color={ThemeColors.Background}>{title}</Label>
                    </div>

                    {/* Rating and Reviews */}
                    <div className='inline-flex items-center justify-between' style={modalStyles.ratingsContainer}>
                        <div className="inline-flex items-center space-x-2 text-sm text-gray-500" style={modalStyles.ratingsInnerContainer}>
                            <span className="relative flex items-center" style={modalStyles.startContainer}>
                                <Image
                                    src="/images/star.svg"
                                    alt={'star'}
                                    fill
                                    className="object-cover"
                                    sizes='15px'
                                />
                            </span>
                            <Label type={LabelTypesMap.review} color={ThemeColors.Background}>{rating}</Label>
                        </div>
                        <Label type={LabelTypesMap.review} color={ThemeColors.Background} containerStyles={{ marginLeft: 10 }}>{reviews} reviews</Label>
                    </div>

                    <StyledSeeMore className='flex items-center justify-between'>
                        <div className="flex items-center justify-center" style={modalStyles.seeMoreLabelContainer}>
                            <Label type={LabelTypesMap.popupAction} color={ThemeColors.Background}>See more</Label>
                        </div>
                        <Button onClick={() => { }} size='small' charm src='/images/chevron-right.svg' />
                    </StyledSeeMore>
                </div>
            </StyledPopup>
        </div>
    );
}
