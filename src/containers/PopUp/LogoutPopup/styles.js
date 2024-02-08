import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, size, family} from '../../../utils';

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: colors.belege,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  viewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  tchStyle1: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  tchStyle2: {
    paddingBottom: 10,
    borderBottomWidth: 0.75,
    borderColor: colors.secondary,
  },
  txtStyle1: {
    color: colors.nero,
    fontSize: size.h4,
    fontFamily: family.RedHatDisplay_Bold,
    textAlign: 'center',
    top: 15,
  },
  txtStyle2: {
    color: colors.black,
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_Medium,
    textAlign: 'center',
    marginTop: 20,
  },
  btnstyle: {
    alignSelf: 'center',
    width: '50%',
    backgroundColor: colors.yellow,
    borderRadius: 5,
    height: 55,
  },
});

export default styles;
