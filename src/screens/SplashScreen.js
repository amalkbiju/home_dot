import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginOrRegisterScreen');
    }, 2500);
  }, []);
  return (
    <View style={styles?.container}>
      <Text style={styles?.homeDotText}>Home.</Text>
      <View style={{width: '100%', height: '1%'}} />
      <Text style={styles?.demandsText}>Your Home Demands</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.DEFAULT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeDotText: {
    fontFamily: Fonts?.BUBBLE_GUM_SANS,
    fontSize: 70,

    color: Colors?.DEFAULT_WHITE,
  },
  demandsText: {
    fontSize: 16,
    color: Colors?.DEFAULT_WHITE,
    fontWeight: '800',
  },
});
