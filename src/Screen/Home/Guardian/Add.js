import React, {useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import styles from './styel';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Add = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const saveData = () => {
    Alert.alert(
      'You have new Guardian',
      'Rahul Raj , +48 757 755 955',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: navigation.navigate('Guardian')},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.back_section}>
        <Text
          style={styles.back}
          onPress={() => navigation.navigate('Guardian')}>
          {' '}
          <Ionicons name={'arrow-back'} color={'black'} size={25} />
        </Text>
      </View>
      <View style={styles.add_guardian_list}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>NEW GUARDIAN</Text>
        <View style={styles.form_add}>
          <TextInput
            placeholder="Guardian Name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setName(val)}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setPhone(val)}
          />
          <Text style={{opacity: 0.6}}>Min. 9 characters</Text>
        </View>

        <View style={{marginTop: 40}}>
          <Text>
            Note: Your guardia will be notified is something happens to you and
            thry can help or find help quickly
          </Text>
        </View>
      </View>

      <TouchableOpacity
        disabled={name.length < 3 || phone.length < 8}
        style={[styles.add_guardian_button, styles.add_guardian]}
        onPress={() => saveData()}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          New Guardian
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
