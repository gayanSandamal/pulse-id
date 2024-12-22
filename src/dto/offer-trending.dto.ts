import { Offer, OfferTrendingDto, RewardType } from '@/types/api';
import { SliderImage } from '@/types/components';

export const toTrendingOffersDto = (offers: Offer[]): OfferTrendingDto[] => {
    return offers.map((offer) => {
        let score = 0;

        // Reward >= 20% or >= $5
        if (
            (offer.rewardType === RewardType.PERCENTAGE && offer.rewardValue >= 20) ||
            (offer.rewardType === RewardType.FIXED && offer.rewardValue >= 5)
        ) {
            score += 1;
        }

        // 3. If totalRedemptions is available and above some threshold
        // if (offer.totalRedemptions && offer.totalRedemptions > 100) {
        //   score += 1;
        // }

        const isTrending = score >= 1;

        return {
            id: offer.id,
            title: offer.title,
            merchant: offer.merchant?.name,
            rewardType: offer.rewardType,
            rewardValue: offer.rewardValue,
            published: offer.published,
            isTrending,
            score,
            image: offer.images?.[0],
        };
    }).filter((dto) => dto.isTrending) || []
}

export const trendingOffersToSliderDto = (offers: OfferTrendingDto[]): SliderImage[] => {
    return offers.map((offer: OfferTrendingDto): SliderImage => {
        return {
            id: offer.id,
            src: offer.image && offer.image.trim() ? offer.image : '/images/image-placeholder.png',
            alt: offer.title,
        };
    });
};