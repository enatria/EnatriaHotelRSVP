import React from 'react';
import {View, ScrollView} from 'react-native';
import {Badge} from '../../';

const ListRoomTypes = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <Badge label="Classic Double Room, 1 King Bed" />
      <Badge label="Classic Double Room, 1 King Bed" />
      <Badge label="Classic Double Room, 1 King Bed" />
      <Badge label="Classic Double Room, 1 King Bed" />
    </ScrollView>
  );
};

export default ListRoomTypes;
