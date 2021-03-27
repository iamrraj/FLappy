import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeTab from './HomeTab';
import Login from '../Screen/Auth/Login/Login';
import SignUp from '../Screen/Auth/Register/SignUp';
import Main from '../Screen/Start/Main';
import ChooseFood from '../Screen/Home/Food/ChooseFood';
import ForgetPassword from '../Screen/Auth/Password/ForgetPassword';
import ChangePassword from '../Screen/Auth/Password/ChangePassword';
import Home from '../Screen/StartHack/Screen/Home/Home';
import Add from '../Screen/Home/Guardian/Add';
import SendLocation from '../Screen/Home/Guardian/SendLocation';
function Navigation1({navigation}) {
  const [age, setAge] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem('@storage_Key');
      setLoading(false);
      setAge(userAge);
    } catch (e) {
      console.log('Error While Fetching Storage data ');
    }
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      readData();
    }, 100);

    return () => {
      clearTimeout(interval);
    };
  }, [navigation]);

  const AuthStack = createStackNavigator();
  const AuthStackScreen = () => (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          height: 47,
        },
        // headerLeft: () => (
        //   <Ionicons
        //     name="chevron-back-sharp"
        //     onPress={() => navigation.goBack(null)}
        //     size={35}
        //     color="black"
        //   />
        // ),
      }}>
      <AuthStack.Screen
        name="Main"
        component={Main}
        options={{title: 'Home', headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login', headerShown: false}}
      />

      <AuthStack.Screen
        name="Register"
        component={SignUp}
        options={{title: 'Registe', headerShown: false}}
      />

      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{title: 'ForgetPassword', headerShown: false}}
      />
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />
      <AuthStack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{title: 'HomeTab', headerShown: false}}
      />
      <AuthStack.Screen
        name="Add"
        component={Add}
        options={{title: 'HomeTab', headerShown: false}}
      />
      <AuthStack.Screen
        name="Send"
        component={SendLocation}
        options={{title: 'HomeTab', headerShown: false}}
      />
    </AuthStack.Navigator>
  );

  const MainStack = createStackNavigator();
  const MainStackScreen = () => (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          height: 35,
        },
      }}>
      {/* <MainStack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{title: 'HomeTab', headerShown: false}}
      /> */}

      <AuthStack.Screen
        name="ChooseFood"
        component={ChooseFood}
        options={{title: 'ChooseFood', headerShown: false}}
      />
      <AuthStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'ForgetPassword', headerShown: false}}
      />
    </MainStack.Navigator>
  );
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {loading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen
            name="Spinner"
            component={Spinner}
            options={{title: 'Dashboard', headerShown: false}}
          /> */}
        {age !== null ? (
          <Stack.Screen
            name="Main"
            component={MainStackScreen}
            options={{title: 'Dashboard', headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{title: 'Dashboard', headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation1;
