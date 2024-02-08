import {StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';

const makeStyles = theme => {
  return StyleSheet.create({
    tipstext: {
      fontSize: size.tiny,
      fontFamily: family.RedHatDisplay_Regular,
      color: theme.inputtext,
    },
    tipscontainer: {
      height: 77,
      backgroundColor: theme.container,
      borderColor: colors.white,
      borderWidth: 1,
      marginHorizontal: 10,
    },
    tipsfeature: {
      backgroundColor: theme.background,
      ...Shadows.shadow5,
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 50,
      marginBottom: 15,
    },
    description:{backgroundColor:theme.button,marginHorizontal:10,padding:10,borderRadius:8,...Shadows.shadow5,marginVertical:20}
  });
};
export default makeStyles;
