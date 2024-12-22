import { Merchant, MerchantDto, Offer } from '@/types/api';

export const toMerchantDto = (merchant: Merchant): MerchantDto => {
    return {
        id: merchant.id,
        name: merchant.name,
        image: merchant.image,
        categoryName: merchant.category.name,
        website: merchant.website,
        returnPeriod: merchant.returnPeriod,
    };
}

export const getMerchantsFromOffers = (offers: Offer[]): MerchantDto[] => {
    const uniqueMerchants = new Map<number, Offer['merchant']>();

    for (const offer of offers) {
        if (!uniqueMerchants.has(offer.merchant.id)) {
            uniqueMerchants.set(offer.merchant.id, offer.merchant);
        }
    }

    return Array.from(uniqueMerchants.values()).map((merchant) =>
        toMerchantDto(merchant)
    );
}
