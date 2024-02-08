// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// drawerComponentt
import UserAppStack from '../drawer/appDrawer';
import Home from '../../screens/Main/Home';
import MainProfile from '../../screens/Main/MainProfile';
import Messages from '../../screens/Main/Messages';
import Requests from '../../screens/Main/Requests';
import Settings from '../../screens/Main/Settings';
import Subscription from '../../screens/Main/Subscription';
import Upgrade from '../../screens/Main/Upgrade';
import SubscriptionPayment from '../../screens/Main/SubscriptionPayment';
import Notifications from '../../screens/Main/Notifications';
import BlockProfiles from '../../screens/Main/BlockProfiles';
import Chat from '../../screens/Main/Chat';
import Profile from '../../screens/Main/Profile';
import EditProfile from '../../screens/Main/EditProfile';
import SubscriptionPackages from '../../screens/Main/SubscriptionPackages';
import PackagePayment from '../../screens/Main/PackagePayment';
import UserProfile from '../../screens/Main/UserProfile';
import Community from '../../screens/Main/Community';
import CreatePost from '../../screens/Main/CreatePost';
import Tips from '../../screens/Main/Tips';
import Post from '../../screens/Main/Post';
import Feedback from '../../screens/Main/Feedback';
import ProfilePost from '../../screens/Main/ProfilePost';
import ProfileFeedback from '../../screens/Main/ProfileFeedback';
import UpdatePost from '../../screens/Main/UpdateProfile';
import MatchedProfile from '../../screens/Main/MatchedProfiles/MatchedProfile';
const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        animation:'slide_from_right',
        animationDuration:8000,
      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainProfile" component={MainProfile} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Upgrade" component={Upgrade} />
      <Stack.Screen
        name="SubscriptionPayment"
        component={SubscriptionPayment}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="MatchedProfile" component={MatchedProfile} />
      <Stack.Screen name="BlockProfiles" component={BlockProfiles} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="SubscriptionPackages"
        component={SubscriptionPackages}
      />
      <Stack.Screen name="PackagePayment" component={PackagePayment} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="ProfilePost" component={ProfilePost} />
      <Stack.Screen name="ProfileFeedback" component={ProfileFeedback} />
      <Stack.Screen name="UpdatePost" component={UpdatePost} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
