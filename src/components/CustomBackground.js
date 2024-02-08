import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons, appImages} from '../assets';
import NavService from '../helpers/NavService';
import Logo from './Logo';
import {colors} from '../utils';
import {family, size} from '../utils/sizes';

const {width, height} = Dimensions?.get('screen');

export default ({
  children,
  showLogo = true,
  back = true,
  title = true,
  titleText,
  onBack = null,
  background = false,
  number = false,
  numbers = false,
  backPre = false,
}) => {
  return (
    <ImageBackground
      source={background ? null : appImages.background}
      style={{flex: 1, backgroundColor: background ? colors?.white : null}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        // style={{height: height, width: width}}
        contentContainerStyle={{
          // alignItems: 'center',
          // height: height,
          flexGrow: 1,

          // paddingTop: showLogo ? 0 : getStatusBarHeight(),
          // marginBottom: 10,
          // paddingBottom: 10,
        }}>
        {back && (
          <TouchableOpacity
            onPress={() => {
              if (onBack != null) {
                onBack();
              } else {
                NavService?.goBack();
              }
            }}
            style={{
              position: 'absolute',
              zIndex: 99,
              top: getStatusBarHeight() + 10,
              left: 22,
              padding: 5,
            }}>
            <Image
              source={appIcons.backIcon}
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                tintColor: colors.black,
              }}
            />
          </TouchableOpacity>
        )}
        {backPre && (
          <TouchableOpacity
            onPress={() => {
              if (onBack != null) {
                onBack();
              } else {
                NavService?.navigate('AppStarter');
              }
            }}
            style={{
              position: 'absolute',
              zIndex: 99,
              top: getStatusBarHeight() + 10,
              left: 22,
              padding: 5,
            }}>
            <Image
              source={appIcons.backIcon}
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                tintColor: colors.black,
              }}
            />
          </TouchableOpacity>
        )}

        {showLogo && (
          <View
            style={{
              // flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Platform?.OS == 'ios' ? height / 5.5 : height / 5.5,
              // backgroundColor:'red'
            }}>
            <Logo size={height / 5} />
          </View>
        )}
        {title && (
          <View>
            <Text
              style={[
                styles.headerSignInText,
                {top: getStatusBarHeight() + 10},
              ]}>
              {titleText}
            </Text>
          </View>
        )}
        {number && (
          <View
            style={{
              position: 'absolute',
              right: 15,
              top: getStatusBarHeight() + 8,
            }}>
            <Text
              style={{
                fontSize: size.large,
                fontFamily: family.RedHatDisplay_SemiBold,
                color: colors.nero,
              }}>
              1/2
            </Text>
          </View>
        )}
        {numbers && (
          <View
            style={{
              position: 'absolute',
              right: 15,
              top: getStatusBarHeight() + 8,
            }}>
            <Text
              style={{
                fontSize: size.large,
                fontFamily: family.RedHatDisplay_SemiBold,
                color: colors.nero,
              }}>
              2/2
            </Text>
          </View>
        )}
        <View
          style={{
            flex: 1,
            width: width,
            // backgroundColor: '#F5EEDE',
          }}>
          {children}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerSignInText: {
    fontSize: size.large,
    fontFamily: family?.RedHatDisplay_Bold,
    color: colors.black,
    // fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: 20,
  },
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonContainer: {
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {width: 25, height: 25, tintColor: '#9c9c9c'},
});
