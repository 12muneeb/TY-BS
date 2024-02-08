import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, family, size} from '../utils';
import Img from './Img';
import NavService from './NavService';
import {useTheme} from '@react-navigation/native';

const FlatComponent = ({item, notificationdesc, onSubmit, msg}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.mainView}
      activeOpacity={0.8}
      onPress={onSubmit}>
      <View style={styles.flex}>
        <Img local={true} src={item.image} style={styles.placeholder} />
        <View style={styles.viewstyle1}>
          <Text style={[styles.textstyle1, {color: colors.text}]}>
            {item.title}
          </Text>
          <Text style={[styles.textstyle2, {color: colors.inputtext}]}>
            {notificationdesc ? item.desc2 : msg ? item.desc3 : item?.desc}
          </Text>
        </View>
      </View>
      <View style={styles.toggle}>
        <View style={styles.list}>
          <Text style={styles.count}>1</Text>
        </View>
        <Text style={[styles.time, {color: colors.inputtext}]}>
          {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatComponent;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray,
    paddingBottom: 10,
    marginVertical: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
  },
  placeholder: {
    width: 47,
    height: 47,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.red,
  },
  viewstyle1: {
    left: 12,
  },
  textstyle1: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.small,
  },
  textstyle2: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Light,
    fontSize: size.tiny,
  },
  toggle: {
    width: '20%',
    alignItems: 'center',
  },
  time: {
    fontSize: size.xxtiny,
    fontFamily: family.RedHatDisplay_Light,
    color: colors.black,
  },
  list: {
    backgroundColor: colors.red,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 2,
  },
  count: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.RedHatDisplay_Bold,
  },
});
