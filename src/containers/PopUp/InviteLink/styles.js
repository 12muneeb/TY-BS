import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: colors.belege,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 10,
  },
  viewStyle2: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    right: 2,
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
    color: colors.black,
    fontSize: size.h4,
    fontFamily: family.RedHatDisplay_Bold,
    textAlign: 'center',
    marginTop: 20,
  },
  txtStyle2: {
    color: colors.red,
    fontSize: size.normal,
    fontFamily: family.RedHatDisplay_SemiBold,
    marginTop: 5,
    marginBottom: 10,
  },
  btnstyle: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.red,
    marginTop: 25,
    borderRadius: 10,
  },
  txtbtn: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
  },
  imgbg1: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },
  fb:{alignItems: 'center',marginRight:30},
  fbicon:{width: 40, height: 40},
  fbtxt:{
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Regular,
    color: '#1674EA',
  },
  icncontainer:{ alignItems: 'center',},
  img:{width: 40, height: 40},
  txt:{
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Regular,
  },
  input:{
    backgroundColor: '#F6D3C5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
  }
});

export default styles;
