import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ProductImageProps {
  imageUri?: string;
  isCollapsed: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUri, isCollapsed }) => {
  const placeholderNeeded = !imageUri;

  return (
    <View style={styles.imageContainer}>
      <Image
        style={[styles.image, isCollapsed && styles.collapsedImage]}
        source={
          placeholderNeeded
            ? require('../assets/placeholder.png')
            : { uri: imageUri } as ImageSourcePropType
        }
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  image: {
    height: 113,
    width: 85,
  },
  collapsedImage: {
    height: 64,
    width: 85,
  },
});

export default ProductImage;