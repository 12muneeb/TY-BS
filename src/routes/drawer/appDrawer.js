import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComp from '../../components/Drawer';
import {BottomTabs} from '../tabs/BottomTabs';
import {colors} from '../../utils';

const Drawer = createDrawerNavigator();

const UserAppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          flex: 1,
          width: '65%',
          backgroundColor: 'transparent',
        },
        drawerContentContainerStyle: {
          flex: 1,
          width: '65%',
        },
        sceneContainerStyle: {
          backgroundColor: colors.white,
        },
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'Home'}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="BottomTabs"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  );
};

export default UserAppStack;
