import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
  Text,
  ImageBackground,
} from 'react-native';
import NavService from '../helpers/NavService';
import {colors, family, size} from '../utils';
import {appIcons, appImages} from '../assets';
import Shadows from '../helpers/Shadows';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const {width} = Dimensions.get('screen');

function TabBar({state, navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const lightTheme = useSelector(state => state?.appReducer?.appTheme);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const togglePopUp = () => {
    setIsVisible(!isVisible);
  };

  const navigateFromPopUp = nav => {
    togglePopUp();
    NavService.navigate(nav);
  };

  const onPress = routeName => {
    const navigateScreen = {
      Home: 'BottomTabs',
      Community: 'Community',
      Messages: 'Messages',
      Profile: 'Profile',
    };

    navigation.navigate(navigateScreen[routeName], {screen: routeName});
  };
  const {colors} = useTheme();
  return (
    <ImageBackground
      source={lightTheme == 'light' ?appImages.bottom2 : appImages.bottom1 }
      resizeMode="stretch"
      style={[
        {
          width: '100%',
          height: 70, 
          backgroundColor: colors.background,
          ...Shadows.shadow5,
          position: 'absolute',
          bottom: 0, 
        },
        keyboardStatus ? styles.hideTabNavigation : null,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 10,
          bottom: 0,
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          let imageSrc = appIcons.home;
          if (route.name === 'Home') imageSrc = appIcons.home;
          if (route.name === 'Community') imageSrc = appIcons.request;
          if (route.name === 'Messages') imageSrc = appIcons.chat;
          if (route.name === 'Profile') imageSrc = appIcons.profile;

          if (route.name === 'tabBar4') {
            return <View key={index + 1} style={styles.tabs} />;
          }

          return (
            <TouchableOpacity
              key={index + 1}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={() => onPress(route.name)}
              style={[
                styles.tabs,
                {backgroundColor: isFocused ? colors.tab : null},
                // keyboardStatus ? styles.hideTabNavigation : null,
              ]
              
              }>
              {isFocused && (
                <Image
                  source={appIcons.dot}
                  style={[{
                    height: 4,
                    width: 73,
                    tintColor: colors.iconcolors,
                    alignSelf: 'center',
                    top: -15,
                  },
                  keyboardStatus ? styles.hideTabNavigation : null,

                  ]
                }
                  
                  resizeMode="contain"
                />
              )}

              <Image
                source={imageSrc}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: isFocused ? colors.iconcolors : colors.iconcolor,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: isFocused ? colors.iconcolors : colors.iconcolor,
                  fontFamily: family.RedHatDisplay_Medium,
                  fontSize: size.tiny,
                }}>
                {route?.name === 'Messages' ? 'Chat' : route?.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: width * 0.4,
    borderRadius: 10,
  },
  buttonPerfectionNext: {
    // backgroundColor: colors.secondary,
    marginLeft: 15,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginHorizontal: 10,
  },
  hideTabNavigation: {
    width: 0,
    height: 0,
    position: 'absolute',
    bottom: 0,
  },
});

export default TabBar;
