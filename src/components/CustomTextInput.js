import React, {useState} from 'react';
import {TouchableOpacity, View, Image, TextInput, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {appIcons} from '../assets';
import {colors, size, family} from '../utils';
import {useTheme} from '@react-navigation/native';
export default function CustomTextInput(props) {
  // const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    emailstyle,
    styleRight,
    mainView,
    location,
    textInputStyle,
    lineStyle,
    line,
  } = props;
  const {colors} = useTheme();
  return (
    <View style={[{width: '100%', marginTop: 18}, mainView]}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.input,
            borderRadius: 10,
            paddingHorizontal: 7,
            height: 55,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={[
              {
                width: 18,
                height: 18,
                resizeMode: 'contain',
                tintColor: colors.iconcolor,
                marginHorizontal: 10,
              },
              emailstyle,
            ]}
          />
        ) : null}
        {line && (
          <Text style={[{color: colors.red, fontSize: size.large}, lineStyle]}>
            |
          </Text>
        )}
        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,
            },
            borderStyles,
          ]}>
          <TextInput
            placeholderTextColor={props?.placeholderColor || colors.inputtext}
            // returnKeyType="done" // Set the returnKeyType to 'done'
            // returnKeyLabel="Done"
            // onSubmitEditing={() => {
            //   // Handle the action when the "Done" button is pressed
            //   console.log('Done button pressed');
            // }}
            style={[
              {
                flex: 1,
                color: colors.inputtext,
                paddingLeft: 10,
                fontSize: size.small,
                fontFamily: family.RedHatDisplay_Medium,
              },
              textInputStyle,
            ]}
            // secureTextEntry={hidden}
            autoCapitalize="none"
            {...props}
          />
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              >
              <Image
                source={props?.rightIcon}
                style={[
                  {
                    height: 18,
                    width: 18,
                    resizeMode: 'contain',
                    right:10
                  },
                  styleRight,
                ]}
              />
            </TouchableOpacity>
          )}
          {props?.location && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                right: 5,
              }}>
              <Image
                source={appIcons.location}
                style={[
                  {
                    height: 22,
                    width: 22,
                    resizeMode: 'contain',
                    tintColor: 'red',
                  },
                  styleRight,
                ]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export function ProfileTextInput(props) {
  const {icon} = props;
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        paddingHorizontal: 10,

        // backgroundColor: colors.cardBackground,
      }}>
      <Image
        source={icon}
        style={{width: 15, height: 15, resizeMode: 'contain'}}
      />

      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: colors.primary,
          marginLeft: 10,
          fontFamily: family.Outfit_Regular,
        }}
        placeholderTextColor={'#A5A5A5'}
        {...props}
      />
    </View>
  );
}
export function CustomPhoneInput(props) {
  // const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    leftStyle,

  } = props;
  return (
    <View style={{width: '100%', marginTop: 18}}>
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 5,
            height: 55,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={[
              {
                width: 18,
                height: 18,
                resizeMode: 'contain',
                tintColor: colors.iconcolor,
                marginHorizontal: 10,
                // marginTop: 5,
              },
              leftStyle,
            ]}
          />
        ) : null}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInputMask
              type={'cel-phone'}
              style={{
                flex: 1,
                color:placeholderColor ? placeholderColor : colors.black,
                paddingLeft: 10,
                fontSize: size.small,
                fontFamily: family.RedHatDisplay_Medium,
              }}
              onChangeText={phoneNumberFormat => {
                let phoneNumber = phoneNumberFormat
                  .toString()
                  .replace(/\D+/g, '');
                props?.onChangePhoneInput(phoneNumberFormat, phoneNumber);
              }}
              maxLength={
                props?.formattedPhoneNumber.toString().startsWith('1') ? 18 : 19
              }
           
              options={
                props?.phoneNumber.startsWith('1')
                  ? {
                      dddMask: '9 (999) 999 - ',
                    }
                  : {
                      dddMask: '(999) 999 - ',
                    }
              }
              {...props}
            />
            {props.verify && (
              <Text
                style={{
                  color: colors.red,
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                Verify
              </Text>
            )}
          </View>
          {/* {props.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => setHidden(!hidden)}
              >
              <Image
                source={!hidden ? appIcons.Visible : appIcons.Unvisible}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </View>
  );
}
export function SearchBar(props) {
  // const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    iconcolor,
    searchCustom,
    numberOfLines,
    multiline,
    editable,
    searchStyle,
  } = props;
  return (
    <View style={[{width: '100%'}, searchStyle]}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '100%',
            flexDirection: 'row',
            backgroundColor: colors.lightYellow,
            borderRadius: 10,
            paddingHorizontal: 7,
            height: 55,
            paddingHorizontal: 7,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: props?.iconcolor,
              marginHorizontal: 10,
            }}
          />
        ) : null}
        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,
            },
            borderStyles,
          ]}>
          <TextInput
            placeholderTextColor={props?.placeholderColor || colors.darkGray}
            returnKeyType="done"
            blurOnSubmit={true}
            style={[
              {
                flex: 1,
                fontSize: size.xsmall,
                fontFamily: family.RedHatDisplay_Light,
                textAlignVertical: 'top',
                color: colors.inputtext,
              },
              searchCustom,
            ]}
            // secureTextEntry={hidden}
            autoCapitalize="none"
            numberOfLines={numberOfLines}
            multiline={multiline}
            editable={editable}
            // returnKeyLabel='Done'
            {...props}
          />
          {/* {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => setHidden(!hidden)}
              >
              <Image
                source={props.rightIcon}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </View>
  );
}
