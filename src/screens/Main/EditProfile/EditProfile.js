import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput, {SearchBar} from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import {colors, size, family} from '../../../utils';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import {Image as ImageCompressor} from 'react-native-compressor';
import Img from '../../../components/Img';
import {appIcons} from '../../../assets';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ProfileImage from '../../../components/ProfileImage';
import {CustomPhoneInput} from '../../../components/CustomTextInput';
import NavService from '../../../helpers/NavService';
import moment from 'moment';
import makeStyles from './styles';
import AppBackground from '../../../components/AppBackground';
import {useTheme} from '@react-navigation/native';
import PickerImageComponent from '../../../components/PickerImageComponent';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
import UploadCard from './UploadCard';
import {connect} from 'react-redux';
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'dummy',
      email: 'dummy@gmail.com',
      address: '',
      profileImage: null,
      DOB: '',
      gender: 'Male',
      genderData: ['Male', 'Female'],
      Interests: '',
      Weight: '55',
      height: '55',
      ethinicity: 'loreum Ipusm',
      Desired: 'Loreum Ipsum',
      sexual: 'Male',
      galleryAssets: [],
      galleryAssets1: [],
      latitude: '',
      longitude: '',
      location: '',
      address: '',
      texttag: 'Loreum Ipsum',
      phone: '+3485373950',
      Hobbies: '',
      age: '10',
      education: 'Primary',
      job: 'Software',
      facebookurl: 'www.facebook.com',
      instagramurl: 'www.instagram.com',
      linkedinurl: 'www.linkedin.com',
      texttags: 'Books',
      isClicked: false,
      isClicked1:false,
      showCalendar: {
        calendarState: false,
        calendarFor: '',
      },
      date: '',
      bio: 'Loreum Ipsum is a dummy text',
      Sexual: 'Male',
      phoneNumber: '1565646546456',
      formattedPhoneNumber: '78577897897',
      date_birth: '',
      address: '',
    };
    this.actionSheetStateRef = createRef();
    this.actionSheetStateRefEthinicity = createRef();
    this.actionSheetStateRefDesired = createRef();
    this.actionSheetStateRefSexual = createRef();
    this.actionSheetStateRefEducation = createRef();
    this.actionSheetStateRefgender = createRef();
  }
  onSubmit = () => {
    NavService.goBack();
  };
  // onSubmit = () => {
  //   const {
  //     name,
  //     email,
  //     gender,
  //     Sexual,
  //     Weight,
  //     Interests,
  //     height,
  //     ethinicity,
  //     Desired,
  //     sexual,
  //     date_birth,
  //     phone_number_value,
  //     Hobbies,
  //     age,
  //     education,
  //     job,
  //     facebookurl,
  //     instagramurl,8778
  //     linkedinurl,
  //     address,
  //   } = this.state;
  //   if (name == '') {
  //     Toast.show({
  //       text1: `Full Name field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (email == '') {
  //     Toast.show({
  //       text1: `Email field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (job == '') {
  //     Toast.show({
  //       text1: `Job field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (facebookurl == '') {
  //     Toast.show({
  //       text1: `Facebook Url field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (address == '') {
  //     Toast.show({
  //       text1: `Address can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (instagramurl == '') {
  //     Toast.show({
  //       text1: `Instagram Url field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (linkedinurl == '') {
  //     Toast.show({
  //       text1: `Linkedin Url field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (phone_number_value == '') {
  //     Toast.show({
  //       text1: `Phone number field cant't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   }
  //   else if (date_birth == '') {
  //     Toast.show({
  //       text1: `DOB field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   }
  //   else if (gender == '') {
  //     Toast.show({
  //       text1: `Please select gender`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (education == '') {
  //     Toast.show({
  //       text1: `Please select education`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (age == '') {
  //     Toast.show({
  //       text1: `Please select age`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (Sexual == '') {
  //     Toast.show({
  //       text1: `Please select gender prefence`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (Interests == '') {
  //     Toast.show({
  //       text1: `Please add interests`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (Hobbies == '') {
  //     Toast.show({
  //       text1: `Please add Hobbies`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (Weight == '') {
  //     Toast.show({
  //       text1: `Weight field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (height == '') {
  //     Toast.show({
  //       text1: `Height field can't be empty`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (ethinicity == '') {
  //     Toast.show({
  //       text1: `Please select ethinicity`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (Desired == '') {
  //     Toast.show({
  //       text1: `Please select Desired`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (sexual == '') {
  //     Toast.show({
  //       text1: `Please select Sexual Prefence`,
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else {
  //     // let payload = {
  //     //     email: 'abc@gmail.com',
  //     //     password: '123456',
  //     // };
  //     Toast.show({
  //       text1: 'Profile Updated successfully',
  //       type: 'success',
  //       visibilityTime: 3000,
  //     });
  //     // this.props.loginUser(payload);
  //     NavService.goBack();
  //   }
  // };
  handleTagDelete = () => {
    this.setState({ isClicked: true });
  };
  handleTagDelete1 = () => {
    this.setState({ isClicked1: true });
  };
  callback = (address, geometry) => {
    this.setState({latitude: geometry?.location.lat});
    this.setState({longitude: geometry?.location.lng});
    this.setState({location: address});
  };
  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {
      name,
      email,
      date_birth,
      date,
      bio,
      profileImage,
      gender,
      Sexual,
      genderData,
      showCalendar,
      Interests,
      Weight,
      height,
      ethinicity,
      sexual,
      Desired,
      galleryAssets,
      texttag,
      texttags,
      phoneNumber,
      formattedPhoneNumber,
      Hobbies,
      age,
      education,
      job,
      facebookurl,
      instagramurl,
      linkedinurl,
      address,
      galleryAssets1,
      isClicked,
      isClicked1,
      latitude,
      longitude,
      location,

    } = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const ethyType = ['Lorem Ipsum'];
    const DesiredType = ['Loreum', 'Loreum'];
    const sexualType = ['Male', 'Female'];
    const educationType = ['Primary', 'Secondary'];
    const genderType = ['Male', 'Female'];

    const callBackForGalleryAssets = galleryAssets => {
      this.setState({galleryAssets});
    };
    const updateImagesInGallery = async (
      path,
      mime,
      type,
      galleryAssets,
      callBackForGalleryAssets,
    ) => {
      let multipleImages = [];
      if (Array.isArray(path)) {
        const arr = path?.map(async item => {
          const result = await ImageCompressor.compress(item?.path, {
            maxHeight: 400,
            maxWidth: 400,
            quality: 1,
          });
          let imageObject = {
            uri: result,
            name: `Image${Date.now()}${item?.filename}.${item?.mime.slice(
              item?.mime.lastIndexOf('/') + 1,
            )}`,
            type: item?.mime,
            tempType: 'photo',
          };
          multipleImages.push(imageObject);
        });
        await Promise.all(arr);
        console.log('multipleImages', multipleImages);
        const mergeImagesWithExistingGalleryAssets = [
          ...galleryAssets,
          ...multipleImages,
        ];
        callBackForGalleryAssets(mergeImagesWithExistingGalleryAssets);
      } else {
        const getExistingGalleryAssets = [...galleryAssets];
        const imageObject = {
          uri: path,
          name: `Image${Date.now()}.${mime.slice(mime.lastIndexOf('/') + 1)}`,
          type: mime,
          tempType: type,
        };
        getExistingGalleryAssets.push(imageObject);
        callBackForGalleryAssets(getExistingGalleryAssets);
      }
      Keyboard.dismiss();
    };
    const handelClose = image => {
      const deleteImage = galleryAssets.filter(item => item?.uri !== image);
      this.setState({galleryAssets: deleteImage});
    };
    const handleTagDelete = index => {
      const {Interests} = this.state;
      Interests.splice(index, 1);
      this.setState({Interests});
    };
    const handleTagDeletes = index => {
      const {Hobbies} = this.state;
      Hobbies.splice(index, 1);
      this.setState({Hobbies});
    };
    const saveAddress = (address, geometry) => {
      console.log('geomerty', geometry);
      this.setState({address: address});
    };
    return (
      <AppBackground back title={'Edit Profile'} marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <PickerImageComponent />
            <PickerImageComponent />
            <PickerImageComponent />
            <PickerImageComponent />
          </View>
          <CustomTextInput
            placeholder={'Full Name'}
            placeholderColor={colors.inputtext}
            value={name}
            onChangeText={value => this.setState({name: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          <CustomTextInput
            maxLength={35}
            placeholder={'Email Address'}
            value={email}
            keyboardType={'email-address'}
            onChangeText={value => this.setState({email: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          <CustomPhoneInput
            containerStyle={[
              styles.containerStyle,
              {backgroundColor: theme.editinput},
            ]}
            placeholderTextColor={theme.inputtext}
            placeholderColor={theme.title}
            placeholder={'Phone Number'}
            value={formattedPhoneNumber}
            formattedPhoneNumber={formattedPhoneNumber}
            phoneNumber={phoneNumber}
            onChangePhoneInput={(phoneNumberFormat, phoneNumber) =>
              this.setState({
                formattedPhoneNumber: phoneNumberFormat,
                phoneNumber: phoneNumber,
              })
            }
          />
          {/* <GooglePlaceAutocomplete
            placeholder={address ? address : 'White House America'}
            callback={saveAddress}
            wrapperStyles={styles.wrapper}
            contStyles={styles.contStyles}
            colortext={theme.title}
            placeholdercolor={theme.inputtext}
            value={'America'}
            handleAddressText={location => this.setState({location})}
          /> */}
             <GooglePlaceAutocomplete
                addressText={location}
                handleAddressText={location => this.setState({location})}
                placeholder={address ? address : 'America'}
                callback={this.callback}
                val={location}
                wrapperStyles={styles.wrapper}
                contStyles={styles.contStyles}
                placeholdercolor={theme.title}
                colortext={theme.title}
              />

          <ActionSheetComponent
            ref={this.actionSheetStateRefgender}
            title="Gender Preference"
            dataset={genderType}
            onPress={item => {
              this.setState({
                gender: item,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.dropDown]}
            onPress={() => this.actionSheetStateRefgender.current.show()}>
            <Text style={gender ? styles.carettextafter : styles.carettext}>
              {gender ? gender : 'Gender Preference'}
            </Text>
            <Image source={appIcons.caretDown} style={styles.caret} />
          </TouchableOpacity>
          <SearchBar
            placeholder={'Bio'}
            value={bio}
            placeholderColor={theme.inputtext}
            onChangeText={value => this.setState({bio: value})}
            containerStyle={styles.containerheight}
            searchCustom={styles.searchcontainerheight}
            numberOfLines={2}
            multiline={true}
          />
          <ActionSheetComponent
            ref={this.actionSheetStateRefDesired}
            title="Desired"
            dataset={DesiredType}
            onPress={item => {
              this.setState({
                Desired: item,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.dropDown]}
            onPress={() => this.actionSheetStateRefDesired.current.show()}>
            <Text style={Desired ? styles.carettextafter : styles.carettext}>
              {Desired ? Desired : 'Desired'}
            </Text>
            <Image source={appIcons.caretDown} style={styles.caret} />
          </TouchableOpacity>
          <ActionSheetComponent
            ref={this.actionSheetStateRefSexual}
            title="Select Sexual Prefence"
            dataset={sexualType}
            onPress={item => {
              this.setState({
                sexual: item,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.dropDown]}
            onPress={() => this.actionSheetStateRefSexual.current.show()}>
            <Text style={sexual ? styles.carettextafter : styles.carettext}>
              {sexual ? sexual : 'Sexual Preference'}
            </Text>
            <Image source={appIcons.caretDown} style={styles.caret} />
          </TouchableOpacity>
          <CustomTextInput
            // leftIcon={appIcons.user}
            placeholder={'Interests'}
            value={texttag}
            textInputStyle={{color: theme.title}}
            containerStyle={styles.containerStyle}
            onSubmitEditing={() => {
              if (texttag.trim() !== '') {
                this.setState({
                  Interests: [...Interests, texttag],
                });
                this.setState({texttag: ''});
              }
            }}
            onChangeText={value => {
              this.setState({texttag: value});
            }}
          />
          {/* {Interests?.length > 0 ? ( */}
            <View style={styles.interest}>
              {/* {Interests?.map((item, index) => {
                return ( */}
                    {!isClicked1 ? (
                  <View  style={[styles.tag,{backgroundColor:theme.button}]}>
            {!isClicked1 ? <Text style={styles.tagtxt}>Lorem</Text> : null}
            <TouchableOpacity
              onPress={this.handleTagDelete1}
              style={{
                backgroundColor: colors.white,
                borderRadius: 10,
                padding: 4,
                justifyContent: 'center',
                left: 5,
              }}>
              <Img
                local
                style={styles.remove}
                src={appIcons.cross}
                resizeMode={'contain'}
                tintColor={'#FFC6C6'}
              />
            </TouchableOpacity>
      </View>
        ) : null}
                {/* );
              })} */}
            </View>
          {/* ) : null} */}
          <CustomTextInput
            // leftIcon={appIcons.user}
            placeholder={'Hobbies'}
            value={texttags}
            textInputStyle={{color: theme.title}}
            containerStyle={styles.containerStyle}
            onSubmitEditing={() => {
              if (texttags.trim() !== '') {
                this.setState({
                  Hobbies: [...Hobbies, texttags],
                });
                this.setState({texttags: ''});
              }
            }}
            onChangeText={value => {
              this.setState({texttags: value});
            }}
          />
          {/* {Hobbies?.length > 0 ? ( */}
            <View style={styles.interest}>
              {/* {Hobbies?.map((item, index) => {
                return ( */}
                  {!isClicked ? (
                  <View  style={[styles.tag,{backgroundColor:theme.button}]}>
            {!isClicked ? <Text style={styles.tagtxt}>Lorem</Text> : null}
            <TouchableOpacity
              onPress={this.handleTagDelete}
              style={{
                backgroundColor: colors.white,
                borderRadius: 10,
                padding: 4,
                justifyContent: 'center',
                left: 5,
              }}>
              <Img
                local
                style={styles.remove}
                src={appIcons.cross}
                resizeMode={'contain'}
                tintColor={'#FFC6C6'}
              />
            </TouchableOpacity>
      </View>
        ) : null}

                {/* );
              })} */}
            </View>
          {/* ) : null} */}
          <CustomTextInput
            maxLength={3}
            placeholder={'Age'}
            placeholderColor={colors.inputtext}
            keyboardType="numeric"
            value={age}
            onChangeText={value => this.setState({age: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />

          <CustomTextInput
            maxLength={3}
            keyboardType="numeric"
            placeholder={'Weight (kg)'}
            value={Weight}
            onChangeText={value => this.setState({Weight: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />

          <CustomTextInput
            maxLength={3}
            keyboardType="numeric"
            placeholder={'Height (Feet)'}
            value={height}
            onChangeText={value => this.setState({height: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          <ActionSheetComponent
            ref={this.actionSheetStateRefEthinicity}
            title="Select Ethincity"
            dataset={ethyType}
            onPress={item => {
              console.log('item', item);
              this.setState({
                ethinicity: item,
              });
            }}
          />

          <TouchableOpacity
            style={[styles.dropDown]}
            onPress={() => this.actionSheetStateRefEthinicity.current.show()}>
            <Text style={ethinicity ? styles.carettextafter : styles.carettext}>
              {ethinicity ? ethinicity : 'Ethinicity'}
            </Text>
            <Image source={appIcons.caretDown} style={styles.caret} />
          </TouchableOpacity>

          <ActionSheetComponent
            ref={this.actionSheetStateRefEducation}
            title="Select Education"
            dataset={educationType}
            onPress={item => {
              console.log('item', item);
              this.setState({
                education: item,
              });
            }}
          />

          <TouchableOpacity
            style={[styles.dropDown]}
            onPress={() => this.actionSheetStateRefEducation.current.show()}>
            <Text style={education ? styles.carettextafter : styles.carettext}>
              {education ? education : 'Education'}
            </Text>
            <Image source={appIcons.caretDown} style={styles.caret} />
          </TouchableOpacity>
          <CustomTextInput
            maxLength={15}
            placeholder={'Job'}
            value={job}
            onChangeText={value => this.setState({job: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          <CustomTextInput
            maxLength={25}
            placeholder={'Upload Facebook URL'}
            value={facebookurl}
            onChangeText={value => this.setState({facebookurl: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          <CustomTextInput
            maxLength={25}
            placeholder={'Upload Instagram URL'}
            value={instagramurl}
            onChangeText={value => this.setState({instagramurl: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          <CustomTextInput
            maxLength={25}
            placeholder={'Upload LinkedIn URL'}
            value={linkedinurl}
            onChangeText={value => this.setState({linkedinurl: value})}
            containerStyle={styles.containerStyle}
            textInputStyle={{color: theme.title}}
          />
          {galleryAssets?.length > 0 ? (
            <ScrollView
              style={styles.mainCont}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <>
                {galleryAssets?.map((image, index) => {
                  console.log('image', image);
                  return (
                    <View key={index + 1}>
                      <TouchableOpacity activeOpacity={0.9}>
                        <ImageBackground
                          source={{uri: image?.uri}}
                          style={styles.images}
                          imageStyle={{borderRadius: 10}}>
                          <TouchableOpacity
                            style={styles.closeIconCont}
                            onPress={() => handelClose(image?.uri)}>
                            <Img
                              local={true}
                              src={appIcons.cross}
                              style={styles.closeIcon}
                              resizeMode={'contain'}
                              tintColor={colors.white}
                            />
                          </TouchableOpacity>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </>
            </ScrollView>
          ) : null}

          <ImagePicker
            isMultiple={true}
            onImageChange={(path, mime, type) => {
              updateImagesInGallery(
                path,
                mime,
                type,
                galleryAssets,
                callBackForGalleryAssets,
              );
            }}>
            <View>
              <View style={styles.imageBtn}>
                <ImageBackground
                  style={styles.propertyImage}
                  resizeMode="cover">
                  <Img
                    local={true}
                    src={appIcons.up}
                    style={styles.up}
                    tintColor={colors.red}
                  />
                  <Text style={[styles.carettext, {color: colors.red}]}>
                    Upload Upto Ten Pictures
                  </Text>
                </ImageBackground>
              </View>
            </View>
          </ImagePicker>
          <UploadCard />

          <CustomButton
            title="Save"
            onPress={this.onSubmit}
            buttonStyle={styles.btn}
            textStyle={[styles.text, {color: theme.iconcolor}]}
          />
          {/* ///////A */}
          <View style={styles.mainview}>
            <View style={styles.secondview}></View>
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default connect()(function (props) {
  const {colors} = useTheme();

  return <EditProfile {...props} theme={colors} />;
});
