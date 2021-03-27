import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snack from './Snack';
import BreakFast from './BreakFast';

const Tab = createMaterialTopTabNavigator();

export default class ChooseFood extends React.Component {
  // state = {
  //   selectedLang1: false,
  //   selectedLang2: false,
  //   selectedLang3: false,
  //   selectedLang4: false,
  // };
  render() {
    // const {
    //   selectedLang1,
    //   selectedLang2,
    //   selectedLang3,
    //   selectedLang4,
    // } = this.state;
    return (
      <>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 30,
            marginTop: 50,
            justifyContent: 'center',
          }}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../../../Static/Image/food.png')}
            style={[
              {
                height: 70,
                width: 70,
              },
            ]}
            resizeMode="stretch"
          />
          <Text style={{justifyContent: 'center', fontSize: 25, marginTop: 7}}>
            Choose Food
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 16,
              opacity: 0.5,
              maxWidth: '80%',
              marginTop: 5,
            }}>
            Select your meal and your foods that you consume today.
          </Text>
        </View>

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#39324C',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 13,
              textTransform: 'none',
              fontWeight: 'bold',
              marginTop: 0,
            },
            tabStyle: {
              borderRadius: 10,
              height: 45,
            },
            indicatorStyle: {
              backgroundColor: 'transparent',

              borderBottomColor: '#FF405C',
              borderBottomWidth: 2,
            },
            style: {
              borderBottomColor: 'black',

              borderRadius: 10,
            },
          }}>
          <Tab.Screen name="BreakFast" component={BreakFast} />
          <Tab.Screen name="Lunch" component={Lunch} />
          <Tab.Screen name="Snack" component={Snack} />
          <Tab.Screen name="Dinner" component={Dinner} />
        </Tab.Navigator>
      </>
    );
  }
}
