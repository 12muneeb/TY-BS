import React, {Component, useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions,KeyboardAvoidingView, Keyboard,} from 'react-native';
import {colors} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Img from '../../../components/Img';
import CustomSlider from '../../../components/Slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styles from './styles';
import Shadows from '../../../helpers/Shadows';
import {useTheme} from '@react-navigation/native';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
const {width,height} = Dimensions.get('screen');

const Match = ({
  isModalVisible = false,
  currentfocus,


  
  onSubmit = () => {},
}) => {
  const [minValue, set_minValue] = useState(25);
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleAddressText = (newLocation) => {
    setLocation(newLocation);
  };

  const callback = (address, geometry) => {
    if (geometry && geometry.location) {
      setLatitude(geometry.location.lat);
      setLongitude(geometry.location.lng);
    }
    setLocation(address);
  };

  const handleInput = e => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [slidingValue, setSlidingValue] = useState(0);
  const [slidingDistance, setslidingDistance] = useState(0);
  const [multiSliderValue, setMultiSliderValue] = React.useState([0, 100]);
  const [address, setaddress] = useState('');
  const multiSliderValuesChange = values => setMultiSliderValue(values);

  const getCurrentSlidingValue = value => {
    setSlidingValue(Number(Math.ceil(value)));
  };
  const getCurrentSlidingDistance = value => {
    setslidingDistance(Number(Math.ceil(value)));
  };
  const handleCustomtext = value => {
    setaddress(value);
  };
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [setKeyboardStatus, setSetKeyboardStatus] = useState(false);


 
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const {colors} = useTheme();

  // const saveAddress = (address, geometry) => {
  //   console.log('geometry', geometry);
  //   setaddress(address);
  // };

  return (
    <CustomModal
      visible={isModalVisible}
      togglePopup={() => {
        currentfocus.setState({isModalVisible: false});
        setTimeout(() => {
          setMultiSliderValue([0, 100]);
          setslidingDistance('');
        }, 850);
      }}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        style={{marginBottom:  Platform.OS === 'ios' ? height / 4.5 : null}}>
      <View
        style={[
          styles.viewStyle1,
          {
            backgroundColor: colors.popup,
            borderWidth: 1,
            borderColor: colors.constantcolor,
          },
        ]}>
        <TouchableOpacity
          style={styles.tchStyle1}
          onPress={() => {
            currentfocus.setState({isModalVisible: false});
            setTimeout(() => {
              setMultiSliderValue([0, 100]);
              setslidingDistance('');
            }, 850);
          }}>
          <Img
            local={true}
            src={appIcons.cancel}
            style={{width: 14, height: 14}}
            tintColor={colors.text}
          />
        </TouchableOpacity>

        <Text style={[styles.txtStyle1, {color: colors.title}]}>
          Search By Filter
        </Text>

        <Text style={[styles.txtStyle2, {color: colors.title}]}>Age</Text>
        <View style={styles.viewStyle2}>
          <MultiSlider
            values={[multiSliderValue[0], multiSliderValue[1]]}
            sliderLength={280}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={100}
            step={1}
            allowOverlap
            snapped
            // customLabel={CustomLabel}
            trackStyle={{
              // You can adjust the track style for height here
              height: 6, // Adjust the height as needed
              backgroundColor: colors.border,
            }}
            unselectedStyle={{
              backgroundColor: colors.border,
            }}
            selectedStyle={{
              backgroundColor: colors.border,
            }}
            markerStyle={{
              backgroundColor: colors.iconcolor,
              width: 26,
              height: 26,
              borderWidth: 4,
              borderColor: colors.border,
              marginTop: 5,
            }}
          />
        </View>
        <Text style={styles.txtStyle3}>
          {multiSliderValue[0]}-{multiSliderValue[1]}
        </Text>
        <Text style={[styles.txtStyle4, {color: colors.title}]}>
          Maximum Distance
        </Text>
        <CustomSlider
          value={0}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => getCurrentSlidingDistance(value)}>
          <Text style={styles.txtStyle5}>{slidingDistance} Mi</Text>
        </CustomSlider>
        <Text style={[styles.txtStyle6, {color: colors.title}]}>
          Set Location
        </Text>
      
        <GooglePlaceAutocomplete
      addressText={location}
      handleAddressText={handleAddressText}
      placeholder={location ? location : ''}
      callback={callback}
      val={location}
      wrapperStyles={{
        borderRadius: 10,
        width: '100%',
        borderColor: colors.container,
        borderWidth: 1,
        backgroundColor: colors.borderline,
      }}
      contStyles={{backgroundColor: 'transparent'}}
      colortext={colors.title}
      placeholdercolor={colors.inputtext}
    />
         {/* <GooglePlaceAutocomplete
                placeholder={address ? address : 'Location'}
                callback={saveAddress}
                  wrapperStyles={{
            borderRadius: 10,
            width: '100%',
            borderColor: colors.container,
            borderWidth: 1,
            backgroundColor: colors.borderline,
          }}
          contStyles={{backgroundColor: 'transparent'}}
          colortext={colors.title}
          placeholdercolor={colors.inputtext}
              /> */}

        <CustomButton
          title={'Apply'}
          buttonStyle={[styles.btnstyle, {color: colors.iconcolor}]}
          textStyle={styles.txtbtn}
          onPress={() => {
            currentfocus.setState({isModalVisible: false});
            setTimeout(() => {
              setMultiSliderValue([0, 100]);
              setslidingDistance('');
              setaddress('');
            }, 850);
          }}
        />
      </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
};

export default Match;
