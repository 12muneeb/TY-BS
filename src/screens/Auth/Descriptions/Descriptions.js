import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
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

class Descriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
      genderData: ['Male', 'Female'],
      Interests: '',
      Weight: '',
      height: '',
      Desired: '',
      sexual: '',
      galleryAssets: [],
      texttag: '',
      texttags: '',
      phone: '',
      Hobbies: '',
      age: '',
      Sexual: '',
      ethinicity:''
    };
    this.actionSheetStateRef = createRef();
    this.actionSheetStateRefEthinicity = createRef();
    this.actionSheetStateRefDesired = createRef();
    this.actionSheetStateRefSexual = createRef();
    this.actionSheetStateRefEducation = createRef();
  }

  onSubmit = () => {
    const {
      Weight,
      Interests,
      height,
      ethinicity,
      Desired,
      sexual,
      Hobbies,
      age,
      texttags,
    } = this.state;

    if (Desired == '') {
      Toast.show({
        text1: `Please select Desired`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (sexual == '') {
      Toast.show({
        text1: `Please add sexual Preference`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (Interests == '') {
      Toast.show({
        text1: `Please select Interests`,
        type: 'error',
        visibilityTime: 3000,
      });
    }
    
    else if (Hobbies == '') {
      Toast.show({
        text1: `Please add Hobbies`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (age == '') {
      Toast.show({
        text1: `Please select age`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (Weight == '') {
      Toast.show({
        text1: `Weight field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (height == '') {
      Toast.show({
        text1: `Height field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (ethinicity == '') {
      Toast.show({
        text1: `Please select ethinicity`,
        type: 'error',
        visibilityTime: 3000,
      });
    }  else {
      NavService.replace('Description');
    }
  };

  render() {
    const {
      Interests,
      Weight,
      height,
      ethinicity,
      sexual,
      Desired,
      galleryAssets,
      texttag,
      texttags,

      Hobbies,
      age,
    } = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const ethyType = ['Books', 'Reading'];
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
    return (
      <CustomBackground
        backPre
        titleText={'Descriptions'}
        marginHorizontal={false}
        showLogo={false}
        background={true}
        number>
        <View style={{marginTop: 50,}}>
          <View showsVerticalScrollIndicator={false} style={{marginTop: 30,alignItems:'center',marginHorizontal:20}}>
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
              placeholder={'Interests'}
              blurOnSubmit={false}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
              value={texttag}
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
            {Interests?.length > 0 ? (
              <View style={styles.interest}>
                {Interests?.map((item, index) => {
                  return (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagtxt}>{item}</Text>
                      <TouchableOpacity
                        onPress={() => handleTagDelete(index)}
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
                  );
                })}
              </View>
            ) : null}
            <CustomTextInput
              // leftIcon={appIcons.user}
              placeholder={'Hobbies'}
              blurOnSubmit={false}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
              value={texttags}
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
            {Hobbies?.length > 0 ? (
              <View style={styles.interest}>
                {Hobbies?.map((item, index) => {
                  return (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagtxt}>{item}</Text>
                      <TouchableOpacity
                        onPress={() => handleTagDeletes(index)}
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
                  );
                })}
              </View>
            ) : null}
            <CustomTextInput
              maxLength={3}
              keyboardType="numeric"
              placeholder={'Age'}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
              value={age}
              onChangeText={value => this.setState({age: value})}
              containerStyle={styles.containerStyle}
            />

            <CustomTextInput
              maxLength={3}
              keyboardType="numeric"
              placeholder={'Weight (kg)'}
              value={Weight}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
              onChangeText={value => this.setState({Weight: value})}
              containerStyle={styles.containerStyle}
            />

            <CustomTextInput
              maxLength={4}
              keyboardType="numeric"
              placeholder={'Height (Feet)'}
              value={height}
              textInputStyle={{color: colors.nero}}
              placeholderColor={colors.nero}
              onChangeText={value => this.setState({height: value})}
              containerStyle={styles.containerStyle}
            />
         
            {/* ////// */}
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
              <Text
                style={ethinicity ? styles.carettextafter : styles.carettext}>
                {ethinicity ? ethinicity : 'Ethnicity'}
              </Text>
              <Image source={appIcons.caretDown} style={styles.caret} />
            </TouchableOpacity>
       
            <CustomButton
              title="Continue"
              onPress={this.onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.text}
            />
            {/* ///////A */}
            <View style={styles.mainview}>
              <View style={styles.secondview}></View>
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default Descriptions;
