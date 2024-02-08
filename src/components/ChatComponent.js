import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import moment from 'moment';
import {colors, family, size} from '../utils';
import {appImages} from '../assets';
import CustomText from './CustomText';
import Img from './Img';
import Shadows from '../helpers/Shadows';
import {useTheme} from '@react-navigation/native';
const ChatComponent = ({item}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.rowFront}>
      <View>
        <View style={{flexDirection: 'row', marginLeft: 5}}>
          <View style={styles.img}>
            <Img src={item?.image} style={styles.react} local />
          </View>
          <View style={[styles.main,{backgroundColor:colors.button}]}>
            <Text style={[styles.details,{color:colors.iconcolor}]} >{item?.message}</Text>
          </View>
        </View>
        <Text style={[styles.day,{color:colors.inputtext}]}>12:30</Text>
      </View>
    </View>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  rowFront: {
    paddingVertical: 15,
    width: '80%',
  },
  day: {
    color: colors.nero,
    fontSize: size.xxsmall,
    alignSelf: 'flex-end',
    top: 10,
    right:8
  },

  react: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.red,
  },
  main: {
    marginLeft: 10,
    // backgroundColor: colors.lightpink,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
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
    color: '#FFFFFF',
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Light,
    width: '80%',
  },
  img: {
    ...Shadows.shadow5,
  },
});
