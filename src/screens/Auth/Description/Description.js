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
import styles from './styles';
import AppBackground from '../../../components/AppBackground';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';
import UploadCard from './UploadCard';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      address: '',
      profileImage: null,
      DOB: '',
      gender: '',
      genderData: ['Male', 'Female'],
      Interests: '',
      Weight: '',
      height: '',
      ethinicity: '',
      Desired: '',
      sexual: '',
      galleryAssets: [],
      texttag: '',
      phone: '',
      Hobbies: '',
      age: '',
      education: '',
      job: '',
      facebookurl: '',
      instagramurl: '',
      linkedinurl: '',

      showCalendar: {
        calendarState: false,
        calendarFor: '',
      },
      date: '',
      bio: '',
      Sexual: '',
      phoneNumber: '',
      formattedPhoneNumber: '',
      date_birth: '',
    };
    this.actionSheetStateRef = createRef();
    this.actionSheetStateRefEthinicity = createRef();
    this.actionSheetStateRefDesired = createRef();
    this.actionSheetStateRefSexual = createRef();
    this.actionSheetStateRefEducation = createRef();
  }

  onSubmit = () => {
    const regex = new RegExp(`www.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`);
    const {
      ethinicity,
      Desired,
      sexual,
      education,
      job,
      facebookurl,
      instagramurl,
      linkedinurl,
    } = this.state;
    if (ethinicity == '') {
      Toast.show({
        text1: `Please select Language`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (education == '') {
      Toast.show({
        text1: `Please select education`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (job == '') {
      Toast.show({
        text1: `Job field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (facebookurl == '') {
      Toast.show({
        text1: `Facebook Url field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!facebookurl.match(regex)) {
      Toast.show({
        text1: `Please enter a valid facebook URL`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (instagramurl == '') {
      Toast.show({
        text1: `Instagram Url field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!instagramurl.match(regex)) {
      Toast.show({
        text1: `Please enter a valid Instagram URL`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (linkedinurl == '') {
      Toast.show({
        text1: `Linkedin Url field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!linkedinurl.match(regex)) {
      Toast.show({
        text1: `Please enter a valid Linkedin URL`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      let payload = {
        email: 'abc@gmail.com',
        password: '123456',
      };
      Toast.show({
        text1: 'Sign in successful',
        type: 'success',
        visibilityTime: 2000,
      });
      this.props.loginUser(payload);
    }
  };

  render() {
    const {
      ethinicity,
      galleryAssets,
      education,
      job,
      facebookurl,
      instagramurl,
      linkedinurl,
    } = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const ethyType = ['English','Arabic','Latin'];
    const DesiredType = ['Loreum', 'Loreum'];
    const sexualType = ['Male', 'Female'];
    const educationType = ['Primary', 'Secondary'];

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
      console.log(multipleImages, 'multipleImages');

      if (Array.isArray(path)) {
        if (path.length > 10) {
          return Toast.show({
            text1: `Please upload asset less than 10`,
            type: 'error',
            visibilityTime: 3000,
          });
        }
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
        callBackForGalleryAssets(
          mergeImagesWithExistingGalleryAssets.slice(0, 10),
        );

        if (mergeImagesWithExistingGalleryAssets.length > 10) {
          return Toast.show({
            text1: `Please upload asset less than 10`,
            type: 'error',
            visibilityTime: 3000,
          });
        }
       
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
    return (
      <CustomBackground
        back
        titleText={'Descriptions'}
        marginHorizontal={false}
        background={true}
        showLogo={false}
        backgroundContent={{backgroundColor: colors.belege}}
        numbers>
        <View style={{marginTop: 60,marginBottom:10}}>
          <ScrollView
            contentContainerStyle={{
              alignSelf: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
             <ActionSheetComponent
              ref={this.actionSheetStateRefEthinicity}
              title="Select Language"
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
              <Text
                style={ethinicity ? styles.carettextafter : styles.carettext}>
                {ethinicity ? ethinicity : 'Language'}
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
              <Text
                style={education ? styles.carettextafter : styles.carettext}>
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
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
            />
            <CustomTextInput
              maxLength={25}
              placeholder={'Upload Facebook URL'}
              value={facebookurl}
              onChangeText={value => this.setState({facebookurl: value})}
              containerStyle={styles.containerStyle}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
            />
            <CustomTextInput
              maxLength={25}
              placeholder={'Upload Instagram URL'}
              value={instagramurl}
              onChangeText={value => this.setState({instagramurl: value})}
              containerStyle={styles.containerStyle}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
            />
            <CustomTextInput
              maxLength={25}
              placeholder={'Upload LinkedIn URL'}
              value={linkedinurl}
              onChangeText={value => this.setState({linkedinurl: value})}
              containerStyle={styles.containerStyle}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
            />

            {galleryAssets?.length > 0 ? (
              <ScrollView
                style={styles.mainCont}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
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
            </ImagePicker>

            <UploadCard />
            <CustomButton
              title="Save"
              onPress={this.onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.text}
            />
          </ScrollView>
          {/* ///////A */}
        </View>
      </CustomBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(Description);
