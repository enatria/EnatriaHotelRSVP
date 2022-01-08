/* eslint-disable radix */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Rating} from 'react-native-ratings';
import {colors} from '../../../utils';

const CardReview = ({item}) => {
  const date = new Date(Number(item?.postedOn)).toLocaleDateString();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
          <Text style={styles.subtitle}>
            {item?.title ? item?.title : item?.qualitativeBadgeText}
          </Text>
        </View>
        <View style={styles.rating}>
          <Rating
            type="custom"
            fractions={1}
            startingValue={parseInt(item?.rating) / 2}
            readonly
            imageSize={12}
            tintColor="white"
            ratingBackgroundColor="#c8c7c8"
            // onFinishRating={ratingCompleted}}
          />
        </View>
      </View>

      <Text style={styles.summary}>{item?.summary}</Text>
      <View>
        <View style={styles.cardBottom}>
          <Text style={styles.author}>by {item?.recommendedBy}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    border: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#0001',
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: colors.dark,
    fontFamily: 'Poppins-Medium',
    lineHeight: 30,
  },
  rating: {
    backgroundColor: 'transparent',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  summary: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
  cardBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
});
