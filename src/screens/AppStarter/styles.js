import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../utils';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
  buttonContainer: {
    borderRadius: 8,
    width: width / 1.2,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    height: 55,
  },
  buttonInnerImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  buttonInnerText: {
    fontSize: size.normal,
    color: colors.white,
    fontFamily: family.RedHatDisplay_Medium,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },

  viewstyle2: {
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? height / 30 : height / 13,
  },
  viewstyle3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  textstyle3: {
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
    color: colors.black,
  },
  textstyle4: {
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_SemiBold,
    textDecorationLine: 'underline',
    color: colors.black,
  },
  login: {
    fontSize: size.xlarge,
    fontFamily: family.RedHatDisplay_Bold,
    color: colors.black,
  },

  textstyle6: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.xsmall,
  },
  prelogin: {
    marginTop: 30,
    marginBottom: 30,
  },
  space: {
    alignSelf: 'center',
    backgroundColor: 'red',
    height: 150,
  },
});

export default style;
