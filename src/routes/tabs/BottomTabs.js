import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import {useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';
import TabBar from '../../components/TabbarComponent';
import Home from '../../screens/Main/Home';
import {colors} from '../../utils';
import Messages from '../../screens/Main/Messages';
import Profile from '../../screens/Main/Profile';
import Community from '../../screens/Main/Community';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const progress = useDrawerProgress();
  const scrollY = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);

    const borderRadius = interpolate(progress.value, [0, 1], [0, 50]);

    return {
      borderRadius,
      transform: [{scale}],
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.stack,
        animatedStyles,
        {
          // borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 50,
        },
      ]}>
      <Tab.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: colors.gray},
          animation: 'simple_push',
          headerShown: false,
        }}
        tabBar={props => <TabBar {...props} />}
        initialRouteName={'Home'}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    backgroundColor: colors.secondary,
    shadowColor: colors.white,
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.44,
    // shadowRadius: 10.32,
    // elevation: 5,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
