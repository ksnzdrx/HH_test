import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewTag: React.FC = () => {
  return (
    <View style={[styles.newTagContainer]}>
      <View style={styles.newTagBackground}>
        <Text style={styles.newTagText}>NEW</Text>
      </View>
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
    newTagBackground: {
      backgroundColor: '#333333', 
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderTopLeftRadius: 9,
      borderBottomLeftRadius: 9,
      borderBottomRightRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
    },
    newTagText: {
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