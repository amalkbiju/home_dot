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

const NewPasswordScreen = ({navigation}) => {
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
            fontSize: 16,
            fontWeight: '800',
            color: Colors?.DEFAULT_BLUE,
          }}>
          Enter New Password
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '10%',
          }}>
          <View style={{width: '5%', height: '100%'}} />
          <Text style={{fontSize: 15, color: Colors?.DEFAULT_BLACK}}>
            New Password
          </Text>
        </View>
        <TextInput
          style={{
            width: '90%',
            height: '16%',
            backgroundColor: Colors?.DEFAULT_WHITE,
            borderWidth: 0.5,
            borderRadius: 5,
          }}
          placeholder={'Password'}
          placeholderTextColor={Colors?.DEFAULT_LIGHTGREY}
          secureTextEntry={true}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '10%',
          }}>
          <View style={{width: '5%', height: '100%'}} />
          <Text style={{fontSize: 15, color: Colors?.DEFAULT_BLACK}}>
            Conform Password
          </Text>
        </View>
        <TextInput
          style={{
            width: '90%',
            height: '16%',
            backgroundColor: Colors?.DEFAULT_WHITE,
            borderWidth: 0.5,
            borderRadius: 5,
          }}
          placeholder={'Conform Password'}
          placeholderTextColor={Colors?.DEFAULT_LIGHTGREY}
          secureTextEntry={true}
        />
        <View
          style={{
            width: '100%',
            height: '5%',
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: Colors?.DEFAULT_BLUE,
            width: '90%',
            height: '16%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('NewPasswordScreen')}>
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

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
});
