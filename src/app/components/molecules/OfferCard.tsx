'use client';

import React from 'react';
import Card from '../templates/Card';
import { Label } from '../atoms/Label';
import { LabelTypesMap, SpacerSizeMap, ThemeColors } from '@/types/components';
import Button from '../atoms/Button';
import Image from 'next/image';

const OfferCard = () => {
    return (
        <Card>
            <div className="flex flex-col" style={{ marginBottom: SpacerSizeMap.S24 }}>
                <Label type={LabelTypesMap.offerCardTitle} color={ThemeColors.Primary} containerStyles={{ marginBottom: SpacerSizeMap.S12 }}>Get Special Offers</Label>
                <div style={{ width: '100%', maxWidth: '170px', lineHeight: '1' }}>
                    <Label type={LabelTypesMap.offerCardSubtitle} color={ThemeColors.Font} containerStyles={{ lineHeight: '1' }}>Many offers waiting for you, get it now</Label>
                </div>
            </div>
            <Button onClick={() => { }} label="Add a card" />
            <div className="absolute svg-container top-0 right-0 flex items-center justify-center h-full w-[50%]">
                <Image
                    src="/images/card-offer.svg"
                    alt="Special Offers"
                    width={147} // Adjust width as needed
                    height={131} // Adjust height as needed
                    className="mx-auto" // Center the SVG
                />
            </div>
        </Card>
    );
}

export default OfferCard;