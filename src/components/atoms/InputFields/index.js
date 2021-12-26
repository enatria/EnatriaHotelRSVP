/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, StyleSheet, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { colors } from '../../../utils/colors';

const styles = StyleSheet.create({
  input: {
    color: colors.text,
    height: 40,
    margin: 3,
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 8,
  },
});

const InputFields = ({inlineIcon, placeHolder, number, password}) => {

  return (
    <SafeAreaView>
      {number ?
      <TextInput
        style={styles.input}
        inlineImageLeft={inlineIcon}
        placeholder={placeHolder}
        inlineImagePadding={5}
        keyboardType="number-pad"/>
      : password ?
      <TextInput
        style={styles.input}
        inlineImageLeft={inlineIcon}
        placeholder={placeHolder}
        inlineImagePadding={5}
        secureTextEntry/>
      : <TextInput
        style={styles.input}
        inlineImageLeft={inlineIcon}
        placeholder={placeHolder}
        inlineImagePadding={5}/>}
    </SafeAreaView>
  );
};

InputFields.defaultProps = {
  // inlineIcon: 'ic_baseline',
  placeHolder: 'Placeholder',
};

export default InputFields;

export const InputDatePicker = ({placeHolder}) => {
  const dateInit = new Date();
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <TextInput
      onPressIn={() => {
        setOpen(true);
      }}
      style={[styles.input, {fontSize: 14}]}
      inlineImageLeft="ic_calendar"
      inlineImagePadding={5}
      value={value}
      placeholder={placeHolder}
      />

      <DatePicker
      modal
      date={dateInit}
      open={open}
      onConfirm={(time) => {
        setOpen(false);
        console.log(typeof time);

        const date    = time.getDate();
        const month   = time.getMonth() + 1;
        const year    = time.getFullYear();
        const hours   = time.getHours();
        const minutes = time.getMinutes();

        const fullDate = `${date}-${month}-${year} ${hours}:${minutes}`;
        console.log(fullDate);

        setValue(fullDate);
      }}
      onCancel={() => setOpen(false)} />
    </SafeAreaView>
  );
};

InputDatePicker.defaultProps = {
  placeholder: 'Placeholder',
};
