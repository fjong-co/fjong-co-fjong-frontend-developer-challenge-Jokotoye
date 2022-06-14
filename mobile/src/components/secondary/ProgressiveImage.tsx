import React, { useState } from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type ProgressiveImageProps = Omit<Image['props'], 'source'> & {
  uri: string | undefined;
  containerStyle: StyleProp<ViewStyle>;
};

export const ProgressiveImage = ({ uri, containerStyle, ...rest }: ProgressiveImageProps) => {
  const [] = useState();

  return (
    <View style={containerStyle}>
      <Image
        defaultSource={require('../../assets/images/default.png')}
        source={{
          uri:
            uri ||
            'https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png',
        }}
        resizeMode="cover"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
