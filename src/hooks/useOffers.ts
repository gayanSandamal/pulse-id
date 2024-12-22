import { Offer } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

interface UseOffersResult {
  offers: Offer[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function useOffers(): UseOffersResult {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['offers'],
    queryFn: async () => {
      const response = await fetch('/api/offer');
      if (!response.ok) {
        throw new Error('Failed to fetch offers');
      }
      return response.json();
    }
  });

  return {
    offers: data,
    isLoading,
    isError
  };
}
