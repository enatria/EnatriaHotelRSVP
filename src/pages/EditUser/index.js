/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppBar, Button, CardBox, InputFields} from '../../components';
import {colors, Login} from '../../utils';
import {addUser} from '../../redux/hotelSlice';
import {useDispatch, useSelector} from 'react-redux';

const EditUser = ({navigation}) => {
  const user = useSelector(state => state.hotel.user);
  const [username, onChangeUsername] = useState(user?.username);
  const [name, onChangeName] = useState(user?.name);
  const [email, onChangeEmail] = useState(user?.email);

  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 20,
    },
    extendBar: {height: 120, backgroundColor: colors.primary},
    loginBar: {margin: 12, position: 'relative', top: -40},
    widthInput: {width: 300},
    mt12: {marginTop: 12},
    alignCenter: {alignSelf: 'center'},
  });

  const data = {username, name, email};
  console.log(user);
  const handleEdit = () => {
    dispatch(
      addUser({name: data.name, username: data.username, email: data.email}),
    );
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView>
      <AppBar backArrow label={'Edit User'} />
      <View style={styles.extendBar} />
      <View style={styles.loginBar}>
        <CardBox padding center shadow height={350}>
          <SafeAreaView style={styles.widthInput}>
            <Text style={[styles.alignCenter, styles.title]}>
              Edit My Account
            </Text>
            <View style={styles.mt12}>
              <InputFields
                value={username}
                onChangeText={onChangeUsername}
                placeHolder={'Username'}
              />
              <InputFields
                value={name}
                onChangeText={onChangeName}
                placeHolder={'Name'}
              />
              <InputFields
                value={email}
                onChangeText={onChangeEmail}
                placeHolder={'Email'}
              />
            </View>

            <View style={styles.mt12}>
              <Button title={'Edit Profile'} onPress={handleEdit} />
            </View>
          </SafeAreaView>
        </CardBox>
      </View>
    </SafeAreaView>
  );
};

export default EditUser;
