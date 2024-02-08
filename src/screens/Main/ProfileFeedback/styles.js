import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'
import Shadows from '../../../helpers/Shadows'

export const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 8,
        width: '100%',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        height: 55
      },
      upload:{backgroundColor:'red',width:70,height:70,justifyContent:'center',alignItems:'center',borderWidth:5,
      borderColor:colors.white,borderRadius:50,...Shadows.shadow5,position:'absolute',bottom:35,right:20},
      uploadimg:{width: 20, height: 20},
      postbtn:{
        borderRadius:10,
        backgroundColor:colors.red,
        bottom:10
      }
})