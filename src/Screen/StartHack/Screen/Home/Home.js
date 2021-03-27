import React, {useState} from 'react';

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
import styles from '../../../Auth/style/Style';

const Home = () => {
  const [data, setData] = React.useState({
    username: '',
    phone: '',
    check_textInputChange: false,
    check_phoneInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length !== 0) {
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
  const textInputPhone = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        phone: val,
        check_phoneInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_phoneInputChange: false,
      });
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#93278f" barStyle="light-content" />
      <View
        style={[
          styles.header,
          {
            alignItems: 'center',
            paddingBottom: 30,
            paddingTop: 50,
            justifyContent: 'center',
          },
        ]}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../../../Static/Image/logo.png')}
          style={[
            {
              height: 70,
              width: 70,
            },
          ]}
          resizeMode="stretch"
        />
        {/* <Text style={styles.text_header}>Login To DigitaFleet!</Text> */}
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#39324C" size={20} />
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
            Phone Number
          </Text>
          <View style={styles.action}>
            <Feather name="phone" color="#39324C" size={20} />
            <TextInput
              placeholder="Phone Number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputPhone(val)}
            />
            {data.check_phoneInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#39324C" size={20} />
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
            <TouchableOpacity style={styles.signIn}>
              <LinearGradient
                colors={['#39324C', '#39324C']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  {loading ? 'Loading ...' : 'Submit'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Home;
