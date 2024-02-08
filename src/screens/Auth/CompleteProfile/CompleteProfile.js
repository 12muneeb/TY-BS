import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput, {
  CustomPhoneInput,
  SearchBar,
} from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import {colors, size, family} from '../../../utils';
import {appIcons, appImages} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import styles from './styles';
import CustomCard from '../../../components/CustomCard';
import {ScrollView} from 'react-native-gesture-handler';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
import * as EmailValidator from 'email-validator';
import routes from '../../../routes';
const {height} = Dimensions?.get('screen');

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailAddress: '',
      profileImage: null,
      gender: '',
      bio: '',
      formattedPhoneNumber: '',
      phoneNumber: '',
      latitude: '',
      longitude: '',
      location: '',
      address: '',
      // phonenumber: '',
      showCalendar: {
        calendarState: false,
        calendarFor: '',
      },
      genderData: ['Male', 'Female'],
      setKeyboardStatus: false,
    };
    this.actionSheetStateRef = createRef();
  }

  componentDidMount() {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({setKeyboardStatus: true});
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({setKeyboardStatus: false});
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }

  onSubmit = () => {
    const {name, emailAddress, gender, bio, phoneNumber, address, location} =
      this.state;
    console.log(location, 'locationonSubmit');

    if (!name) {
      Toast.show({
        text1: `Full Name field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    }
    // else if (emailAddress === '' || email.length > 0) {
    //   Toast.show({
    //     text1: `Email field can't be empty`,
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // } else if (!EmailValidator.validate(emailAddress)) {
    //   Toast.show({
    //     text1: 'Email is not valid',
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // }
    else if (emailAddress.length > 0) {
      if (emailAddress === '' || email.length > 0) {
        Toast.show({
          text1: `Email field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!EmailValidator.validate(emailAddress)) {
        Toast.show({
          text1: 'Email is not valid',
          type: 'error',
          visibilityTime: 3000,
        });
      }
    } else if (phoneNumber.length > 0) {
      if (phoneNumber === '') {
        Toast.show({
          text1: `PhoneNumber can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (phoneNumber?.length < 11 || phoneNumber?.length > 16) {
        Toast.show({
          text1: 'Invalid phone number.',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (phoneNumber.includes('.') || phoneNumber.includes(',')) {
        Toast.show({
          text1: 'Invalid phone number.',
          type: 'error',
          visibilityTime: 3000,
        });
      }
    } else if (location === '') {
      Toast.show({
        text1: `Location can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (gender === '') {
      Toast.show({
        text1: `Please select gender`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (bio === '') {
      Toast.show({
        text1: `Bio field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Keyboard.dismiss();
      NavService.replace('Descriptions');
    }
  };
  callback = (address, geometry) => {
    if (address) {
      this.setState({
        latitude: geometry?.location.lat,
        location: address,
        longitude: geometry?.location.lng,
      });
    } else {
      this.setState({location: ''});
    }
  };
  render() {
    const {
      name,
      emailAddress,
      phonenumber,
      profileImage,
      gender,
      bio,
      setKeyboardStatus,
      genderData,
      formattedPhoneNumber,
      phoneNumber,
      address,
      latitude,
      longitude,
      location,
    } = this.state;
    console.log(location, 'location');
    const {email, phoneNo} = this?.props?.route.params;

    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };

    // const saveAddress = (address, geometry) => {
    //   console.log('geometry', geometry);
    //   this.setState({address: address});
    // };

    return (
      <CustomBackground
        showLogo={false}
        titleText={'Set Profile'}
        backPre
        // onBack={() => this.props.navigation.goBack()}
      >
        <View style={styles.profilecontainer}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <ProfileImage
              name={'UserName'}
              innerAsset={profileImage == null ? true : false}
              placeholderstyle={styles.profile}
              imageUri={
                profileImage !== null ? profileImage?.path : appImages.profile
              }
            />
            <View style={styles.viewStyle1}>
              <Image source={appIcons.upload} style={styles.upload} />
            </View>
          </ImagePicker>
        </View>
        <CustomCard>
          <KeyboardAvoidingView
            // behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{
              flex: 1,
              alignItems: 'center',
              // paddingBottom: setKeyboardStatus ? height / 3.4 : 0,
            }}
            keyboardVerticalOffset={0}>
            <View
              style={{paddingHorizontal: 20}}
              // contentContainerStyle={{}}
              // showsVerticalScrollIndicator={false}
            >
              <CustomTextInput
                placeholder={'Full Name'}
                placeholderColor={colors.nero}
                value={name}
                onChangeText={value => this.setState({name: value})}
                containerStyle={styles.containerStyle}
                textInputStyle={{color: colors.nero}}
              />
              {email && (
                <CustomTextInput
                  editable={false}
                  placeholder={'Email Address'}
                  keyboardType={'email-address'}
                  placeholderColor={colors.nero}
                  value={email ? email : emailAddress}
                  onChangeText={value => this.setState({email: value})}
                  containerStyle={styles.containerStyle}
                  textInputStyle={{color: colors.nero}}
                />
              )}

              {phoneNo && (
                <CustomPhoneInput
                  editable={false}
                  containerStyle={[
                    styles.containerStyle,
                    // {backgroundColor: theme.editinput},
                  ]}
                  placeholderTextColor={colors.black}
                  placeholderColor={colors.black}
                  placeholder={'Phone Number'}
                  value={phoneNo ? phoneNo : formattedPhoneNumber}
                  formattedPhoneNumber={formattedPhoneNumber}
                  phoneNumber={phoneNumber}
                  onChangePhoneInput={(phoneNumberFormat, phoneNumber) =>
                    this.setState({
                      formattedPhoneNumber: phoneNumberFormat,
                      phoneNumber: phoneNumber,
                    })
                  }
                />
              )}
              <GooglePlaceAutocomplete
                // addressText={location}
                handleAddressText={location => {
                  this.setState({location: '', latitude: '', longitude: ''});
                }}
                placeholder={address ? address : 'Location'}
                callback={this.callback}
                // val={location}
                wrapperStyles={styles.wrapmper}
                contStyles={styles.contStyles}
              />
              <CustomButton
                nextBtn
                nextStyle={{tintColor: colors.red}}
                title={gender ? gender : 'Gender Preference'}
                buttonStyle={styles.gender}
                textStyle={
                  gender ? styles.gendercolorafter : styles.gendercolor
                }
                onPress={() => this.actionSheetStateRef.current.show()}
              />
              <ActionSheetComponent
                ref={this.actionSheetStateRef}
                title="Select Gender"
                dataset={genderData}
                onPress={item => {
                  this.setState({
                    gender: item,
                  });
                }}
              />
              <SearchBar
                placeholder={'Bio'}
                value={bio}
                placeholderColor={colors.nero}
                onChangeText={value => this.setState({bio: value})}
                containerStyle={styles.containerheight}
                searchCustom={styles.searchcontainerheight}
                numberOfLines={2}
                multiline={true}
              />
              <View style={styles.botton}>
                <CustomButton
                  title="Continue"
                  onPress={this.onSubmit}
                  buttonStyle={styles.btn}
                  textStyle={styles.text}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </CustomCard>
      </CustomBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(CompleteProfile);
