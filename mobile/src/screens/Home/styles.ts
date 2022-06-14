import { StyleSheet } from 'react-native';
import { globalStyles } from '../../assets/globalStyles';
import { layout } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingTop: layout.pixelSizeVertical(20),
  },
  search: {
    marginHorizontal: globalStyles.container.paddingHorizontal,
  },
  brandText: {
    fontSize: layout.fontPixel(30),
    fontWeight: '700',
  },
});
