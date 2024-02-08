import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
    fontFamily: family.RedHatDisplay_Regular,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
    fontFamily: family.RedHatDisplay_Regular,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logoStyle: {
    position: 'relative',
  },
  upload: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 20,
    right: '28%',
  },
  containerStyle: {
    borderRadius: 10,
    width:'100%',
    backgroundColor:colors.lightYellow,
    height:55
  },
  forgot: {
    alignSelf: 'flex-end'
  },
  containerStyleBio: {
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    height: 100,
    // marginTop:18
  },
  forgot: {
    alignSelf: 'flex-end'
  },
  viewStyle5: {
    backgroundColor: colors.white,
    width: width - 40,
    height: 60,
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: 18
  },
  gender: {
    backgroundColor: colors.white,
    width: width - 40,
    height: 60,
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: 0,
    justifyContent: 'flex-start',
  },
  gendercolor: {
    color: colors.gray,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.small,
    left: 15
  },
  btn: {
    borderRadius: 10,
    backgroundColor: colors.red,
    height: 55,
    width:'100%',
    marginTop:30
  },
  text: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
    color:colors.white
  },
  dropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lightYellow,
    width: width - 44,
    height: 55,
    borderRadius:10,
    
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop:10
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    width: width - 44,
    height: 60,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop:18
  },
  caret: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor:colors.red
  },
  carettext: {
    fontSize: size.medium,
    color: colors.nero,
    fontFamily: family.RedHatDisplay_Medium,
    marginTop: 5
  },
  carettextafter: {
    fontSize: size.medium,
    color: colors.black,
    fontFamily: family.RedHatDisplay_Medium,
    marginTop: 5
  },
  upload: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  pictures: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 80,
    paddingVertical: 25,
    borderRadius: 10,
    marginVertical: 20
  },
  pics: {
    marginVertical: 10,
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Bold,
    color: colors.secondary,
  },
  mainCont: {
    width: '100%',
    marginTop: 18,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  closeIconCont: {
    position: "absolute",
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    top: 5,
    right: 5,
    borderColor: colors.white,
    borderWidth: 1,
    padding:3
  },
  closeIcon: {
    width: 12,
    height: 12,
  },
  propertyImage: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageBtn: {
    width: '100%',
    height: 130,
    borderColor: colors.red,
    borderStyle: 'dashed',
    borderWidth: 2.4,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    overflow: "hidden",
    marginTop: 18
  },
  up: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor:colors.red
  },
  interest: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  remove: {
    height: 12,
    width: 12,
    
  },
  tagtxt: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Bold,
    
  },

  tag: {
    paddingVertical: 10,
    margin: 5,
    backgroundColor:'#FF8E8E',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:15,
  },
  viewStyle1: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    bottom: 5,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tint:{
    tintColor:colors.secondary
  },
  titleStyle:{
    color:colors.secondary,
    fontSize:size.xlarge,
    top:10
  },
  mainview:{
    alignItems: 'center', alignSelf: 'center', marginTop: 0
  },
  secondview:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  img:{
    width: 18, height: 18, resizeMode: 'contain'
  },
  gender: {
    height: 55,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor:colors.lightYellow,
    ...Shadows.shadow0,
    justifyContent:'flex-start',
    width:'100%',
    alignSelf:'center'
  },
  gendercolor: {
    color: colors.nero,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.small,
    left: 15
  },
  gendercolorafter: {
    color: colors.nero,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.small,
    left: 15
  },
  containerheight:{ 
    height: 119,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 10,
   
  },
  searchcontainerheight:{
    height: 120,
    fontFamily:family.RedHatDisplay_Medium
  },
});

export default styles;
