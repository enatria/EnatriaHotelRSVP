/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppBar,
  Button,
  Gap,
  HotelSearchResult,
  SearchCard,
  SlideTopDestination,
} from '../../components';
import {getUser} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/hotelSlice';

const Home = ({navigation}) => {
  const [search, setSearch] = useState(undefined);
  const [label, setLabel] = useState('Home');
  const dispatch = useDispatch();
  const user = useSelector(state => state.hotel.user);

  const styles = StyleSheet.create({
    reset: {
      alignSelf: 'flex-end',
      marginTop: 12,
      marginRight: 12,
      backgroundColor: 'white',
      height: 30,
      width: 60,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textReset: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  console.log('user :', user);

  return (
    <View>
      <AppBar label={label} />
      {/* <Button title="login" onPress={() => navigation.navigate('SignIn')} /> */}
      {/* <CheckAuth/> */}
      <SafeAreaView>
        <SearchCard navigation={navigation} action={{setSearch, setLabel}} />
      </SafeAreaView>
      <ScrollView>
        <SafeAreaView>
          {search !== undefined ? (
            <>
              <TouchableOpacity
                style={styles.reset}
                onPress={() => {
                  setSearch(undefined);
                  setLabel('Home');
                }}>
                <Text style={styles.textReset}>reset</Text>
              </TouchableOpacity>
              <HotelSearchResult navigation={navigation} />
            </>
          ) : (
            <>
              <SlideTopDestination label={'TOP DESTINATION'} />
              <SlideTopDestination label={'POPULAR DESTINATION'} />
            </>
          )}
        </SafeAreaView>
        <Gap height={305} />
      </ScrollView>
    </View>
  );
};

export default Home;
