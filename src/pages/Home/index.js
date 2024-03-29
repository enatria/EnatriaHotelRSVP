/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
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
  Gap,
  HotelSearchResult,
  Loading,
  SearchCard,
  SlideTopDestination,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {addDataHotel} from '../../redux/hotelSlice';
import { setSearch } from '../../redux/requiredForFetchSlice';
import { addDataDestinations } from '../../redux/destinationsSlice';
import { staticTopDestination } from '../../utils';

const Home = ({navigation}) => {
  const [label, setLabel] = useState('Home');
  const dispatch = useDispatch();

  const user = useSelector(state => state.hotel.user);
  const destinations = useSelector(state => state.destinations);
  const search = useSelector(state => state.requiredForFetch.search);

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

  const ResetBtn = () => (
    <TouchableOpacity
      style={styles.reset}
      onPress={() => {
        dispatch(setSearch(undefined));
        dispatch(addDataDestinations(null));
        dispatch(addDataHotel([]));
        setLabel('Home');
      }}>
      <Text style={styles.textReset}>reset</Text>
    </TouchableOpacity>
  );

  const topDestinations = [...staticTopDestination].reverse();

  return (
    <View>
      <AppBar label={label} />
      <SafeAreaView>
        <SearchCard navigation={navigation} action={{setLabel}} />
      </SafeAreaView>
      <ScrollView>
        <SafeAreaView>
          {search !== undefined ? (
            <>
              <ResetBtn />
              <HotelSearchResult navigation={navigation} />
            </>
            ) : (
            <>
              {destinations !== null ?
              <>
                <ResetBtn />
                {destinations === null || destinations.length < 1 ?
                <SafeAreaView>
                  <Loading />
                </SafeAreaView> :
                destinations.map(item => {
                  const groupLabel = item.group.replace('_', ' ');
                  if (item.entities.length > 0) {
                    return (
                      <SlideTopDestination
                        key={item.entities.destinationId}
                        label={groupLabel}
                        item={item.entities} />
                    );
                  }
                })}
              </>
              :
              <>
                <SlideTopDestination bg item={topDestinations} label={'TOP DESTINATION'} />
                <SlideTopDestination bg item={staticTopDestination} label={'POPULAR DESTINATION'} />
              </>}
            </>
          )}
        </SafeAreaView>
        <Gap height={305} />
      </ScrollView>
    </View>
  );
};

export default Home;
