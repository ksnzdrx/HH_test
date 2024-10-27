import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { formatDate, isWithinSevenDays } from './utils';
import Category from './Category';
import Collapsible from 'react-native-collapsible';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import PostedDate from './PostedDate';

interface ProductItemProps {
  name: string;
  image: string;
  date: string;
  categories?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, image, date, categories }) => {
  const isNew = isWithinSevenDays(date);
  const postedDate = formatDate(date);
  const splitCategories = categories ? categories.split(",") : [];
  const trimmedCategories = splitCategories.map((it) => it.trim());
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
           <ProductImage imageUri={image} isCollapsed={isCollapsed}/>
         </View>

          <View style={styles.productDetailsContainer}>
            <ProductTitle name={name} isCollapsed={isCollapsed} isNew={isNew}/>
            <PostedDate date={postedDate}/>
            <Collapsible collapsed={isCollapsed}>
              <Category categories={trimmedCategories} />
            </Collapsible>
          </View>  
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: '#1B2633',
    shadowOpacity: 0.25,
  },
  contentContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FC',
    borderRadius: 4,
  },
  productDetailsContainer: {
    flex: 1,
    marginLeft:16,
  },
});

export default ProductItem;
