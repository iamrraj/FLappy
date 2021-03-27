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
import styles from '../style/Style';
import config from '../../../Config/Config';

import axios from 'axios';

const ForgetPassword = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    check_textInputChange: false,
  });
  const [loading, setLoading] = useState(false);
  const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  const isEnabled = data.email.match(mailformat);
  const textInputChange = (val) => {
    if (isEnabled) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handleSubmit = () => {
    console.log(data.email);

    setLoading(true);
    axios({
      method: 'POST',
      url: `https://inback.herokuapp.com/api/1/user/api/sendForgottenPasswordEmail/`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      data: data,
    })
      .then((response) => {
        console.log('Success');
        Alert.alert('Success !!', ` We already sent email on : ${data.email}`);
        setLoading(false);
        navigation.navigate('Login');
      })
      .catch((reject) => {
        console.log(reject.response.data);
        setLoading(false);
        Alert.alert('Error !!', reject.response.data.message);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#93278f" barStyle="light-content" />
      <View style={styles.header1}>
        <Text style={styles.text_header}>Forget Password ?</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer1}>
        <ScrollView>
          <Text style={styles.text_footer}>Email Id</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email id"
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
              disabled={!isEnabled}
              onPress={handleSubmit}>
              <LinearGradient
                colors={
                  !isEnabled ? ['#c38bd6', '#695a6e'] : ['#93278f', '#ba00b3']
                }
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  {loading ? 'Loading ...' : 'Send email'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
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
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default ForgetPassword;
