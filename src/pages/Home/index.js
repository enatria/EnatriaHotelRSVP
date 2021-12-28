/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppBar, Button, Gap, HotelSearchResult, SearchCard, SlideTopDestination} from '../../components';

const Home = ({navigation}) => {
  const [search, setSearch] = useState(undefined);
  const [label, setLabel] = useState('Home');

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

  return (
    <View>
      <AppBar label={label} />
      <SafeAreaView>
        <SearchCard navigation={navigation} action={{setSearch, setLabel}} />
      </SafeAreaView>
      <ScrollView>
        <SafeAreaView>
          {search !== undefined ?
              <>
                <TouchableOpacity style={styles.reset} onPress={() => {
                  setSearch(undefined);
                  setLabel('Home');
                }}>
                  <Text style={styles.textReset}>reset</Text>
                </TouchableOpacity>
                <HotelSearchResult navigation={navigation} />
              </>
              :
              <>
              <SlideTopDestination label={'TOP DESTINATION'} />
              <SlideTopDestination label={'POPULAR DESTINATION'} />
            </>
          }
        </SafeAreaView>
        <Gap height={305} />
      </ScrollView>
    </View>
  );
};

export default Home;
