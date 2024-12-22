/** Days on which an offer is valid */
export enum EligibleDay {
    EVERYDAY = 'EVERYDAY',
}

/** Sales channel where the offer applies */
export enum SalesChannel {
    ALL = 'ALL',
    E_COMMERCE = 'E-COMMERCE',
}

/** Whether an offer’s reward is a fixed amount or a percentage */
export enum RewardType {
    FIXED = 'FIXED',
    PERCENTAGE = 'PERCENTAGE',
}

/** Reward frequency values */
export enum RewardFrequency {
    EVERY = 'EVERY',
    NEVER = 'NEVER',
}

/** Eligible segments for the offer */
export enum Segment {
    NEW = 'NEW',
    LAPSED = 'LAPSED',
    LOYAL = 'LOYAL',
}

/** Types of card products */
export enum CardProductType {
    ALL = 'ALL',
}

/** Possible funding models */
export enum FundingModel {
    PRE = 'PRE',
}

/** Common currency codes found in your dataset */
export enum CurrencyCode {
    USD = 'USD',
    SGD = 'SGD',
    JPY = 'JPY',
}

/** Merchant category information */
export interface MerchantCategory {
    name: string;
}

/** Merchant details associated with an offer */
export interface Merchant {
    id: number;
    name: string;
    image: string;
    category: MerchantCategory;
    website: string | null;
    returnPeriod: string | null;
}

export interface MerchantDto {
    id: number;
    name: string;
    image: string;
    categoryName: string;
    website?: string | null;
    returnPeriod?: string | null;
}

export interface Offer {
    id: number;
    eligibleDays: EligibleDay[];
    title: string;
    salesChannel: SalesChannel;
    validFrom: string | null;           // e.g., "2023-09-07T00:00:00.000"
    validFromUTC: string | null;        // e.g., "2023-09-06T18:30:00.000Z"
    validTo: string | null;             // nullable in dataset
    validToUTC: string | null;          // nullable in dataset
    published: string | null;           // date string, or null if not published
    description: string | null;
    timezone: string;
    termsAndConditions: string | null;
    images: string[];                   // array of image URLs
    maximumRewardValue: number | null;
    minimumTransactions: number | null;
    minimumSpend: number | null;
    rewardType: RewardType;
    rewardValue: number;                // could be integer or float (e.g., 7.7)
    rewardPointsPerAmount: number | null;
    rewardEveryTransaction: boolean;
    rewardFrequency: RewardFrequency | null; // can be 'EVERY', 'NEVER', or null
    customerRedemptionLimit: number | null;
    repeatFrequency: RewardFrequency | null; // some items have "NEVER" or null
    budget: number | null;
    balanceBudget: number | null;
    redemptionLimit: number | null;
    redemptionsRemaining: number | null;
    eligibleSegments: Segment[];         // array like ['NEW', 'LAPSED', 'LOYAL']
    cardProductTypes: CardProductType[];
    merchant: Merchant;
    tags: string[];                      // typically empty arrays in your dataset
    activationRequired: boolean;
    currency: CurrencyCode;              // 'USD', 'JPY', 'SGD', etc.
    fundingModel: FundingModel;
    defaultLanguageCode: string;         // e.g., 'en', 'ja'
    defaultLanguageLabel: string;        // e.g., 'English', 'Japanese'
    defaultLanguageNative: string;       // e.g., 'English', '日本語'
    language: string;                    // current language code
    remarks: string | null;
    trackingUrl: string | null;
    couponCode: string | null;
    countries: string[];                 // e.g., ['ALL'] 
    countryNames: string[];              // e.g., ['All']
    totalRedemptions: number | null;
    tncURL: string | null;
    tncText: string | null;
}

export type OfferTrendingDto = {
    id: number;
    title: string;
    merchant?: string;
    image: string;
    rewardType: RewardType;
    rewardValue: number;
    published: string | null;
    isTrending: boolean;
    score: number;
}