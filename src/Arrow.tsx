import React from 'react';
import { Image, StyleSheet, ViewStyle } from 'react-native';

interface ArrowProps {
  isCollapsed: boolean;
  style?: ViewStyle;
}

const Arrow: React.FC<ArrowProps> = ({ isCollapsed }) => (
  <Image
    style={[styles.arrow, { transform: [{ rotate: isCollapsed ? '180deg' : '0deg' }] }]}
    source={require('../assets/arrowUp.png')}
    resizeMode="contain"
  />
);

const styles = StyleSheet.create({
  arrow: {
    height: 6.59,
    width: 11.18,
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default Arrow;