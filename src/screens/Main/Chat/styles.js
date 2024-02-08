import { StyleSheet, Dimensions,Platform } from 'react-native';
import { colors, family, platform, size } from '../../../utils';

const { width } = Dimensions.get("window");

const makeStyles = theme => {
    return StyleSheet.create({
    mainCont: {
        flex: 1,
        width: '100%',
    },

    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    search: {
        width: "90%"
    },

    flatListCont: {
        flexGrow: 1,
        paddingHorizontal: 3,
        marginHorizontal: 20,
        // paddingTop: width * 0.04,
    },

    flatListStyle: {
        flex: 1,
        marginBottom: 10
    },

    messageView: {
        justifyContent: 'space-between',
        height:68,
        backgroundColor: colors.red,
        borderRadius: 0,
        width: '100%',
        alignSelf: 'center',
        position:'absolute',
        bottom:0,
        paddingRight:10
    },

    textInput: {
        flex: 1,
        height: '100%',
        color: colors.white,
        fontSize: size.normal,
        fontFamily: family.RedHatDisplay_Medium,
        left: 20
    },

    icon: {
        width: 28,
        height: 28,
    },
    icon1: {
        width: 19,
        height: 19,
    },
    verticalLine: {
        width: 1.2,
        height: 25,
        backgroundColor: colors.gray,
        marginHorizontal: 8
    },


    titlestyle: {
        color: colors.secondary
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sendCont: {
        backgroundColor: colors.yellow,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 31,
        height: 31,
        marginRight: 10
    },
    msg: {
        right: 10,
        justifyContent:'center'
    },
    accept:{
        width:'50%',
        borderRadius:8,
        backgroundColor:theme.msgbutton,
        marginRight:10,
        alignSelf:'flex-end',
        height:45,
        marginVertical:5
    },
    textStyle:{
        fontSize:size.xsmall,
        fontFamily:family.RedHatDisplay_Medium
    }
});
}
export default makeStyles
