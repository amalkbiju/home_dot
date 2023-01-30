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
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import Fonts from '../utils/Fonts';
const LoginOrRegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles?.conatiner}>
        <Text style={styles?.homeDotText}>Home.</Text>
        <View style={{width: '100%', height: '5%'}} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles?.textInpuTandButtonConatainer}>
            <TextInput
              placeholder="Email or Phone"
              placeholderTextColor={Colors?.DEFAULT_BLACK}
              style={styles?.textInput}
            />
            <View style={{width: '100%', height: '28%'}} />
            <TouchableOpacity
              style={styles?.continueButton}
              onPress={() => navigation?.navigate('NonExstingUserOtpScreen')}>
              <Text style={styles?.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            <View style={{width: '100%', height: '1%'}} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles?.alreadyText}>Already have account? </Text>
              <Text
                style={styles?.siginInText}
                onPress={() => navigation?.navigate('ExistingUserScreen')}>
                SignIn
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginOrRegisterScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  homeDotText: {
    fontFamily: Fonts?.BUBBLE_GUM_SANS,
    fontSize: 70,
    color: Colors?.DEFAULT_BLUE,
    alignSelf: 'center',
  },
  textInpuTandButtonConatainer: {
    width: Display?.setWidth(85),
    height: Display?.setHeight(22),
  },
  textInput: {
    backgroundColor: Colors?.DEFAULT_WHITE,
    width: '100%',
    height: '36%',
    borderColor: Colors?.DEFAULT_BLACK,
    borderWidth: 0.4,
    borderRadius: 4,
  },
  continueButton: {
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: '100%',
    height: '36%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    color: Colors?.DEFAULT_WHITE,
    fontWeight: 'bold',
  },
  alreadyText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors?.DEFAULT_GREAY,
  },
  siginInText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors?.DEFAULT_BLUE,
  },
});
