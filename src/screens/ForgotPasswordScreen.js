import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Display from '../utils/Display';
import Colors from '../utils/Colors';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View
        style={{
          width: Display?.setWidth(90),
          height: Display?.setWidth(85),
          backgroundColor: Colors?.DEFAULT_WHITE,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 17,
            color: Colors?.DEFAULT_BLUE,
            fontWeight: '900',
          }}>
          Password Assistanse
        </Text>
        <View style={{width: '100%', height: '3%'}} />
        <Text
          style={{
            fontSize: 16,
            width: '90%',
            color: Colors?.DEFAULT_BLACK,
          }}>
          Enter the email address or mobile phone number associated with your
          HomeDot account.
        </Text>
        <View style={{width: '100%', height: '3%'}} />
        <TextInput
          placeholder="Email / Phone Number"
          placeholderTextColor={Colors?.DEFAULT_BLACK}
          style={{
            width: '90%',
            height: '16%',
            backgroundColor: Colors?.DEFAULT_WHITE,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: Colors?.DEFAULT_BLACK,
          }}
        />
        <View style={{width: '100%', height: '6%'}} />
        <TouchableOpacity
          style={{
            backgroundColor: Colors?.DEFAULT_BLUE,
            width: '90%',
            height: '16%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() =>
            navigation.navigate('ForgotPasswordOtpVvarifiactionScreen')
          }>
          <Text
            style={{
              color: Colors?.DEFAULT_WHITE,
              fontSize: 15,
              fontWeight: '900',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
});
