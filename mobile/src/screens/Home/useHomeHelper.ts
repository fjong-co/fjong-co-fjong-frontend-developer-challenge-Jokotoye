import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useBrandsQuery } from '../../hooks';
import { HomeScreenNavigationProp } from '../../navigations/types';

export const useHomeHelper = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isLoading, isError, data: brands } = useBrandsQuery();

  const [search, setSearch] = useState('');

  const handleBrandPress = (brand: string) => {
    navigation.navigate('Brand', {
      brand,
    });
  };

  const navigateSearchResult = () => {
    if (search) {
      navigation.navigate('SearchResult', {
        search,
      });
    }
  };

  return {
    isLoading,
    isError,
    brands,
    search,
    setSearch,
    navigateSearchResult,
    handleBrandPress,
  };
};
