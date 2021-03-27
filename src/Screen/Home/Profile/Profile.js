import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Alert,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile(props) {
  const {navigation} = props;
  const [name, setName] = useState([]);
  const [model, setModel] = useState(false);
  const [model1, setModel1] = useState(false);
  const [text, setText] = useState('');

  let image = {
    uri: '../../'
      ? name.avatar
      : 'https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
  };

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      console.log(
        'Token Cleard',
        await AsyncStorage.removeItem('@storage_Key'),
      );
      navigation.navigate('Login');
    } catch (exception) {
      return false;
    }
  };

  const loginAlert = () =>
    Alert.alert(
      'Logout',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: onLogout},
      ],
      {cancelable: false},
    );

  return (
    <>
      <SafeAreaView style={styles.containers}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.titleText}>Profile</Text>

            <View style={styles.image_section}>
              <Image
                style={styles.tinyLogo}
                source={require('../../../Static/Image/logo.png')}
              />
              <Text style={styles.titleText_name}>Anna Migdal</Text>
              <Text style={styles.titleText_name1}>anna@gmail.com</Text>
            </View>

            <View style={styles.list}>
              {/* <Text style={styles.get_touch}>Language</Text> */}
              {/* <Language /> */}
              <Text style={styles.get_touch}>Get in touch</Text>

              <Text style={styles.get_contact}>Change Password</Text>
              <View>
                <Text
                  style={styles.get_contact}
                  onPress={() => {
                    setModel(true);
                  }}>
                  Rate us
                </Text>
                <Ionicons
                  name={'chevron-forward'}
                  color={'black'}
                  size={20}
                  style={styles.icon_text}
                />
              </View>
              <Text style={styles.get_about}> About us</Text>
              <Text style={styles.get_contact}>About us</Text>

              <Text style={styles.get_log} onPress={loginAlert}>
                Logout
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Text style={[styles.get_about1, {alignSelf: 'flex-start'}]}>
                  Stack Hack
                </Text>
                <Text
                  style={[
                    styles.get_about1,
                    {
                      alignSelf: 'flex-end',
                    },
                  ]}>
                  Version 1.0.0{' '}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Modal animationType="fade" transparent={true} visible={model}>
          <View style={styles.container_rate}>
            <View style={styles.modalView}>
              <Text style={styles.title_model}>
                Tell us about your Experiance
              </Text>

              <Text style={styles.title_model1}>
                Please tell us what you think about digital fleet app.Thank you
                for yout support
              </Text>

              <View style={styles.rate_button}>
                <TouchableOpacity
                  style={styles.no}
                  onPress={() => {
                    setModel1(true);
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Don't Like</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.yes}
                  onPress={() => {
                    setModel(false);
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {' '}
                    Like
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal animationType="fade" transparent={true} visible={model1}>
          <View style={styles.container_rate}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  top: -15,
                }}
                onPress={() => {
                  setModel1(false);
                  setModel(false);
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>X</Text>
              </TouchableOpacity>
              <Text style={styles.title_model}>
                How was your overall experiance ?
              </Text>

              <Text style={styles.title_model1}>What was wrong</Text>

              <TextInput
                value={text}
                keyboardType="email-address"
                numberOfLines={4}
                multiline={true}
                onChangeText={(username) => setText({username})}
                // placeholder="Email"
                // placeholderTextColor="black"
                style={styles.input}
              />

              <TouchableOpacity
                style={styles.yes1}
                onPress={() => {
                  setModel1(false);
                  setModel(false);
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}> SEND</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

export default Profile;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'white',
  },
  title_model: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    marginTop: -10,
  },
  title_model1: {
    fontSize: 14,
    color: 'gray',
    width: '100%',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',

    padding: 20,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rate_button: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  container_rate: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.7)',
    paddingTop: 20,
  },

  input: {
    width: '100%',
    borderRadius: 7,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 100,
    paddingBottom: 5,

    borderWidth: 1,
    borderColor: 'black',

    marginVertical: 10,
    backgroundColor: 'white',
  },
  yes1: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',

    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    marginBottom: 0,
    marginTop: 10,
  },
  yes: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: '50%',

    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 0,
  },
  no: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '50%',

    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 0,
  },
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  scrollView: {
    marginHorizontal: 0, // FOr mArging right
    flex: 1,
  },
  icon_text: {
    position: 'relative',
    alignSelf: 'flex-end',
    top: -38,
  },
  version: {
    alignSelf: 'flex-end',
  },
  list: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'left',
    padding: 15,
    paddingTop: 20,
  },
  get_touch: {
    fontFamily: 'Baskerville',
    textAlign: 'left',
    fontSize: 14,
    color: '#878787',
  },
  get_contact: {
    fontFamily: 'Baskerville',
    marginTop: 10,
    fontSize: 16.5,
    borderBottomWidth: 1,
    borderColor: '#c8c8c8',
    paddingBottom: 15,
    color: 'black',
  },
  get_about: {
    fontFamily: 'Baskerville',
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5,
    color: '#878787',
  },
  get_about1: {
    fontFamily: 'Baskerville',
    textAlign: 'left',
    fontSize: 14,
    marginTop: 13,
    color: '#878787',
  },
  get_log: {
    fontFamily: 'Baskerville',
    textAlign: 'left',
    fontSize: 16.5,
    marginTop: 25,
    color: 'black',
  },
  titleText: {
    fontFamily: 'Baskerville',
    textAlign: 'left',
    padding: 20,
    fontSize: 17,
  },
  titleText_name: {
    fontFamily: 'Baskerville',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleText_name1: {
    fontFamily: 'Baskerville',
    paddingTop: 0,
    fontSize: 15,
    color: 'gray',
  },
  image_section: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },

  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
});
