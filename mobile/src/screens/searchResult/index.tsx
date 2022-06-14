import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../../assets/globalStyles';
import { BrandCard, SafeAreaView } from '../../components';
import { useSearchResultHelper } from './useSearchResultHelper';
import { styles } from './styles';

export const SearchResult = () => {
  const { isLoading, outfits, handleBrandPress } = useSearchResultHelper();

  if (isLoading) {
    return (
      <View style={[globalStyles.wrapper, globalStyles.rowCenter]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={outfits}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <BrandCard brand={item.brands[0]} onPress={() => handleBrandPress(item.brands[0])} />
        )}
        contentContainerStyle={[globalStyles.container, styles.container]}
        ListEmptyComponent={
          <View style={[globalStyles.wrapper, globalStyles.rowCenter]}>
            <Text>No outfits found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};
