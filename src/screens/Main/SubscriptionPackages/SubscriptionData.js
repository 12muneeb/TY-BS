import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavService from '../../../helpers/NavService';
import {colors, family, size} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import {useTheme} from '@react-navigation/native';
const SubscriptionData = ({item, onSubmit}) => {
  const {colors} = useTheme();
  return (
    <>
      <View style={styles.starter}>
        <Text style={[styles.txt, {color: colors.iconcolor}]}>
          {item?.title}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.iconcolor,
              fontSize: size.h6,
              fontFamily: family.RedHatDisplay_Bold,
              top: 8,
            }}>
            $
          </Text>
          <Text style={[styles.price, {color: colors.iconcolor}]}>
            {item?.price}
          </Text>
        </View>
        <Text
          style={{
            color: colors.iconcolor,
            left: 35,
            top: -10,
            fontSize: size.medium,
            fontFamily: family.RedHatDisplay_SemiBold,
          }}>
          Per Month
        </Text>

        <View style={styles.viewstyle}>
          <Text style={[styles.title, {color: colors.iconcolor}]}>
            {item?.desc}
          </Text>
        </View>

        <CustomButton
          onPress={onSubmit}
          title={'Subscription Now'}
          buttonStyle={[styles.btn,{backgroundColor:colors.constantcolor}]}
          textStyle={styles.txtbtn}
        />
      </View>
    </>
  );
};

export default SubscriptionData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  starter: {
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    height: 70,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 2,
    // borderColor: colors.secondary,
  },
  txt: {
    color: colors.white,
    fontSize: size.h4,
    fontFamily: family.RedHatDisplay_Bold,
  },
  content: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.red,
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    // height:'50%',
    paddingBottom: 50,
    backgroundColor: 'red',
  },
  price: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.xxhuge,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignSelf: 'center',
    right: 5,
  },
  icon: {
    width: 15,
    height: 15,
    right: 5,
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Regular,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  viewstyle1: {
    alignItems: 'center',
    marginVertical: 20,
  },
  subscribe: {
    color: colors.black,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Bold,
    paddingVertical: 10,
  },
  btn: {
    top: 35,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  txtbtn: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Bold,
  },
});
