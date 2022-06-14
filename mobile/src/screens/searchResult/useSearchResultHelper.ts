import { useRoute, useNavigation } from '@react-navigation/native';

import { useSearchQuery } from '../../hooks';
import { SearchResultRouteProp, SearchResultScreenNavigationProp } from '../../navigations/types';

export const useSearchResultHelper = () => {
  const navigation = useNavigation<SearchResultScreenNavigationProp>();
  const {
    params: { search },
  } = useRoute<SearchResultRouteProp>();

  const { isLoading, data: outfits } = useSearchQuery({ search });

  const handleBrandPress = (brand: string) => {
    navigation.navigate('Brand', {
      brand,
    });
  };

  return {
    isLoading,
    outfits,
    handleBrandPress,
  };
};
