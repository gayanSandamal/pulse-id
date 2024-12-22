'use client';

import Section from './components/templates/Section';
import { Cities } from './components/organisms/CitiesList';
import ImageSlider from './components/molecules/ImageSlider';
import { useOffers } from '@/hooks/useOffers';
import { toTrendingOffersDto, trendingOffersToSliderDto } from '@/dto/offer-trending.dto';
import OfferCard from './components/molecules/OfferCard';
import Popup from './components/templates/Popup';
import { useEffect, useState, useMemo } from 'react';

export default function Page() {
  const { offers, isLoading, isError } = useOffers();
  const [isOpen, setIsOpen] = useState(false);

  const setModalVisibility = (visibility: boolean) => setIsOpen(visibility);

  const trendingOffers = useMemo(() => toTrendingOffersDto(offers || []), [offers]);
  const trendingOfferSlides = useMemo(() => trendingOffersToSliderDto(trendingOffers), [trendingOffers]);

  const randomOffer = useMemo(() => trendingOffers[Math.floor(Math.random() * trendingOffers.length)], [trendingOffers]);
  const randomReviewCount = useMemo(() => Math.floor(Math.random() * 1000), []);
  const randomRating = useMemo(() => parseFloat((Math.random() * 5).toFixed(1)), []);

  useEffect(() => {
    if (randomOffer) {
      setModalVisibility(true);
      console.log('Random offer:', randomOffer);
      
    }
  }, [randomOffer]);

  if (isLoading) return <p>Loading offers...</p>;
  if (isError) return <p>Failed to load offers.</p>;
  if (!offers || offers.length === 0) return <p>No offers available.</p>;

  return (
    <main className="pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Section title="Discover Your City!" more={{ href: '/cities', label: 'View all' }} contentPadding={false}>
            <Cities />
          </Section>
          <Section title="Trending Offers" contentPadding={true}>
            <ImageSlider images={trendingOfferSlides} />
          </Section>
          <Section title="Add Card for Special Offers" contentPadding={true}>
            <OfferCard />
          </Section>
        </div>
      </div>
      {randomOffer && (
        <Popup
          isOpen={isOpen}
          onClose={() => setModalVisibility(false)}
          title={randomOffer.merchant || ''}
          location="Tokyo"
          reviews={randomReviewCount}
          rating={randomRating}
          imageSrc={randomOffer.image}
        />
      )}
    </main>
  );
}
