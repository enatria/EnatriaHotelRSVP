import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from './components';

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Hai</Text>
      <Button title="button" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default App;
