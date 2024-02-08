import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';
const { width } = Dimensions.get('screen');
const makeStyles = theme => {
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  emailstyle: {
    tintColor: colors.secondary
  },
  containerStyle: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: 50
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray,
    paddingBottom: 10,
    marginVertical: 5
  },
  placeholder: {
    width: 47,
    height: 47,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth:2,
    borderColor:colors.red
  },
  viewstyle1: {
    left: 12

  },
  textstyle1: {
    color: colors.nero,
    fontFamily: family.RedHatDisplay_SemiBold,
    fontSize: size.small
  },
  textstyle2: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Light,
    fontSize: size.tiny
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  current: {
    borderBottomWidth: 3,
    width: '50%',
    alignItems: 'center',
  },
  pending: {
    borderBottomWidth: 2,
    width: '50%',
    alignItems: 'center',
  },
  pendingtxt: {
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_Bold,
    paddingVertical: 7.5,
  },
  accept: {
    borderRadius: 5,
    width: '35%',
    height: 36,
    marginHorizontal: 4,
    backgroundColor:colors.yellow
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%'
  },
  accepttxt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Regular
  },
  cancel: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25
  },
  canceltxt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium
  },
  textStyle: {
    fontSize: size.tiny,
    fontFamily:family.RedHatDisplay_SemiBold
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%'
  },
  accepted: {
    width: '60%',
    backgroundColor: colors.red,
    height: 36,
    alignSelf: 'flex-end',
    borderRadius:5
  }

});

}
export default makeStyles
