import { StyleSheet } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  bg: {
    backgroundColor: colors.white
  },
  viewstyle1: {
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25
  },
  smile: {
    width: 100,
    height: 100,
    resizeMode: 'contain',

  },
  mainview: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt1: {
    color: colors.secondary,
    fontSize: size.h4,
    fontFamily: family.RedHatDisplay_ExtraBold,
    paddingTop: 5
  },
  txt2: {
    color: colors.black,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Medium,
    paddingBottom: 5
  },
  back: {
    backgroundColor: colors.secondary,
    width: '85%',
    marginTop:20
  }

});

export default styles;
