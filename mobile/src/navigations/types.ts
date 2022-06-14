import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Brand: {
    brand: string;
  };
  SearchResult: {
    search: string;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type BrandScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Brand'>;
export type BrandRouteProp = RouteProp<RootStackParamList, 'Brand'>;

export type SearchResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SearchResult'
>;
export type SearchResultRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;
