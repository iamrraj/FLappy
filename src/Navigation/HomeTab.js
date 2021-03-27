import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Dashboard from '../Screen/Home/Dashboard/Dashboard';
import Profile from '../Screen/Home/Profile/Profile';
import Guardian from '../Screen/Home/Guardian/Guardian';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeTab() {
  const [age, setAge] = useState(null);

  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem('@storage_Key');

      if (userAge !== null) {
        setAge(userAge);
      }
    } catch (e) {
      console.log('Error While Fetching Storage data ');
    }
  };
  useEffect(() => {
    let isCancelled = false;
    readData();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      {/* {age !== null && ( */}
      <Tab.Navigator
        initialRouteName={'Home'}
        lazy={true}
        tabBarOptions={{
          activeTintColor: '#FF405C',
          inactiveTintColor: '#39324C',

          //activeBackgroundColor: '#c4461c',
          inactiveBackgroundColor: 'white',
          labelStyle: {
            fontSize: 10,
            marginBottom: 10,
          },
          style: {
            backgroundColor: 'white',
            paddingBottom: -10,

            height: 60,
            color: '#FF405C',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'map-outline' : 'map'}
                color={focused ? '#FF405C' : '#39324C'}
                size={25}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();

              // Do something with the `navigation` object
              navigation.navigate('Home');
            },
          })}
        />

        <Tab.Screen
          name="Guardian"
          component={Guardian}
          options={{
            tabBarLabel: 'Guardian',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'add-circle-outline' : 'add-circle'}
                color={focused ? '#FF405C' : '#39324C'}
                size={25}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();

              // Do something with the `navigation` object
              navigation.navigate('Guardian');
            },
          })}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'person-circle-outline' : 'person-circle'}
                color={focused ? '#FF405C' : '#39324C'}
                size={25}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();

              // Do something with the `navigation` object
              navigation.navigate('Profile');
            },
          })}
        />
      </Tab.Navigator>
      {/* )} */}
    </>
  );
}
export default HomeTab;

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Dashboard}
      options={{title: 'HomeTab', headerShown: false}}
    />
  </HomeStack.Navigator>
);
