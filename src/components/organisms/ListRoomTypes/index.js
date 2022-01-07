import React from 'react';
import {View, ScrollView} from 'react-native';
import {Badge} from '../../';

const ListRoomTypes = ({room}) => {
  const filteredRooms = room?.filter(item => item !== '');
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {filteredRooms?.map((item, i) => (
        <Badge label={item} key={i} />
      ))}
    </ScrollView>
  );
};

export default ListRoomTypes;
