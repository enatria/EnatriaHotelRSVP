import React from 'react';
import {View, Text} from 'react-native';

const SubTitle = ({title}) => {
  return (
    <View>
      <Text
        style={{fontSize: 18, fontFamily: 'Poppins-SemiBold', color: 'black'}}>
        {title}
      </Text>
    </View>
  );
};

export default SubTitle;
