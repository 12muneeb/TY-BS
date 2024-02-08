import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
// import appStyles from '../../appStyles';
const {width, height} = Dimensions.get('window');

const makeStyles = theme => {
  return StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      width: '100%',
      
      // marginTop:30,
      paddingHorizontal:20
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
      fontSize: size.normal,
      fontWeight: '600',
      color: colors.secondary,
      marginVertical: 20,
    },
    textNormal: {
      fontSize: size.medium,
      color: colors.secondary,
      fontFamily: family.RedHatDisplay_ExtraBold,
    },
    textNormalWithColor: {
      color: colors.primary,
      fontSize: size.medium,
      fontFamily: family.RedHatDisplay_ExtraBold,
    },
    applogo: {
      width: width * 0.91,
      height: height * 0.22,
      resizeMode: 'contain',
      marginVertical: '12%',
    },
    emailstyle: {
      tintColor: colors.cred,
    },
    styleRight: {
      tintColor: colors.secondary,
    },
    login: {
      fontSize: size.large,
      fontFamily:family.RedHatDisplay_Bold,
      color:colors.black,
    },
    containerStyle: {
      borderRadius: 8,
      backgroundColor:colors.lightYellow,
      width: '95%',
    },
    forgot: {
      alignSelf: 'flex-end',
    },
    btn: {
      borderRadius: 8,
      backgroundColor: colors.cred,
      height: 55,
      marginTop: 15,
      
      width:width - 60,
    },
    text: {
      fontFamily: family.RedHatDisplay_Bold,
      fontSize: size.medium,
      color:colors.white
    },
    prelogin: {
      marginTop: 30,
      marginBottom:10,
      textAlign:'center',
      alignItems:'center',
      
    },
   
    names: {
      fontSize: size.xsmall,
      fontFamily: family.RedHatDisplay_Medium,
      color: colors.darkGray,
      marginVertical:5
      // marginHorizontal:10
    },
  });
};
export default makeStyles;
