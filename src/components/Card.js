import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import { colors, family, size } from '../utils';
import { appIcons } from '../assets';
import Img from './Img';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const Card = ({ onPress = () => { }, item, previous }) => {
  return (
    <View style={{marginRight:10}}>

      <TouchableOpacity style={styles.maincont} activeOpacity={0.8} onPress={() => NavService.navigate('MainProfile')}>
        <ImageBackground source={item?.image} style={{ width: width - 70, height: 380, resizeMode: 'contain', }} imageStyle={{ borderRadius: 25 }}>
          <ImageBackground source={appIcons.ameliabg} style={{ width: width - 70, height: 380, resizeMode: 'contain', justifyContent: 'flex-end' }} imageStyle={{ borderRadius: 25 }}>
            <View style={{
              alignItems: 'center',
              bottom: 18
            }}>
              <Text style={styles.amelia}>{item?.title}</Text>
              <Text style={styles.desc}>{item?.address}</Text>
              <Text style={styles.txt} numberOfLines={3}>
                {item?.description}
              </Text>
            </View>
          </ImageBackground>
        </ImageBackground>
        
        <View style={styles.flex}>
         
            <TouchableOpacity style={styles.tchstyle} activeOpacity={0.8}>
              <Img
                local={true}
                src={appIcons.crossmark}
                style={{ width: 18, height: 18, resizeMode: 'contain' }}
                tintColor={colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <Img
                local={true}
                src={appIcons.cartoon}
                style={{ width: 60, height: 60, resizeMode: 'contain', left: 20 }}
              />
            </TouchableOpacity>

        </View>
      </TouchableOpacity>

    </View>

  );
};

export default Card;

const styles = StyleSheet.create({


  name: { fontSize: 15, fontWeight: '600' },
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  tchstyle: {
    backgroundColor: colors.red,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20
  },
  txt: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_MediumItalic,
    textAlign: 'center',
    maxWidth: 300,
    paddingBottom: 5
  },
  desc: {
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.RedHatDisplay_MediumItalic,
    paddingBottom: 5,
    letterSpacing: 2.5

  },
  amelia: {
    color: colors.white,
    fontSize: size.title,
    fontFamily: family.RedHatDisplay_ExtraBoldItalic,
    paddingBottom: 5
  },
  maincont: {
    marginTop: 10,
    backgroundColor: colors.white,
    width: '100%',
    height: height * 0.66,
    alignItems: 'center',
    borderRadius: 25,
    paddingTop: 12,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    paddingHorizontal: 10
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:50

  }
});
