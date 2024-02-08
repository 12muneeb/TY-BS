import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignSelf: 'center',
    right: 5
  },
  icon: {
    width: 15,
    height: 15,
    right: 5
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    justifyContent: 'center'
  },
  title: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
    left: 5
  },
  viewstyle1: {
    alignItems: 'center',
    marginVertical: 20
  },
  subscribe: {
    color: colors.black,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Bold,
    paddingVertical: 10
  },
 

});

export default styles;
