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
            <div className="flex flex-col mb-6">
                <Label type={LabelTypesMap.offerCardTitle} color={ThemeColors.Primary} containerStyles={{ marginBottom: SpacerSizeMap.S12 }}>
                    Get Special Offers
                </Label>
                <div className="w-full max-w-[170px] leading-none">
                    <Label type={LabelTypesMap.offerCardSubtitle} color={ThemeColors.Font}>
                        Many offers waiting for you, get it now
                    </Label>
                </div>
            </div>
            <Button onClick={() => { console.log('Add a card clicked'); }} label="Add a card" />
            <div className="absolute svg-container top-0 right-0 flex items-center justify-center h-full w-[50%]">
                <Image
                    src="/images/card-offer.svg"
                    alt="Special Offers"
                    width={147}
                    height={131}
                    className="mx-auto"
                />
            </div>
        </Card>
    );
}

export default OfferCard;