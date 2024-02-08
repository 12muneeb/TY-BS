import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    flex:1,
    marginTop:30
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderRadius: 8,
    color: colors.black,
    fontSize: size.medium,
    backgroundColor: colors.lightYellow,
  },
  textNormal: {
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_Regular,
    color: colors.black,
  },
  textNormalWithColor: {
    color: colors.red,
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_Bold,
    textDecorationLine: 'underline',
  },
  otpInput: {
    width: '90%',
    height: 20,
    alignSelf: 'center',
    // marginVertical: 40,
    color: colors.black,
    marginTop: 30,
  },
  timerText: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Bold,
  },
  login: {
    fontSize: size.large,
    fontFamily: family.RedHatDisplay_Bold,
    color: colors.black,
  },
  login_opt: {
    color: colors.white,
    fontSize: size.xlarge,
    fontFamily: family.RedHatDisplay_Medium,
    textAlign: 'center',
  },
  btn: {
    borderRadius: 50,
    backgroundColor: colors.secondary,
    height: 60,
    marginTop: 0,
    width: width - 65,
  },
  text: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
  },
  countview: {
    backgroundColor: colors.red,
    padding: 10,
    borderRadius: 60,
    borderWidth: 0.8,
    borderColor: colors.lightpink,
    marginTop: 54,
  },
  names: {
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
    color: colors.darkGray,
    textAlign: 'center',
  },
  prelogin: {
    // marginVertical:15
    marginTop: 30,
    marginBottom: 10,
  },
});

export default styles;
