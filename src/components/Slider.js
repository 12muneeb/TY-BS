import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, PanResponder, Image, Text } from 'react-native';
import { appIcons } from '../assets';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const CustomSlider = ({
  containerStyles,
  value = 0,
  minimumValue = 0,
  maximumValue = 10,
  onValueChange = () => {},
  children,
}) => {
  const [thumbPosition, setThumbPosition] = useState((value - minimumValue) / (maximumValue - minimumValue));
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const newThumbPosition = Math.min(1, Math.max(0, thumbPosition + gestureState.dx / width));
      const newValue = minimumValue + newThumbPosition * (maximumValue - minimumValue);
      setThumbPosition(newThumbPosition);
      onValueChange(newValue);
    },
  });

  const lightTheme = useSelector((state) => state?.appReducer?.appTheme);
  const { colors } = useTheme();

  return (
    <View style={[styles.container, containerStyles]} {...panResponder.panHandlers}>
      <View style={[styles.track, { backgroundColor: colors.border }]} />
      <Image
        source={lightTheme === 'light' ? appIcons.sliderlight : appIcons.sliderdark}
        style={[
          styles.thumb,
          {
            left: thumbPosition * 100 + '%',
          },
        ]}
      />
      {children}
    </View>
  );
};

export default CustomSlider;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 24,
    alignSelf: 'center',
  },
  track: {
    height: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 5,
    left: 5,
    right: 0,
    width: '95%',
  },
  thumb: {
    width: 24, 
    height: 24, 
    top:-5
  
  },
});
