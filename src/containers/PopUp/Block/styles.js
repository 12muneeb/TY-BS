import { StyleSheet, Dimensions } from 'react-native';
import { colors, HP, size, family } from '../../../utils';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    viewStyle1: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderRadius: 10,
        width: '100%',
        paddingTop: 50,
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
        color: colors.secondary,
        fontSize: size.medium,
        fontFamily: family.RedHatDisplay_ExtraBold
    },
    txtStyle2: {
        color: colors.secondary,
        fontSize: size.medium,
        fontFamily: family.RedHatDisplay_ExtraBold
    }
});

export default styles;
