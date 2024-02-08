import { StyleSheet } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  emailstyle: {
    tintColor: colors.secondary
  },
  containerStyle: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '82%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: 50
  },
  filter: {
    width: 24,
    height: 24,
  },
  tch: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    right: 50,
    alignSelf: 'center'
  },
  viewStyle1: {
    marginVertical: 10
  },
  margin: {
    marginTop: 0
  },
  txtstyle1: {
    color: colors.secondary,
    fontSize: size.xlarge,
    fontFamily: family.RedHatDisplay_ExtraBold
  },
  txtstyle2: {
    color: colors.black,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Regular,
    maxWidth: 325
  },
  tchstyle1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '25%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 5,
    backgroundColor: colors.secondary

  },
  interest: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  tagtxt: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.xsmall
  },

  tag: {
    padding: 10,
    margin: 5,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  thumbbg: {
    width: 100, height: 100, resizeMode: 'contain', justifyContent: 'flex-end', alignItems: 'flex-start'
  },
  imgbg: {
    width: 330, height: 300, resizeMode: 'contain', justifyContent: 'flex-end', alignItems: 'center',
  },
  imgbg1: {
    width: 330, height: 300, resizeMode: 'contain', marginHorizontal: 5
  },
  thumbbg1: {
    width: 100, height: 100, resizeMode: 'contain', marginHorizontal: 5
  },
  txtstyle3: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
    bottom: 10
  },
  viewStyle2: {
    // backgroundColor: colors.secondary,
    width: '100%',
    height: 250,
    borderRadius: 10
  },
  likes: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.xsmall,
    left: 10,
    bottom: 10
  },
  heart: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    left: 10,
    bottom: 10
  },
  tchstyle: {
    backgroundColor: colors.red,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  
  },
  flex:{
    flexDirection:'row',
    width:'100%',
    marginBottom:20,
    justifyContent:'space-evenly'
  },
  cartoon:{
    width: 60, height: 60, resizeMode: 'contain',right:10
  },
  sms:{
    width:20,
    height:20
  },
  tchsms:{
    backgroundColor:colors.secondary,
    width:45,
    height:45,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  parentView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  icon:{
    width: 18, height: 18, resizeMode: 'contain'
  },
  title:{
    color:colors.black,
    fontFamily:family.RedHatDisplay_Medium,
    fontSize:size.small,
    textAlign:'center',
    top:5
  },
  imageParent:{
    width:'100%'
  }

});

export default styles;
