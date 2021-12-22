import React from 'react';
import {View, Image} from 'react-native';

const Avatar = ({source, width, height}) => {
  const styles = {
    container: {
      borderRadius: '100%',
    },
  };

  return (
    <View style={styles.container}>
      <Image style={{width: width, height: height}} source={source} />
    </View>
  );
};

export default Avatar;
