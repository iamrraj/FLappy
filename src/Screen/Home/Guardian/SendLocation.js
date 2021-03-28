import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import styles from './styel';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SendLocation = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

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
      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 23, fontWeight: 'bold', textAlign: 'center'}}>
          BRO ALEX
        </Text>
      </View>

      <View style={{marginTop: 60}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '200',
            paddingLeft: 50,
            paddingRight: 40,
            textAlign: 'left',
          }}>
          You can set a time when this guardian will be notified of your
          location
        </Text>

        <View
          style={[
            styles.help_list_row,
            {marginTop: 40, paddingLeft: 50, paddingRight: 40},
          ]}>
          <View style={styles.first_cell}>
            <Text style={{fontSize: 15}}>Hours : Mins</Text>
            <Text style={[styles.time, {fontSize: 18}]}>00 : 15</Text>
          </View>
          <View style={[styles.second_cell, {paddingRight: 20}]}>
            <Switch
              trackColor={{false: '#767577', true: '#8f17b7'}}
              thumbColor={isEnabled ? 'white' : 'black'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              thumbTintColor="#0000ff"
              tintColor="#ff0000"
              style={{marginTop: 30, transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              value={isEnabled}
            />
          </View>
        </View>

        <View
          style={[
            styles.help_list_row,
            {marginTop: 40, paddingLeft: 50, paddingRight: 40},
          ]}>
          <View style={styles.first_cell}>
            <Text style={{fontSize: 15}}>Hours : Mins</Text>
            <Text style={[styles.time, {fontSize: 18}]}>00 : 30</Text>
          </View>
          <View style={[styles.second_cell, {paddingRight: 20}]}>
            <Switch
              trackColor={{false: '#767577', true: '#8f17b7'}}
              thumbColor={isEnabled2 ? 'white' : 'black'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              thumbTintColor="#0000ff"
              tintColor="#ff0000"
              style={{marginTop: 30, transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              value={isEnabled2}
            />
          </View>
        </View>

        <View
          style={[
            styles.help_list_row,
            {marginTop: 40, paddingLeft: 50, paddingRight: 40},
          ]}>
          <View style={styles.first_cell}>
            <Text style={{fontSize: 15}}>Hours : Mins</Text>
            <Text style={[styles.time, {fontSize: 18}]}>00 : 50</Text>
          </View>
          <View style={[styles.second_cell, {paddingRight: 20}]}>
            <Switch
              trackColor={{false: '#767577', true: '#8f17b7'}}
              thumbColor={isEnabled1 ? 'white' : 'black'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              thumbTintColor="#0000ff"
              tintColor="#ff0000"
              style={{marginTop: 30, transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              value={isEnabled1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SendLocation;
