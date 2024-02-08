import { StyleSheet ,Dimensions, } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';
import Shadows from '../../../helpers/Shadows';

const { width, height } = Dimensions.get('screen')

const makeStyles = theme => {
return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  emailstyle: {
    tintColor: colors.secondary
  },
  containerStyle: {
    borderRadius: 8,
    borderWidth: 0,
    borderColor: colors.secondary,
    width:'82%',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    height:55
  },
  filter: {
    width: 22,
    height: 22,
  
  },
  tch: {
    alignItems: 'center',
    backgroundColor: theme.card,
    borderRadius: 8,
    width: 55,
    height: 55,
    justifyContent: 'center',
    right: 50,
    alignSelf:'center',
    ...Shadows.shadow5

  },
  viewStyle1 :{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:20
  },
  margin:{
    marginTop:0
  },
  txtstyle1:{
    fontSize:size.h3,
    fontFamily: family.RedHatDisplay_Bold,
    color:theme.text
  },
  txtstyle2:{
    color:colors.red,
    fontSize:size.h3,
    fontFamily: family.RedHatDisplay_Bold
  },
  previous: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  txtstylematch: {
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_SemiBold,
    color:theme.inputtext
  },
  txtstyleprev: {
    color: theme.back,
    fontSize: size.tiny,
    fontFamily: family.RedHatDisplay_Bold,
    right: 8,
  },
  viewstyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5,
    height:30,
  },
  viewstyle2: {
    flexDirection: 'row',
  },
  textInputStyle:{
    fontFamily:family.RedHatDisplay_Regular
  },
  name: { fontSize: 15, fontWeight: '600' },
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  tchstyle: {
    backgroundColor: colors.nero,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20
  },
  txt: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Regular,
    textAlign: 'center',
    maxWidth: 300,
    paddingBottom: 5
  },
  desc: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.RedHatDisplay_Medium,
    paddingBottom: 5,
    letterSpacing: 2.5

  },
  amelia: {
    color: colors.white,
    fontSize: size.xxlarge,
    fontFamily: family.RedHatDisplay_SemiBold,
    paddingBottom: 5
  },
  maincont: {
    marginTop: 10,
    backgroundColor: colors.white,
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
    paddingTop: 12,
   ...Shadows.shadow5,
    paddingHorizontal: 10,
    paddingVertical:10
  },
  flex: {
    flexDirection: 'row',
    paddingVertical:10

  },
  imgbg:{
    width: width - 70, height: 380, resizeMode: 'contain',
  },
  imgbg1:{
    width: width - 70, height: 380, resizeMode: 'contain', justifyContent: 'flex-end'
  },
  infoview:{
    alignItems: 'center',
    bottom: 18
  },
  img:{
    width: 18, height: 18, resizeMode: 'contain'
  },
  cartoon:{
    width: 18, height: 18, resizeMode: 'contain',
  },
  touchablestyle:{
    backgroundColor: colors.red,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});
}

export default makeStyles;
