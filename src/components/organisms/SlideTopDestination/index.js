/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { getDestinationId, setSearch } from '../../../redux/requiredForFetchSlice';
import { TopDestination, TopDestinationWithBg } from '../../molecules';

const SlideTopDestination = ({label, item, bg}) => {
  const styles = StyleSheet.create({
    margin: {
      marginTop: 12,
    },
    label: {
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      marginTop: 12,
      marginHorizontal: 12,
    },
  });

  const dispatch = useDispatch();
  const onPressHandler = (destinationId) => {
    dispatch(getDestinationId(destinationId));
    dispatch(setSearch(1));
  };

  return (
    <SafeAreaView>
      <Text style={styles.label}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.margin}>
        {item.map(i => (
          <TouchableOpacity onPress={() => onPressHandler(i.destinationId)} key={i.destinationId}>
            {bg ?
            <TopDestinationWithBg
              slide
              name={i.name}
              image={i.image} />
            :
            <TopDestination
              slide
              name={i.name} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlideTopDestination;
