/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput, StyleSheet, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  input: {
    color: colors.text,
    fontFamily: 'Poppins',
    height: 40,
    margin: 3,
    fontSize: 16,
    borderWidth: 0,
    paddingLeft: 6,
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

const InputFields = ({
  inlineIcon,
  placeHolder,
  number,
  password,
  value,
  onChangeText,
}) => {
  return (
    <SafeAreaView>
      {number ? (
        <TextInput
          style={styles.input}
          inlineImageLeft={inlineIcon}
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          inlineImagePadding={8}
          keyboardType="number-pad"
        />
      ) : password ? (
        <TextInput
          style={styles.input}
          inlineImageLeft={inlineIcon}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeHolder}
          inlineImagePadding={8}
          secureTextEntry
        />
      ) : (
        <TextInput
          style={styles.input}
          inlineImageLeft={inlineIcon}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeHolder}
          inlineImagePadding={8}
        />
      )}
    </SafeAreaView>
  );
};

InputFields.defaultProps = {
  placeHolder: 'Placeholder',
};

export default InputFields;

export const InputDatePicker = ({placeHolder, action}) => {
  const [dateInit, setDateInit] = useState(new Date());
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <TextInput
        onPressIn={() => {
          setOpen(true);
        }}
        style={[styles.input, {fontSize: 14}]}
        inlineImageLeft="ic_calendar"
        inlineImagePadding={8}
        value={value}
        placeholder={placeHolder}
      />

      <DatePicker
        modal
        date={dateInit}
        open={open}
        onConfirm={time => {
          setOpen(false);

          setDateInit(time);
          const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Des'];

          const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
          const month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
          const year = time.getFullYear();

          const fullDate = `${date} ${m[Number(month) - 1]} ${year}`;

          setValue(fullDate);
          action(`${year}-${month}-${date}`);
        }}
        onCancel={() => setOpen(false)}
      />
    </SafeAreaView>
  );
};

InputDatePicker.defaultProps = {
  placeholder: 'Placeholder',
};
