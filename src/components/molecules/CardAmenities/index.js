import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List} from '../..';
import {colors} from '../../../utils';

const CardAmenities = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item?.heading}</Text>
        <View style={styles.list}>
          {item?.listItems?.map(amenitiy => (
            <List
              color="default"
              key={amenitiy.heading}
              label={amenitiy?.heading}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CardAmenities;

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
    fontSize: 15,
    marginVertical: 5,
    color: colors.dark,
    fontFamily: 'Poppins-Medium',
  },
  list: {
    flex: 1,
  },
});
