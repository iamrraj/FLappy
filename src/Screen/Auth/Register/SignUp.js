import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import config from '../../../Config/Config';
import styles from '../style/Style';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    email: '',
    confirm_password: '',
    check_textInputChange: false,
    check_EmailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [loading, setLoading] = useState(false);

  const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  const isEnabled = data.email.match(mailformat);

  const textEmailInputChange = (val) => {
    if (isEnabled) {
      setData({
        ...data,
        email: val,
        check_EmailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_EmailInputChange: false,
      });
    }
  };

  const textInputChange = (val) => {
    if (val.length > 3) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
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

  const handleSubmit = () => {
    console.log(data);
    setLoading(true);
    axios({
      method: 'POST',
      url: config.apiUrl.register,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      data: data,
    })
      .then((response) => {
        setLoading(false);
        Alert.alert(
          'Register Success !',
          `We have sent email to ${data.email} confirm account to login !`,
          [{text: 'Dismiss', onPress: () => console.log('dismissing alert')}],
          {cancelable: false},
        );
        navigation.navigate('Login');
        console.log('Success');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Alert.alert(
          'Registraion Error',
          err.response.data['message']
            ? err.response.data['message']
            : 'Seems like this username is already in use',
          [{text: 'Okay'}],
          console.log('Error'),
        );
      });
  };

  const re = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);
  const isOk = re.test(data.password);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#93278f" barStyle="light-content" />
      <View
        style={[
          styles.header,
          {
            alignItems: 'center',
            paddingBottom: 10,
            paddingTop: 30,
            justifyContent: 'center',
          },
        ]}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../../Static/Image/logo.png')}
          style={[
            {
              height: 70,
              width: 70,
            },
          ]}
          resizeMode="stretch"
        />
        {/* <Text style={styles.text_header}>Register Now!</Text> */}
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, styles.footer2]}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />

            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#93278f" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Animatable.View
            animation="fadeInRight"
            duration={500}
            style={[styles.forget_password, {marginTop: -4}]}>
            {data.username.length > 1 ? (
              data.username.length <= 3 ? (
                <Text
                  style={[
                    styles.textforget,
                    {
                      color: 'red',
                    },
                  ]}>
                  Usernamae must be more then 4 letters
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
                marginTop: 1,
              },
            ]}>
            Email ID
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textEmailInputChange(val)}
            />
            {data.check_EmailInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#93278f" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 25,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#39324C" size={20} />
              ) : (
                <Feather name="eye" color="#39324C" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Animatable.View
            animation="fadeInRight"
            duration={500}
            style={[styles.forget_password, {marginTop: -4}]}>
            {data.password.length > 3 ? (
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
                marginTop: 20,
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
                <Feather name="eye-off" color="#39324C" size={20} />
              ) : (
                <Feather name="eye" color="#39324C" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Animatable.View
            animation="fadeInRight"
            duration={500}
            style={[styles.forget_password, {marginBottom: -10}]}>
            {data.password !== data.confirm_password ? (
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
                {fontWeight: 'bold', color: '#39324C'},
              ]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text
              style={[
                styles.color_textPrivate,
                {fontWeight: 'bold', color: '#39324C'},
              ]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={handleSubmit}
              disabled={
                !isEnabled ||
                !isOk ||
                data.password !== data.confirm_password ||
                data.username.length < 3
              }>
              <LinearGradient
                colors={
                  !isEnabled ||
                  !isOk ||
                  data.password !== data.confirm_password ||
                  data.username.length < 3
                    ? ['#706887', '#aba4bf']
                    : ['#39324C', '#39324C']
                }
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  {loading ? 'Loading ...' : 'Sign Up'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={[
                styles.signIn,
                {
                  borderColor: '#FF405C',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#FF405C',
                  },
                ]}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
