'use client';

import { useOffers } from '@/hooks/useOffers';
import { Avatar } from './atoms/Avatar';
import { useEffect } from 'react';

export default function OffersList() {
    const { offers, isLoading, isError } = useOffers();

    useEffect(() => {
        console.log('Offers:', JSON.stringify(offers))
    }, [offers])

    if (isLoading) return <p>Loading offers...</p>;
    if (isError) return <p>Failed to load offers.</p>;
    if (!offers || offers.length === 0) return <p>No offers available.</p>;

    return (
        <ul>
            {offers.map((offer: { images?: string[] }, index: number) => (
                <li key={index}>
                    {JSON.stringify(offer)}
                    <Avatar src={offer.images?.[0]} />
                </li>
            ))}
        </ul>
    );
}
