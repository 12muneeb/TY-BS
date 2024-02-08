import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  starter: {
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    height: 70,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 2,
    // borderColor: colors.secondary,
  },
  txt: {
    color: colors.white,
    fontSize: size.h4,
    fontFamily: family.RedHatDisplay_Bold
  },
  content: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.red,
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    // height:'50%',
    paddingBottom:50,
    backgroundColor:'red'
  },
  price: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.xxhuge,
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
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Regular,
    textAlign:'center' ,
    paddingHorizontal:20
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
  btn: {
    top:35,
    width:'90%',
    borderRadius:10,
    backgroundColor:colors.white
  },
  txtbtn:{
    color:colors.black,
    fontFamily:family.RedHatDisplay_Bold
  }

});

export default styles;
