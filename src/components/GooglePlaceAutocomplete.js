import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GEOCODE_API_KEY} from '../config/WebService';
import {colors, family, size, WP} from '../utils';
import {appIcons} from '../assets';
const {width} = Dimensions.get('screen');
const GooglePlaceAutocomplete = ({
  callback,
  wrapperStyles,
  inputStyles,
  placeholder,
  iconColor,
  label,
  title,
  titleStyle,
  titleViewstyle,
  titleText,
  backgroundColor,
  rightIcon,
  onDelete,
  index,
  image,
  contStyles,
  imageStyle,
  colortext,
  placeholdercolor,
  addressText,
  handleAddressText,
}) => {
  return (
    <View style={[styles.geoLocationView, wrapperStyles]}>
      <GooglePlacesAutocomplete
        enableHighAccuracyLocation
        fetchDetails
        disableScroll
        backgroundColor
        rightIcon
        enablePoweredByContainer={false}
        keepResultsAfterBlur={true}
        listViewDisplayed={false}
        onDelete={() => this.deletePoint(index)} // Add the onDelete prop
        placeholder={placeholder ? placeholder : ''}
        onPress={(data, details = null) => {

          const {formatted_address, geometry} = details;
          callback(formatted_address, geometry, label);
        }}
        renderRightButton={() => (
          <View
            style={[
              {
                backgroundColor: '',
                height: 55,
                justifyContent: 'center',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
              imageStyle,
            ]}>
            <Image
              source={appIcons.address}
              style={[
                {
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  marginHorizontal: 16,
                },
              ]}
            />
          </View>
        )}
        styles={{
          textInput: [
            {
             
              borderRadius: 8,
              color: colors.black,
            },
            contStyles,
          ],
          description: {color: colors.black},
        }}
        textInputProps={{
          selection: { start: 1, end: 1 } ,
          // value: addressText,
          onChangeText: handleAddressText,
          placeholderTextColor: placeholdercolor
            ? placeholdercolor
            : colors.nero,
          fontSize: size.normal,
          paddingLeft: 15,
          fontFamily: family.RedHatDisplay_Medium,
          color: colortext ? colortext : colors.black,
        }}
        query={{
          key: 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk',
          language: 'en',
        }}
      />
      {rightIcon && (
        <View
          style={{
            // backgroundColor:'#fff'
            right: 10,
          }}>
          <Image
            source={appIcons.location}
            style={[
              {
                tintColor: 'red',
                height: 22,
                width: 22,
                resizeMode: 'contain',
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};
export default GooglePlaceAutocomplete;
const styles = StyleSheet.create({
  geoLocationView: {
    width: WP('90%'),
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 55,
    color: colors.black,
    borderRadius: 8,
  },
});
