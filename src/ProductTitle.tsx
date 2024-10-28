import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Arrow from './Arrow';
import NewTag from './NewTag';

interface ProductTitleProps {
  name: string;
  isNew: boolean;
  isCollapsed: boolean;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ name, isNew, isCollapsed }) => (
  <View style={styles.titleContainer}>
      <View style={isNew ? styles.nameContainerWithNew : styles.nameContainerFull}>
        <Text style={styles.title} numberOfLines={isCollapsed ? 1 : undefined}>
          {name}
        </Text>
      </View>
      <View style={styles.arrowNewContainer}>
        {isNew && <NewTag />}
        <Arrow isCollapsed={isCollapsed} />
      </View>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainerWithNew: {
    flex: 0.5,
  },
  nameContainerFull: {
    flex: 1,
  },
  arrowNewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    flexWrap: 'wrap',
    textTransform: 'capitalize',
  },
});

export default ProductTitle;
