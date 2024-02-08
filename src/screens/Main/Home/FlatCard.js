import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Dimensions,Image } from 'react-native'
import React from 'react'
import Img from '../../../components/Img'
import { family,size,colors } from '../../../utils'
import { appIcons } from '../../../assets'
import {useTheme} from '@react-navigation/native';
import Shadows from '../../../helpers/Shadows'
const {width,height} = Dimensions.get('screen');
const FlatCard = ({item,onSubmit,onCancel,onOpen}) => {
  const {colors} = useTheme();
  return (
    <View style={{marginRight: 10, marginBottom: 20,height:'50%',}}>
          <View
            style={[styles.maincont,{backgroundColor:colors.container}]}
            activeOpacity={0.8}
            onPress={onSubmit}>
            <ImageBackground
              source={item?.image}
              style={styles.imgbg}
              imageStyle={{borderRadius: 25}}>
              <ImageBackground
                source={appIcons.ameliabg}
                style={styles.imgbg1}
                imageStyle={{borderRadius: 25}}>
                <View style={styles.infoview}>
                  <Text style={styles.amelia}>{item?.title}</Text>
                  <Text style={styles.desc}>{item?.address}</Text>
                  <Text style={styles.txt} numberOfLines={3}>
                    {item?.description}
                  </Text>
                </View>
              </ImageBackground>
            </ImageBackground>

            <View style={styles.flex}>
              <TouchableOpacity
                style={styles.tchstyle}
                activeOpacity={0.8}
                onPress={()=>onCancel(item?.id)}>
                <Img
                  local={true}
                  src={appIcons.crossmark}
                  style={styles.img}
                  tintColor={colors.iconcolors}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchablestyle}
                activeOpacity={0.9}
                onPress={onOpen}>
                <Image  source={appIcons.hearticon} style={[styles.cartoon,{tintColor:colors.iconcolor}]}   />
              </TouchableOpacity>
            </View>
          </View>
        </View>
  )
}

export default FlatCard

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
        borderRadius: 8,
        borderWidth: 0,
        borderColor: colors.secondary,
        width:'82%',
        justifyContent:'flex-start',
        alignSelf:'flex-start',
        height:55
      },
      filter: {
        width: 22,
        height: 22,
      },
      tch: {
        alignItems: 'center',
        backgroundColor: colors.red,
        borderRadius: 8,
        width: 55,
        height: 55,
        justifyContent: 'center',
        right: 50,
        alignSelf:'center'
      },
      viewStyle1 :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:20
      },
      margin:{
        marginTop:0
      },
      txtstyle1:{
        fontSize:size.h3,
        fontFamily: family.RedHatDisplay_SemiBold
      },
      txtstyle2:{
        color:colors.red,
        fontSize:size.h3,
        fontFamily: family.RedHatDisplay_SemiBold
      },
      previous: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        alignSelf: 'center'
      },
      txtstylematch: {
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_SemiBold
      },
      txtstyleprev: {
        color: colors.black,
        fontSize: size.tiny,
        fontFamily: family.RedHatDisplay_SemiBold,
        right: 5,
      },
      viewstyle1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:5,
        height:30,
      },
      viewstyle2: {
        flexDirection: 'row',
      },
      textInputStyle:{
        fontFamily:family.RedHatDisplay_Regular
      },
      name: { fontSize: 15, fontWeight: '600' },
      dot: {
        width: 15,
        height: 20,
        resizeMode: 'contain',
        tint: colors.black,
      },
      tchstyle: {
        backgroundColor: colors.nero,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20
      },
      txt: {
        color: colors.white,
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_Regular,
        textAlign: 'center',
        maxWidth: 300,
        paddingBottom: 5
      },
      desc: {
        color: colors.white,
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_Medium,
        paddingBottom: 5,
        letterSpacing: 2.5
    
      },
      amelia: {
        color: colors.white,
        fontSize: size.xxlarge,
        fontFamily: family.RedHatDisplay_SemiBold,
        paddingBottom: 5
      },
      maincont: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 10,
        ...Shadows.shadow5,
        paddingTop:5
      },
      flex: {
        flexDirection: 'row',
        paddingVertical:10
    
      },
      imgbg:{
        width: width - 70, height: 380, resizeMode: 'contain',
      },
      imgbg1:{
        width: width - 70, height: 380, resizeMode: 'contain', justifyContent: 'flex-end'
      },
      infoview:{
        alignItems: 'center',
        bottom: 18
      },
      img:{
        width: 18, height: 18, resizeMode: 'contain'
      },
      cartoon:{
        width: 18, height: 18, resizeMode:'contain',
      },
      touchablestyle:{
        backgroundColor: colors.red,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }
})