import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../contants/Colors';
import Display from '../utils/Display';
import Icon from 'react-native-vector-icons/AntDesign';
import weatherData from '../services/WeatherServices';
import {useDispatch} from 'react-redux';
import {GeneralAction} from '../redux/action';
const HomeHeader = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState(null);

  return (
    <View style={styles.container}>
      {/* <Text>Live Weather</Text> */}
      <View style={styles?.topHeader}>
        <Text style={styles?.topText}>Live Weather</Text>
      </View>
      <View style={styles?.bottomHeader}>
        <View style={styles?.searchMainConatiner}>
          <TextInput
            style={styles?.searchInput}
            placeholder={'Search...'}
            placeholderTextColor={Colors?.DEFAULT_BLACK}
            onChangeText={setCity}
          />

          <View
            style={{
              width: '15%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                weatherData(city).then(response => {
                  dispatch(GeneralAction?.setWeather(response));
                });
              }}>
              <Icon name="search1" size={28} color={Colors?.DEFAULT_BLACK} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors?.DEFAULT_GREY,
    width: Display?.setWidth(100),
    height: Display?.setHeight(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHeader: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomHeader: {
    width: '100%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors?.DEFAULT_WHITE,
  },
  searchMainConatiner: {
    backgroundColor: Colors?.DEFAULT_WHITE,
    width: '95%',
    height: '65%',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    width: '85%',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
});
