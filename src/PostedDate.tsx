import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PostedDateProps {
  date: string;
}

const PostedDate: React.FC<PostedDateProps> = ({ date }) => {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flex: 0.5,
    marginTop: 2,
    marginBottom: 12,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
});

export default PostedDate;