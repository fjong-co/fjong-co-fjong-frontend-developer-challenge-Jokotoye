import React from 'react';
import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';

import { ProgressiveImage, SafeAreaView } from '../../components';
import { useBrandHelper } from './useBrandHelper';
import { globalStyles } from '../../assets/globalStyles';
import { styles } from './styles';

export const Brand = () => {
  const { width } = useWindowDimensions();

  const { brand, isLoading, featureImageUri, isError, outfit } = useBrandHelper();

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
        <Text>Error occured</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={[globalStyles.wrapper, { backgroundColor: '#eee' }]}
    >
      <View style={styles.header}>
        <ProgressiveImage
          uri={outfit?.images[0]}
          containerStyle={styles.featureImage}
          style={styles.featureImageContainer}
        />
      </View>
      <View style={styles.body}>
        <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <Text style={styles.name}>{outfit?.name}</Text>
          <View style={[styles.images]}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scroll}
            >
              {outfit?.images.map((image, index) => {
                return (
                  <ProgressiveImage
                    key={index}
                    uri={image}
                    containerStyle={styles.imageBox}
                    style={styles.image}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>Description</Text>
            {outfit?.description ? (
              <Text style={styles.description}>{outfit?.description}</Text>
            ) : (
              <Text style={styles.description}>No description</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
