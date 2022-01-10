/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { getDestinationId, setSearch } from '../../../redux/requiredForFetchSlice';
import { TopDestination } from '../../molecules';

const SlideTopDestination = ({label, item}) => {
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
      <ScrollView horizontal style={styles.margin}>
        {item.map(i => (
          <TouchableOpacity onPress={() => onPressHandler(i.destinationId)} key={i.destinationId}>
            <TopDestination
              slide
              name={i.name} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlideTopDestination;
