import React from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { globalStyles } from '../../assets/globalStyles';
import { colors, layout } from '../../constants';

type SearchBarProps = TextInput['props'] & {
  value: string;
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>;
};

export const SearchBar = ({
  value,
  placeholder = 'Search activities',
  containerStyles,
  ...rest
}: SearchBarProps) => {
  return (
    <View style={[styles.container, globalStyles.rowBetween, containerStyles]}>
      <View style={[styles.iconBox, globalStyles.rowCenter]}>
        <Feather name="search" size={20} color={colors.secondaryColor} />
      </View>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.primaryColorLight}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const height = layout.heightPixel(50);

const styles = StyleSheet.create({
  container: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: colors.secondaryBgLight,
    borderRadius: layout.pixelSizeHorizontal(8),
    marginTop: layout.pixelSizeVertical(20),
  },
  iconBox: {
    flexBasis: '10%',
  },
  input: {
    flex: 1,
    height,
    paddingRight: layout.pixelSizeHorizontal(20),
    fontSize: layout.fontPixel(14),
  },
  searchBox: {
    backgroundColor: colors.secondaryColor,
    height: height / 1.3,
    borderRadius: height / 2,
    width: height / 1.3,
    marginRight: layout.pixelSizeHorizontal(10),
  },
});
