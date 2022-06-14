import { useRoute } from '@react-navigation/native';
import { useOutfitQuery } from '../../hooks';
import { BrandRouteProp } from '../../navigations/types';

export const useBrandHelper = () => {
  const {
    params: { brand },
  } = useRoute<BrandRouteProp>();

  const { isLoading, error, isError, data: outfits } = useOutfitQuery({ brand });
  const outfit = outfits?.[0];

  const featureImageUri = '../../' + outfits?.[0].images?.[0];

  return {
    brand,
    isLoading,
    isError,
    error,
    featureImageUri,
    outfit,
  };
};
