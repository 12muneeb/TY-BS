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

  viewstyle1: {
    width: '100%',
    alignItems: 'center',
    ...Shadows.shadow5,
    paddingTop: 40,
  },
  smile: {
    width: 134,
    height: 134,
    resizeMode: 'contain',
  },
  mainview: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
  },
  txt1: {
    color: theme.inputtext,
    fontSize: size.xxlarge,
    fontFamily: family.RedHatDisplay_Bold,
    paddingTop: 10,
  },
  txt2: {
    color: theme.inputtext,
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Regular,
    paddingTop: 10,
    textAlign: 'center',
  },
  back: {
    backgroundColor: colors.red,
    width: '100%',
    position: 'absolute',
    bottom: 10,
    borderRadius: 10,
  },
  textbutton:{
    // color:theme.iconcolor
  }
});
}
export default makeStyles;
