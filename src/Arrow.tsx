import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ArrowProps {
  isCollapsed: boolean;
  style?: ViewStyle;
}

const Arrow: React.FC<ArrowProps> = ({ isCollapsed }) => (
  <Svg
    width={12}
    height={7}
    viewBox="0 0 12 7"
    style={[
      styles.arrow,
      { transform: [{ rotate: isCollapsed ? '180deg' : '0deg' }] },
    ]}
  >
    <Path
      d="M5.29 0.70998L0.700001 5.29998C0.310001 5.68998 0.310001 6.31998 0.700001 6.70998C1.09 7.09998 1.72 7.09998 2.11 6.70998L6 2.82998L9.88 6.70998C10.27 7.09998 10.9 7.09998 11.29 6.70998C11.68 6.31998 11.68 5.68998 11.29 5.29998L6.7 0.70998C6.32 0.31998 5.68 0.31998 5.29 0.70998Z"
      fill="#5E646E"
    />
  </Svg>
);

const styles = StyleSheet.create({    
  arrow: {          // not needed as replaces with svg
    height: 6.59,
    width: 11.18,
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default Arrow;