import React from 'react';
import {Text, View, TouchableOpacity, Image, Keyboard} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons} from '../assets';
import {family, size} from '../utils';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import {useSelector} from 'react-redux';

function AppBackground({
  children,
  title,
  nobottom,
  back = false,
  menu = false,
  nav = '',
  rightIcon = appIcons.notifcationdark,
  marginHorizontal = true,
  childrenContainerStyle = {},
  rightIconNav = () => {
    NavService?.navigate('Notification');
  },
  notification = false,
  backgroundStyles,
  titlestyle,
  dots = false,
  edit = false,
  onBack,
  AppStyle,
  onSubmit = () => {},
}) {
  const {colors} = useTheme();
console.log(nav.length,'===nav.length');
const lightTheme = useSelector(state => state?.appReducer?.appTheme);
  return (
    <View style={[{flex: 1}, backgroundStyles]}>
      <View
        style={{
          marginTop: getStatusBarHeight() * 1.4,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => {
            //   nav?.length
            //     ? NavService?.navigate(nav)
            //     : back
            //     ? NavService?.goBack()
            //     : NavService?.openDrawer();
            // }}
            onPress={() => {
              nav?.length
                ? NavService?.navigate(nav)
                : back
                ? NavService?.goBack()
                : onBack
                ? onBack()
                : NavService?.openDrawer();
              
            }}

            style={[{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: menu ? colors.backgroundborder : 'transparent',
              borderRadius: menu ? 5 : 0,
              left: 20,
              width: 30,
              height: 30,
              justifyContent: 'center',
              // ...Shadows.shadow5,
              borderColor: colors.belege,
            },AppStyle]}>
            {back && (
              <Image
                source={appIcons.backIcon}
                style={{
                  width: 17,
                  height: 17,
                  resizeMode: 'contain',
                  tintColor: colors.back,
                }}
              />
            )}
            {onBack && (
              <Image
              source={appIcons.backIcon}
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                tintColor: colors.back,
              }}
            />
            )}
            {menu && (
              <Image
                source={appIcons.menu}
                style={{
                  width: 20,
                  height: 16,
                  resizeMode: 'contain',
                  tintColor: colors.constantcolor,
                }}
              />
            )}
          </TouchableOpacity>

          <View>
            <Text
              style={[
                {
                  color: colors.title,
                  fontWeight: '700',
                  fontSize: size.large,
                  fontFamily: family.RedHatDisplay_Bold,
                },
                titlestyle,
              ]}>
              {title}
            </Text>
          </View>
          {notification && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService?.navigate('Notifications');
                Keyboard.dismiss()
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: colors.backgroundborder,
                ...Shadows.shadow5,
              }}>
              <Image
                source={lightTheme == 'light' ? appIcons.notificationlight : appIcons.notifcationdark }
                style={{
                  width: 14,
                  height: 18,
                  resizeMode: 'contain',
                  // tintColor: colors.constantcolor,
                }}
              />
            </TouchableOpacity>
          )}
          {dots && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onSubmit}
              style={{
                position: 'absolute',
                right: 20,
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 0,
              }}>
              <Image
                source={appIcons.threedots}
                style={{
                  width: 5,
                  height: 21,
                  resizeMode: 'contain',
                  tintColor: colors.border,
                }}
              />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => NavService?.navigate('EditProfile')}
              style={{
                position: 'absolute',
                right: 20,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: colors.backgroundborder,
                ...Shadows.shadow5,
              }}>
              <Image
                source={appIcons.pen}
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: 'contain',
                  tintColor: colors.constantcolor,
                }}
              />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  );
}

export default AppBackground;
