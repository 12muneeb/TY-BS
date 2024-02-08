import {StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const makeStyles = theme => {
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  trackon: {
    width: 42,
    height: 24,
  },
  trackoff: {
    width: 42,
    height: 24,
    backgroundColor: colors.white,
  },
  thumbon: {
    height: 18,
    width: 18,
    marginLeft: 0,
    backgroundColor: colors.red,
  },
  thumboff: {
    height: 18,
    width: 18,
    marginLeft: 3,
    backgroundColor: colors.yellow,
  },
  placeholder: {
    width: 8,
    height: 14,
    resizeMode: 'contain',
  },
  mainView: {
    backgroundColor: colors.yellow,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
    ...Shadows.shadow5,
  },
  title: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_SemiBold,
  },
  btn: {
    backgroundColor: colors.red,
    marginVertical: 7,
    borderRadius: 8,
  },
  buttonChangeTheme: {
    backgroundColor: colors.yellow,
    marginVertical: 7,
    borderRadius: 8,
  },
});
}
export default makeStyles
