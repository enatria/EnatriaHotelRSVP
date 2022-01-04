import React from 'react';
import {View, ScrollView} from 'react-native';
import {Badge} from '../../';

const ListRoomTypes = ({room}) => {
  const filteredRooms = room?.filter(item => item !== '');
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {filteredRooms?.map(item => (
        <Badge label={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default ListRoomTypes;
