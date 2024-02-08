import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, size, family } from '../../../utils';
import Shadows from '../../../helpers/Shadows';

const { width, height } = Dimensions.get('screen')

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
        right: 2
    },
    tchStyle1: {
        position: 'absolute',
        right: 20,
        top: 20,
  },
    tchStyle2: {
        paddingBottom: 10,
        borderBottomWidth: 0.75,
        borderColor: colors.secondary
    },
    txtStyle1: {
        color: colors.nero,
        fontSize: size.large,
        fontFamily: family.RedHatDisplay_Bold,
        textAlign: 'center',
        marginTop: 20
    },
    txtStyle2: {
        color: colors.black,
        fontSize: size.small,
        fontFamily: family.RedHatDisplay_Medium,
        textAlign: 'center',
        marginTop: 5,
    },
    btnstyle: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: colors.red,
        marginTop: 25,
        borderRadius:10
    },
    txtbtn: {
        fontFamily: family.RedHatDisplay_Bold,
        fontSize: size.medium
    },
    imgbg1: {
        width: 150, height: 150, alignSelf: 'center',
    },
});

export default styles;
