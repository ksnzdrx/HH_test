import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CategoryProps {
  categories: string[];
}

const Category: React.FC<CategoryProps> = ({ categories }) => {
  return (
    <View style={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <View key={index} style={styles.category}>
          <Text style={styles.categoryItem}>
            {category}
          </Text>
        </View>
      ))}
    </View>
  );
};
  
const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
  category: {
    backgroundColor: '#D4E5FF',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  categoryItem: {
    fontSize: 14,
    color: '#333333',
  }
});

export default Category;