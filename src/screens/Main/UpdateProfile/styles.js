import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width, height} = Dimensions.get('window');

const makeStyles = theme => {
  return StyleSheet.create({
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    placeholder: {
      width: 55,
      height: 55,
      resizeMode: 'contain',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colors.red,
    },
    viewstyle1: {
      left: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
    },
    textstyle1: {
      color: theme.text,
      fontFamily: family.RedHatDisplay_Bold,
      fontSize: size.normal,
    },
    containerheight: {
      height: 150,
      backgroundColor: theme.borderline,
      width: '100%',
      borderRadius: 5,
      paddingHorizontal: 7,
      paddingVertical: 2,
      marginTop: 20,
      borderWidth: 0.7,
      borderColor: theme.line,
    },
    searchcontainerheight: {
      height: 120,
    },

    thumbbg: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    tchstyle: {
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      left: 10,
    },
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },
    cartoon: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      right: 10,
    },
    formarginhorizontal: {
      marginHorizontal: 10,
    },
    uplaodbtn: {
      backgroundColor: colors.secondary,
    },
    images: {
      width: 100,
      height: 100,
      borderRadius: 10,
      alignItems: 'flex-end',
      marginHorizontal: 5,
      alignSelf: 'flex-end',
    },
    // closeIconCont: {
    //   position: 'absolute',
    //   width: 15,
    //   height: 15,
    //   borderRadius: 100,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   bottom: 15,
    //   right: 5,
    // },
    // closeIcon: {
    //   width: 50,
    //   height: 50,
    // },
    picker: {
      backgroundColor: theme.updatebtn,
      width: '100%',
      height: 55,
      borderRadius: 8,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    upload: {
      color: colors.white,
      fontFamily: family.RedHatDisplay_Medium,
      fontSize: size.medium,
    },
    formarginvertical: {
      marginTop: 20,
    },
    imageParent: {
      width: '100%',
    },

    buttons: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 13,
    },
    feedback: {
      width: 112,
      height: 35,
      borderRadius: 10,
      marginLeft: 12,
      marginBottom: 28,
      backgroundColor: colors.lightred,
    },

    postbtn: {
      width: 87,
      height: 35,
      borderRadius: 10,
      backgroundColor: colors.lightred,
    },
    imagescroll: {
      width: '100%',
    },
    imgbgscroll: {
      width: 100,
      height: 100,
      marginHorizontal: 10,
    },
    closeIconCont: {
      position: 'absolute',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      right: 10,
      backgroundColor: colors.white,
      padding: 3,
      borderColor: colors.red,
      borderWidth: 2,
      top: 8,
    },
    closeIcon: {
      width: 8,
      height: 8,
    },
    btn: {flex: 1, justifyContent: 'flex-end', paddingVertical: 20},
    video:{  width: 100,
      height: 100,
      borderRadius: 10,
      alignItems: "flex-end",
      marginHorizontal: 5,
      alignSelf:'flex-end',}
  });
};
export default makeStyles;
