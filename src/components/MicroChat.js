import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Img from './Img';
import {ChatData} from '../utils/dummyData';
import moment from 'moment';

import {colors, size, family} from '../utils';
import {appImages} from '../assets';
import CustomText from './CustomText';
import Shadows from '../helpers/Shadows';
import {useTheme} from '@react-navigation/native';
const MicroChat = ({item}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.rowFront}>
      <View>
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <View style={[styles.main,{backgroundColor:colors.belege}]}>
            <Text style={styles.details}>{item?.message} </Text>
          </View>
          <View style={styles.img}>
            <Img src={appImages.profile} style={styles.react} local />
          </View>
        </View>
        <Text style={[styles.day,{color:colors.inputtext}]}>12:30</Text>
      </View>
    </View>
  );
};

export default MicroChat;

const styles = StyleSheet.create({
  rowFront: {
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'flex-end',
  },
  day: {
    color: colors.nero,
    fontSize: size.xxsmall,
    alignSelf: 'flex-start',
    top: 10,
    left:10
  },

  react: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.brown,
  },
  main: {
    marginRight: 10,
    // backgroundColor: '#DFC892',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 13,
    alignItems: 'center',
    width: '80%',
  },
  names: {
    color: colors.black,
    fontWeight: '600',
    fontSize: size.extraVSmall,
  },
  details: {
    color: colors.black,
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Light,
    width: '80%',
  },
  img: {
    ...Shadows.shadow5,
  },
});
