import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {colors} from '../utils';
import {ColorSpace} from 'react-native-reanimated';
const {height} = Dimensions?.get('screen');

const CustomCard = ({children, size}) => {
  return (
    <View
      style={[
        styles.container,
        // {
        //   height: size
        //     ? size
        //     : Platform.OS == 'ios'
        //     ? height / 1.6
        //     : height / 1.7,
        // },
      ]}>
      {children}
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: '100%',
    paddingBottom: 0,
    // alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomWidth: 1,
    borderWidth:2,
    borderColor: colors.brown,
    // justifyContent: 'center',
    // position: 'absolute',
    // bottom: 0,
    // marginLeft: 1.5,
    // marginRight: 1.5,
    borderBottomWidth:0,
    flex: 1,
  },
});
