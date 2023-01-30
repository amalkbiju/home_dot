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

const ForgotPasswordOtpToLogin = ({navigation}) => {
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
            fontWeight: '800',
            color: Colors?.DEFAULT_BLUE,
          }}>
          Verification required
        </Text>
        <View
          style={{
            width: '100%',
            height: '3%',
          }}
        />
        <Text
          style={{width: '90%', fontSize: 15, color: Colors?.DEFAULT_GREAY}}>
          OTP Send to your Email / Phone Number ( ********** )
        </Text>
        <View style={{width: '100%', height: '4%'}} />
        <View style={styles?.textInputMainConatiner}>
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
          <View style={{width: '4%', height: '100%'}} />
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
          <View style={{width: '4%', height: '100%'}} />
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
          <View style={{width: '4%', height: '100%'}} />
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
        </View>
        <View style={{width: '100%', height: '1%'}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles?.dontReceiveOtpText}>Don't recevice OTP </Text>
          <Text style={styles?.resentText}>Resent OTP</Text>
        </View>
        <View style={{width: '100%', height: '2%'}} />
        <TouchableOpacity
          style={styles?.button}
          onPress={() => navigation.navigate('NewPasswordScreen')}>
          <Text style={styles?.bottonText}>Varify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordOtpToLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
  otpMainContainer: {
    width: Display?.setWidth(90),
    height: Display?.setWidth(90),
    backgroundColor: Colors?.DEFAULT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  otpText: {
    fontSize: 16,
    color: Colors?.DEFAULT_GREAY,
    fontWeight: '900',
  },
  fourDigithText: {
    fontSize: 13,
    color: Colors?.DEFAULT_GREAY,
    fontWeight: '900',
  },
  textInputMainConatiner: {
    width: '85%',
    height: '19%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: Colors?.DEFAULT_WHITE,
    width: '22%',
    height: '90%',
    borderWidth: 0.7,
    borderRadius: 5,
    borderColor: Colors?.DEFAULT_BLACK,
    color: Colors?.DEFAULT_BLACK,
    fontSize: 23,
  },
  dontReceiveOtpText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors?.DEFAULT_GREAY,
  },
  resentText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors?.DEFAULT_BLUE,
  },
  button: {
    width: '90%',
    height: '15%',
    backgroundColor: Colors?.DEFAULT_BLUE,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonText: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors?.DEFAULT_WHITE,
  },
});
