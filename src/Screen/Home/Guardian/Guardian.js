import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styel';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Guardian = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.add_guardian}>
        <Text style={{textAlign: 'center', fontSize: 16}}>All Guardians</Text>
        <TouchableOpacity
          style={styles.add_guardian_button}
          onPress={() => navigation.navigate('Add')}>
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
      <ScrollView>
        <View style={styles.guardian_list}>
          <Text style={{fontSize: 18, marginTop: 40}}> All Guardians</Text>
          <View style={[styles.help_list_row, {marginTop: 40}]}>
            <View style={styles.first_cell}>
              <Text style={{fontSize: 16}}>Mom</Text>
              <Text style={{fontSize: 16}}>+48 765 456 782</Text>
            </View>
            <View style={[styles.second_cell, {paddingRight: 20}]}>
              <TouchableOpacity
                style={styles.help_button_Ask}
                onPress={() => navigation.navigate('Send')}>
                <Text
                  style={[
                    styles.text_bootom_text,
                    {color: '#8f17b7', textAlign: 'center'},
                  ]}>
                  SEND DATA
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.help_list_row, {marginTop: 20}]}>
            <View style={styles.first_cell}>
              <Text style={{fontSize: 16}}>Bro Alex</Text>
              <Text style={{fontSize: 16}}>+48 765 456 782</Text>
            </View>
            <View style={[styles.second_cell, {paddingRight: 20}]}>
              <TouchableOpacity
                style={styles.help_button_Ask}
                onPress={() => navigation.navigate('Send')}>
                <Text
                  style={[
                    styles.text_bootom_text,
                    {color: '#8f17b7', textAlign: 'center'},
                  ]}>
                  SEND DATA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.help_list_row, {marginTop: 20}]}>
            <View style={styles.first_cell}>
              <Text style={{fontSize: 16}}>Father</Text>
              <Text style={{fontSize: 16}}>+48 765 456 782</Text>
            </View>
            <View style={[styles.second_cell, {paddingRight: 20}]}>
              <TouchableOpacity
                style={styles.help_button_Ask}
                onPress={() => navigation.navigate('Send')}>
                <Text
                  style={[
                    styles.text_bootom_text,
                    {color: '#8f17b7', textAlign: 'center'},
                  ]}>
                  SEND DATA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Guardian;
