import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';

import { BrandCard, SearchBar } from '../../components';
import { useHomeHelper } from './useHomeHelper';
import { globalStyles } from '../../assets/globalStyles';
import { styles } from './styles';
import { layout } from '../../constants';

export const Home = () => {
  const { isLoading, isError, brands, search, setSearch, navigateSearchResult, handleBrandPress } =
    useHomeHelper();

  if (isLoading) {
    return (
      <View style={[globalStyles.wrapper, globalStyles.rowCenter]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[globalStyles.wrapper, globalStyles.rowCenter]}>
        <Text>Error occurred</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <SearchBar
        value={search}
        onChangeText={(value) => setSearch(value)}
        containerStyles={[styles.search]}
        placeholder="Search outfit"
        onEndEditing={navigateSearchResult}
        onSubmitEditing={navigateSearchResult}
        keyboardType="web-search"
        autoCapitalize="none"
      />
      <FlatList
        data={brands}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <BrandCard brand={item} onPress={handleBrandPress} />}
        contentContainerStyle={[globalStyles.container, styles.container]}
        ListHeaderComponent={
          <View style={{ marginBottom: layout.pixelSizeVertical(20) }}>
            <Text style={styles.brandText}>Brands</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};
