/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const CardInformation = () => {
  const [nama, onNama] = React.useState(null);
  const [email, onEmail] = React.useState(null);
  const [noHP, onNoHP] = React.useState('+62');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTACT INFORMATIONS</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText={onNama}
          value={nama}
          placeholderTextColor="#acadac"
          placeholder="zainal abidin"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onEmail}
          value={email}
          placeholderTextColor="#acadac"
          placeholder="zainalabidinhsc@gmail.com"
          keyboardType="text"
        />
        <View style={styles.number_hp}>
          <TextInput
            style={styles.input}
            onChangeText={onNoHP}
            value={noHP}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input_nohp}
            placeholderTextColor="#acadac"
            placeholder="82-332-477-256"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  box: {
    marginTop: 15,
  },

  title: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },

  number_hp: {
    flexDirection: 'row',
  },

  input_nohp: {
    height: 40,
    width: 275,
    marginBottom: 10,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.15,

    elevation: 2,
  },

  input: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.15,

    elevation: 2,
  },
});

export default CardInformation;
