import {StyleSheet,Dimensions} from 'react-native';
import {colors, HP, WP, size , family} from '../../../utils';
const {width,height} = Dimensions.get('window');
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
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  subText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    marginVertical: 20,
  },
  textNormal: {
    fontSize: size.medium,
    color: colors.secondary,
    fontFamily:family.RedHatDisplay_ExtraBold
  },
  textNormalWithColor: {
    color: colors.primary,
    fontSize: size.medium,
    fontFamily:family.RedHatDisplay_ExtraBold
  },
  applogo:{
    width:width*0.91,
    height:height*0.22,
    resizeMode:"contain",
    marginVertical:"12%"
  },
  login: {
    color: colors.white,
    fontSize: size.xlarge,
    fontFamily: family.RedHatDisplay_ExtraBold,
  },
  emailstyle: {
    tintColor: colors.secondary,
    width: 24,
    height: 24
  },
  containerStyle: {
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  styleRight: {
    tintColor: colors.secondary
  },
  btn:{
    borderRadius: 50,
    backgroundColor:colors.secondary,
    height:60,
    marginTop:40
  },
  text:{
    fontFamily:family.RedHatDisplay_Bold,
    fontSize:size.medium
  }
});

export default styles;
