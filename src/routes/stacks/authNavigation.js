// @app
// import * as React from 'react';
import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @stack screens
import AppStarter from '../../screens/AppStarter';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import Otp from '../../screens/Auth/Otp';
import CompleteProfile from '../../screens/Auth/CompleteProfile';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import ChangePassword from '../../screens/Auth/ChangePassword';
import LoginPhone from '../../screens/Auth/LoginPhone';
import Descriptions from '../../screens/Auth/Descriptions';
import Description from '../../screens/Auth/Description';

const RootStack = createNativeStackNavigator();

const AuthNavigation = ({initialRoute}) => {
  return (
    <RootStack.Navigator
      initialRouteName={'AppStarter'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: false,
        animation:'slide_from_right'
      }}>
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AppStarter"
        component={AppStarter}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Login"
        component={Login}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Signup"
        component={Signup}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Otp"
        component={Otp}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="CompleteProfile"
        component={CompleteProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="LoginPhone"
        component={LoginPhone}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Descriptions"
        component={Descriptions}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Description"
        component={Description}
      />
    </RootStack.Navigator>
  );
};

export default AuthNavigation;
