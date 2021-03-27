import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../style/Style';

const ChangePassword = ({navigation}) => {
  const [data, setData] = React.useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        old_password: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        old_password: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      new_password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const re = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);
  const isOk = re.test(data.new_password);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#93278f" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Change Password!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Old password</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Old password"
              style={styles.textInput}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#93278f" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 20,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="New Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#93278f" size={20} />
              ) : (
                <Feather name="eye" color="#93278f" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Animatable.View
            animation="fadeInRight"
            duration={500}
            style={[styles.forget_password, {marginTop: -4}]}>
            {data.new_password.length > 3 ? (
              !isOk ? (
                <Text
                  style={[
                    styles.textforget,
                    {
                      color: 'red',
                    },
                  ]}>
                  Your password must contain at least one small , big letter and
                  least one digit
                </Text>
              ) : (
                <Text></Text>
              )
            ) : (
              <Text></Text>
            )}
          </Animatable.View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#93278f" size={20} />
              ) : (
                <Feather name="eye" color="#93278f" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Animatable.View
            animation="fadeInRight"
            duration={500}
            style={[styles.forget_password, {marginBottom: -10}]}>
            {data.new_password !== data.confirm_password ? (
              data.confirm_password.length > 1 ? (
                <Text
                  style={[
                    styles.textforget,
                    {
                      color: 'red',
                    },
                  ]}>
                  Password did not match
                </Text>
              ) : (
                <Text></Text>
              )
            ) : data.confirm_password.length > 1 ? (
              <Text
                style={[
                  styles.textforget,
                  {
                    color: 'green',
                  },
                ]}>
                Password Matched
              </Text>
            ) : (
              <Text></Text>
            )}
          </Animatable.View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text
              style={[
                styles.color_textPrivate,
                {fontWeight: 'bold', color: '#93278f'},
              ]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text
              style={[
                styles.color_textPrivate,
                {fontWeight: 'bold', color: '#93278f'},
              ]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {}}
              disabled={!isOk || data.new_password !== data.confirm_password}>
              <LinearGradient
                colors={
                  !isOk || data.new_password !== data.confirm_password
                    ? ['#c38bd6', '#695a6e']
                    : ['#93278f', '#ba00b3']
                }
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Change Password
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#93278f',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#93278f',
                  },
                ]}>
                Home
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default ChangePassword;
