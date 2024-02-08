import { StyleSheet,Dimensions } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';
const {width} = Dimensions.get('screen')
const makeStyles = theme => {
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  starter: {
    backgroundColor: '#982424',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    height: 120,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
   
  },
  txt: {
    color: theme.constantcolor,
    fontSize: size.h1,
    fontFamily: family.RedHatDisplay_Bold
  },
  content: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    paddingVertical:10
  },
  price: {
    color: theme.constantcolor,
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.h1,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.red,
    alignSelf:'center',
    right:10
  },
  icon: {
    width: 15,
    height: 15,
    right:5
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    justifyContent:'center'
  },
  title: {
    color: theme.inputtext,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Regular,
  },
  viewstyle1:{
    alignItems:'center',
    marginVertical:20,
  
  },
  subscribe:{
    color:theme.inputtext,
    fontSize:size.xsmall,
    fontFamily:family.RedHatDisplay_SemiBold,
  },
  btn:{
    backgroundColor:theme.iconcolor,
    borderRadius:10,
    width:width - 40,
    backgroundColor:colors.yellow
  },
 maincontainer: {
    borderWidth: 1.5,
    padding: 3,
    borderColor: colors.yellow,
    borderRadius: 4,
  }

});
}
export default makeStyles;
