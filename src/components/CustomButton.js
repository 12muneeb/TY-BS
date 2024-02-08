import React from 'react';
import {Dimensions, Text, Image, TouchableOpacity,View} from 'react-native';
import {colors, family, size} from '../utils';
import Shadows from '../helpers/Shadows';
const {width} = Dimensions.get('screen');
import {appIcons} from '../assets/index';
import {useTheme} from '@react-navigation/native';

export default function CustomButton(props) {
  const {color, title, onPress, buttonStyle, textStyle, disabled, nextBtn, nextStyle} =
    props;
    const {colors} = useTheme();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          // width: width - 44,
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color ? color : colors.primary,
          marginTop: '1%',
          borderRadius: 18,
          ...Shadows.shadow5,
          flexDirection: 'row',
          borderRadius: 30,
         
        },
        buttonStyle,
      ]}>
      <Text
        style={[
          {fontSize: size.medium, color: colors.iconcolor , fontFamily:family.RedHatDisplay_Medium},
          textStyle,
        ]}>
        {title}
      </Text>
      {nextBtn && (
        <View style={{position:'absolute',right:40}}>
          <Image
            resizeMode="contain"
            source={appIcons.caretDown}
            style={[{
              height: 18,
              width: 18,
              marginLeft: '50%',
              
            },nextStyle]}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
