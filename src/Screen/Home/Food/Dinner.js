import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'native-base';
import styles from './style';

function Dinner() {
  const [choose, setChoose] = useState({
    selectedLang1: false,
    selectedLang2: false,
    selectedLang3: false,
    selectedLang4: false,
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.itemList}>
          <View
            style={[
              styles.item,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: choose.selectedLang1 ? '#fc5185' : 'gray',
                fontWeight: choose.selectedLang1 ? 'bold' : 'normal',
              }}>
              Python
            </Text>
            <CheckBox
              checked={choose.selectedLang1}
              color="#fc5185"
              style={styles.check}
              onPress={() =>
                setChoose({...choose, selectedLang1: !choose.selectedLang1})
              }
            />
          </View>
          <View
            style={[
              styles.item,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: choose.selectedLang2 ? '#fc5185' : 'gray',
                fontWeight: choose.selectedLang2 ? 'bold' : 'normal',
              }}>
              Javascript
            </Text>
            <CheckBox
              checked={choose.selectedLang2}
              color="#fc5185"
              style={styles.check}
              onPress={() =>
                setChoose({...choose, selectedLang2: !choose.selectedLang2})
              }
            />
          </View>
          <View
            style={[
              styles.item,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: choose.selectedLang3 ? '#fc5185' : 'gray',
                fontWeight: choose.selectedLang3 ? 'bold' : 'normal',
              }}>
              Php
            </Text>
            <CheckBox
              checked={choose.selectedLang3}
              color="#fc5185"
              style={styles.check}
              onPress={() =>
                setChoose({...choose, selectedLang3: !choose.selectedLang3})
              }
            />
          </View>
          <View
            style={[
              styles.item,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: choose.selectedLang4 ? '#fc5185' : 'gray',
                fontWeight: choose.selectedLang4 ? 'bold' : 'normal',
              }}>
              C#
            </Text>
            <CheckBox
              checked={choose.selectedLang4}
              color="#fc5185"
              style={styles.check}
              onPress={() =>
                setChoose({...choose, selectedLang4: !choose.selectedLang4})
              }
            />
          </View>
          <TouchableOpacity style={styles.submit}>
            <Text style={{color: 'white'}}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Dinner;
