import { StyleSheet } from 'react-native';
import { globalStyles } from '../../assets/globalStyles';
import { colors, layout } from '../../constants';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: colors.primaryBg,
    borderTopRightRadius: layout.fontPixel(40),
    borderTopLeftRadius: layout.fontPixel(40),
    zIndex: 10,
    paddingHorizontal: globalStyles.container.paddingHorizontal,
    paddingVertical: layout.pixelSizeVertical(30),
  },
  featureImageContainer: {
    height: '110%',
  },
  featureImage: {
    flex: 1,
  },
  nameBox: {
    marginTop: layout.pixelSizeVertical(20),
  },
  divider: {
    height: layout.heightPixel(30),
  },
  name: {
    color: colors.primaryColorDark,
    fontSize: layout.fontPixel(18),
    fontWeight: '500',
  },
  descriptionTitle: {
    color: colors.primaryColorDark,
    fontSize: layout.fontPixel(16),
    paddingBottom: layout.pixelSizeVertical(10),
    fontWeight: '500',
  },
  description: {
    color: colors.primaryColorLight,
    fontSize: layout.fontPixel(14),
  },
  descriptionBox: {
    marginBottom: layout.pixelSizeVertical(50),
  },
  images: {
    marginVertical: layout.pixelSizeVertical(30),
    alignItems: 'center',
    flexGrow: 1,
  },
  imageBox: {
    width: layout.widthPixel(200),
    height: layout.heightPixel(200),
    marginRight: layout.pixelSizeHorizontal(20),
  },
  image: {
    flex: 1,
    borderRadius: layout.fontPixel(5),
    width: layout.widthPixel(200),
    height: layout.heightPixel(200),
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
