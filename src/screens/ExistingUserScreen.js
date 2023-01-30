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

const ExistingUserScreen = ({navigation}) => {
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
          Password
        </Text>
        <View style={{width: '100%', height: '4%'}} />

        <TextInput
          placeholder="Enter Password"
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

        <View
          style={{
            alignItems: 'flex-end',

            width: '90%',
            height: '7%',
          }}>
          <Text
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
            style={{
              fontSize: 14,
              color: Colors?.DEFAULT_BLACK,
            }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{width: '100%', height: '3%'}} />
        <TouchableOpacity
          style={{
            backgroundColor: Colors?.DEFAULT_BLUE,
            width: '90%',
            height: '16%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: Colors?.DEFAULT_WHITE,
              fontSize: 15,
              fontWeight: '900',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
        <View style={{width: '100%', height: '1%'}} />
        <Text style={{fontSize: 15, color: Colors?.DEFAULT_BLACK}}>OR</Text>
        <View style={{width: '100%', height: '1%'}} />
        <TouchableOpacity
          style={{
            backgroundColor: Colors?.DEFAULT_BLUE,
            width: '90%',
            height: '16%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('ForgotPasswordOtpToLogin')}>
          <Text
            style={{
              color: Colors?.DEFAULT_WHITE,
              fontSize: 15,
              fontWeight: '900',
            }}>
            OTP Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExistingUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
});
