import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
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
    justifyContent: 'center',
    marginVertical: 40,
  },
  subText: {
    fontSize: size.normal,
    fontWeight: '600',
    color: colors.secondary,
    marginVertical: 20,
  },
  textNormal: {
    fontSize: size.medium,
    color: colors.secondary,
    fontFamily: family.RedHatDisplay_ExtraBold,
  },
  textNormalWithColor: {
    color: colors.primary,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_ExtraBold,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  emailstyle: {
    tintColor: colors.secondary,
    width: 24,
    height: 24,
  },
  styleRight: {
    tintColor: colors.secondary,
  },
  login: {
    fontSize: size.xlarge,
    fontFamily: family.RedHatDisplay_Bold,
    color:colors.black
  },
  containerStyle: {
    borderRadius: 50,
    ...Shadows.shadow5,
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  btn: {
    borderRadius: 8,
    backgroundColor: colors.cred,
    height: 55,
    marginTop: 15,
    width: '90%',
    left:3
  },
  text: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
    color:colors.white
  },
  leftStyle: {
    tintColor: colors.secondary,
  },
  phoneContainer: {
    borderRadius: 8,
    backgroundColor: 'transparent',
    width:'87%'
  },
  textContainerPhone: {
    borderRadius: 8,
    height: 55,
    left: 7,
    backgroundColor: colors.lightYellow,
  },
  Flag: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 55,
    borderRadius: 8,
    backgroundColor: colors.lightYellow,
  },
  phone: {
    marginTop: 30,
  },
  prelogin: {
    marginTop:30,
    marginBottom:10
    
  },
  names: {
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
    color: colors.darkGray,
  },
});

export default styles;
