import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, size, family } from '../../../utils';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    viewStyle1: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 10,
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20
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
        top: 20
    },
    tchStyle2: {
        paddingBottom: 10,
        borderBottomWidth: 0.75,
        borderColor: colors.secondary
    },
    txtStyle1: {
        fontFamily: family.RedHatDisplay_Bold,
        fontSize: size.medium,
        textAlign: 'center',
    },
    txtStyle2: {
        color: colors.nero,
        fontSize: size.xxsmall,
        fontFamily: family.RedHatDisplay_Medium,
        left: 10,
    },
    txtStyle3: {
        color: colors.black,
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_Regular,
        textAlign: 'center'
    },
    txtStyle4: {
        color: colors.nero,
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_Medium,
        left: 10,
        marginVertical: 10
    },
    txtStyle5: {
        color: colors.nero,
        fontSize: size.small,
        fontFamily: family.RedHatDisplay_Regular,
        textAlign: 'center',
    },
    txtStyle6: {
        color: colors.nero,
        fontSize: size.normal,
        fontFamily: family.RedHatDisplay_Bold,
        left: 10,
        marginTop: 20
    },
    btnstyle: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: colors.red,
        marginTop: 14,
        borderRadius:10
    },
    txtbtn:{
        fontFamily: family.RedHatDisplay_Bold
    }
});

export default styles;
