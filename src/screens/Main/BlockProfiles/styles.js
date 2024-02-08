import {StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  emailstyle: {
    tintColor: colors.secondary,
  },
  containerStyle: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: 50,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.78,
    borderBottomColor: colors.secondary,
    paddingBottom: 10,
    marginVertical: 5,
  },
  placeholder: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth:2,
    borderColor:colors.red
  },
  viewstyle1: {
    left: 10,
  },
  textstyle1: {
    color: colors.nero,
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.small,
  },
  textstyle2: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Light,
    fontSize: size.tiny,
    maxWidth: 150,
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  current: {
    borderBottomWidth: 2,
    width: '50%',
    alignItems: 'center',
  },
  pending: {
    borderBottomWidth: 2,
    width: '50%',
    alignItems: 'center',
  },
  pendingtxt: {
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Bold,
    paddingVertical: 5,
  },
  accept: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
  toggle: {
    flexDirection: 'row',
  },
  accepttxt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Regular,
  },
 
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
