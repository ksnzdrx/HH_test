import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const NewTag: React.FC = () => {
  return (
    <View style={[styles.newTagContainer]}>
      
      <Svg width={53} height={26} viewBox="0 0 53 26" fill="none">
          <Path
            d="M0 9C0 4.02944 4.02944 0 9 0H53V17C53 21.9706 48.9706 26 44 26H9C4.02944 26 0 21.9706 0 17V9Z"
            fill="#333333"
          />
          <Path
            d="M19.9203 18H18.1854L13.7349 10.9052V18H12V8H13.7349L18.1991 15.1223V8H19.9203V18Z"
            fill="white"
          />
          <Path
            d="M27.8063 13.5357H23.7056V16.6126H28.4989V18H21.9707V8H28.4509V9.4011H23.7056V12.1621H27.8063V13.5357Z"
            fill="white"
          />
          <Path
            d="M37.7427 15.5275L39.2788 8H41L38.6959 18H37.0364L35.1369 10.6992L33.1963 18H31.5299L29.2258 8H30.947L32.4968 15.5137L34.4032 8H35.8569L37.7427 15.5275Z"
            fill="white"
          />
        </Svg>
      
    </View>
  );
};

const styles = StyleSheet.create({
    newTagContainer: {
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 0,
      justifyContent: 'flex-end',
    },
    newTagBackground: {     // not needed, was used for manual styling of the new tag
      backgroundColor: '#333333', 
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderTopLeftRadius: 9,
      borderBottomLeftRadius: 9,
      borderBottomRightRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
    },
    newTagText: {     // not needed, was used for manual styling of the new tag
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '900',
      letterSpacing: 1,
      textTransform: 'uppercase',
      textAlign: 'center', 
      fontFamily: 'Roboto',
    }, 
  });
  
  

export default NewTag;