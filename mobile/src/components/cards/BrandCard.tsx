import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, layout } from '../../constants';

type BrandCardProps = {
  brand: string;
  onPress: (brand: string) => void;
};

export const BrandCard = ({ brand, onPress }: BrandCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => onPress(brand)}>
      <Text>{brand}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    paddingVertical: layout.pixelSizeVertical(20),
    borderWidth: 0.5,
    borderColor: colors.primaryColorLight,
    marginBottom: layout.pixelSizeVertical(10),
    borderRadius: layout.fontPixel(5),
  },
});
