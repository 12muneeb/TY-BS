import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, family, size} from '../utils';
import Img from './Img';
import {appIcons, appImages} from '../assets';
import {useTheme} from '@react-navigation/native';
import Shadows from '../helpers/Shadows';
const ProfileCard = ({
  socialhandles,
  item,
  hobbies,
  intersets,
  document,
  data,
  banner,
  cross,
  profilebutton,
  onBack,
  BlockProfile,
  ReportProfile,
  handleCross,
}) => {
  const {colors} = useTheme();
  return (
    <>
      {banner && (
        <View style={styles.bannercontainer}>
          <ImageBackground
            source={item.image}
            style={styles.banner}
            resizeMode="cover"
            imageStyle={{borderRadius: 25}}>
            <View
              style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: 10,
                ...Shadows.shadow5,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: size.title,
                  fontFamily: family.RedHatDisplay_Bold,
                }}>
                {item.text}
              </Text>
            </View>
          </ImageBackground>
        </View>
      )}

      {socialhandles && (
        <View style={styles.socialcontainer}>
          <View style={styles.maincontainer}>
            <Img
              local
              src={item.image}
              style={styles.socialimg}
              resizeMode={'contain'}
            />
          </View>
          <Pressable>
            <Text style={[styles.link, {color: colors.inputtext}]}>
              {item.link}
            </Text>
          </Pressable>
        </View>
      )}
      {hobbies && (
        <View style={[styles.hobbies, {backgroundColor: colors.background}]}>
          <Img
            local
            src={item.image}
            resizeMode={'contain'}
            style={styles.hobbiesimg}
          />
        </View>
      )}
      {intersets && (
        <View style={[styles.tag, {backgroundColor: colors.button}]}>
          <Text style={[styles.tagtxt, {color: colors.iconcolor}]}>
            {item.title}
          </Text>
        </View>
      )}
      {document && (
        <View style={[styles.document, {backgroundColor: colors.border}]}>
          {cross && (
            <TouchableOpacity
              style={[
                styles.documentcontainer,
                {backgroundColor: colors.iconcolors},
              ]}
              onPress={() => handleCross(item?.id)}>
              <Img
                local
                src={appIcons.cancel}
                style={styles.cancel}
                tintColor={colors.red}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          )}
          <Img
            local
            src={item.image}
            resizeMode={'contain'}
            style={styles.fileimg}
            tintColor={colors.iconcolor}
          />
        </View>
      )}
      {data && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: size.small,
              fontFamily: family.RedHatDisplay_SemiBold,
              color: colors.border,
            }}>
            {item.title}:
          </Text>
          <View style={{width:"30%"}}>
            <Text
              style={[
                {
                  fontSize: size.small,
                  fontFamily: family.RedHatDisplay_Light,
                  textAlign: 'left',
                },
                {color: colors.inputtext},
              ]}>
              {item.text}
            </Text>
          </View>
        </View>
      )}
      {profilebutton && (
        <>
          <TouchableOpacity
            style={styles.tchstyle}
            activeOpacity={0.8}
            onPress={onBack}>
            <Img
              local={true}
              src={appIcons.crossmark}
              style={{width: 18, height: 18, resizeMode: 'contain'}}
              tintColor={colors.iconcolors}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            activeOpacity={0.8}
            onPress={BlockProfile}>
            <Img
              local={true}
              src={appIcons.blockperson}
              style={styles.cartoon}
              resizeMode={'contain'}
              tintColor={colors.iconcolor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tchheart}
            activeOpacity={0.8}
            onPress={ReportProfile}>
            <Img
              local={true}
              src={appIcons.reportperson}
              style={styles.cartoon}
              resizeMode={'contain'}
              tintColor={colors.iconcolor}
            />
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  socialimg: {width: 10, height: 10},

  link: {
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Light,
    marginLeft: 8,
  },
  socialcontainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  maincontainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.red,
    padding: 7,
  },
  hobbiesimg: {width: 20, height: 20},
  hobbies: {
    // backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 8,
    ...Shadows.shadow5,
    margin: 5,
  },
  tagtxt: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.xsmall,
  },

  tag: {
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  documentcontainer: {
    position: 'absolute',
    top: 7,
    right: 7,
    // backgroundColor: colors.white,
    padding: 5,
    borderRadius: 20,
  },
  cancel: {width: 7, height: 7},
  fileimg: {width: 22, height: 27},
  document: {
    // backgroundColor: colors.red,
    borderRadius: 10,
    ...Shadows.shadow5,
    margin: 5,
    width: 90,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannercontainer: {
    width: 325,
    height: 352,
    borderRadius: 25,
    alignSelf: 'center',
  },
  banner: {width: '100%', height: '100%'},
  block: {
    backgroundColor: colors.yellow,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tchheart: {
    backgroundColor: colors.red,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartoon: {
    width: 25,
    height: 25,
  },
  tchstyle: {
    backgroundColor: colors.nero,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    ...Shadows.shadow5,
  },
});
