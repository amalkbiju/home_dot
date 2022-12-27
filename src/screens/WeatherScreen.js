import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import weatherData from '../services/WeatherServices';
import HomeHeader from '../compontent/HomeHeader';
import Display from '../utils/Display';
import Colors from '../contants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {GeneralAction} from '../redux/action';
const WeatherScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.generalState?.weather);
  const city = 'Kerala';
  console?.log('response', data);
  useEffect(() => {
    weatherData(city).then(response => {
      dispatch(GeneralAction?.setWeather(response));
    });
  }, []);
  return (
    <View style={styles?.conatiner}>
      <HomeHeader />
      <View style={styles?.topContainer}>
        <View style={styles?.topImageContainer}>
          <Image
            source={require('../assets/image/cloudy.png')}
            style={styles?.image}
          />
        </View>
        <View style={styles?.topTextConatiner}>
          <View
            style={{
              width: '100%',
              height: '60%',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles?.temText}>{data?.main?.temp} °C</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '40%',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles?.cityName}>{data?.name}</Text>
          </View>
        </View>
      </View>
      <View style={styles?.bottomContainer}>
        <View style={{width: '100%', height: '2%'}} />
        <View style={styles?.bottomTopCOntainer}>
          <View style={styles?.bottomCardContainer}>
            <View style={{width: '5%'}} />
            <View style={styles?.bottomCards}>
              <View style={styles?.cardTopConatiner}>
                <Text style={styles?.cardTopText}>
                  {data?.main?.temp_min} °C
                </Text>
              </View>
              <View style={styles?.cardBottomContainer}>
                <Text style={styles?.cardBottomText}>Temp_Min</Text>
              </View>
            </View>
            <View style={{width: '10%'}} />
            <View style={styles?.bottomCards}>
              <View style={styles?.cardTopConatiner}>
                <Text style={styles?.cardTopText}>
                  {data?.main?.temp_max} °C
                </Text>
              </View>
              <View style={styles?.cardBottomContainer}>
                <Text style={styles?.cardBottomText}>Temp_Max</Text>
              </View>
            </View>
            <View style={{width: '5%'}} />
          </View>
        </View>
        <View style={{width: '100%', height: '5%'}} />
        <View style={styles?.bottomBottomCOntainer}>
          <View style={styles?.bottomCardContainer}>
            <View style={{width: '5%'}} />
            <View style={styles?.bottomCards}>
              <View style={styles?.cardTopConatiner}>
                <Text style={styles?.cardTopText}>
                  {data?.main?.pressure} °C
                </Text>
              </View>
              <View style={styles?.cardBottomContainer}>
                <Text style={styles?.cardBottomText}>Pressure</Text>
              </View>
            </View>
            <View style={{width: '10%'}} />
            <View style={styles?.bottomCards}>
              <View style={styles?.cardTopConatiner}>
                <Text style={styles?.cardTopText}>
                  {data?.main?.humidity} °C
                </Text>
              </View>
              <View style={styles?.cardBottomContainer}>
                <Text style={styles?.cardBottomText}>Humidity</Text>
              </View>
            </View>
            <View style={{width: '5%'}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  topContainer: {
    width: Display?.setWidth(100),
    height: Display?.setHeight(33),
  },
  topImageContainer: {
    width: '100%',
    height: '63%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Display?.setWidth(36),
    height: Display?.setWidth(36),
  },
  topTextConatiner: {
    width: '100%',
    height: '37%',
  },
  temText: {
    fontSize: 25,
    color: Colors?.DEFAULT_BLACK,
  },
  cityName: {
    fontSize: 19,
    color: Colors?.DEFAULT_BLACK,
  },
  bottomContainer: {
    width: Display?.setWidth(100),
    height: Display?.setHeight(54),
  },
  bottomTopCOntainer: {
    width: Display?.setWidth(100),
    height: '42%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBottomCOntainer: {
    width: Display?.setWidth(100),
    height: '42%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCardContainer: {
    width: '100%',
    height: '90%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCards: {
    width: '40%',
    height: '100%',
    backgroundColor: Colors?.DEFAULT_WHITE,
    borderRadius: 7,
    elevation: 20,
  },
  cardTopConatiner: {
    width: '100%',
    height: '50%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBottomContainer: {
    width: '100%',
    height: '50%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTopText: {
    fontSize: 20,
    color: Colors?.DEFAULT_BLACK,
  },
  cardBottomText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors?.DEFAULT_BLACK,
  },
});
