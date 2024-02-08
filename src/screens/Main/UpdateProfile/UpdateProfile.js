import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import makeStyles from './styles';
import Img from '../../../components/Img';
import {appImages, appIcons} from '../../../assets';
import {SearchBar} from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import {Image as ImageCompressor} from 'react-native-compressor';
import CustomButton from '../../../components/CustomButton';
import {colors, family, size} from '../../../utils';
import NavService from '../../../helpers/NavService';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';
import Video from 'react-native-video';
const {height} = Dimensions.get('screen')
export class UpdatePost extends Component {
  state = {
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    selectedOption: null,
    profileImage: null,
    isModalVisible: false,
    galleryAssets: [],
  };

  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {galleryAssets, bio} = this.state;
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
    const callBackForGalleryAssets = galleryAssets => {
      this.setState({galleryAssets});
    };
    const handelClose = image => {
      const deleteImage = galleryAssets.filter(item => item?.uri !== image);
      this.setState({galleryAssets: deleteImage});
    };
    return (
      <AppBackground back title={'Edit Post'} marginHorizontal={false}>
           <View style={{height: height/1.25}}>
        <View style={styles.flex}>
          <Img
            local={true}
            src={appImages.profile}
            style={styles.placeholder}
          />
          <View style={styles.viewstyle1}>
            <Text style={[styles.textstyle1]}>John Smith</Text>
          </View>
        </View>
        <SearchBar
          placeholder={'Whats on your mind, Robert?'}
          value={bio}
          onChangeText={value => this.setState({bio: value})}
          containerStyle={styles.containerheight}
          searchCustom={[styles.searchcontainerheight, {color: theme.title}]}
          numberOfLines={2}
          multiline={true}
        />
        <View style={styles.addImageContainer}>
        <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.scroll}>
              {galleryAssets?.map((item, index) => {
                return (
                  <View key={index + 1} style={styles.formarginvertical}>
                    <View style={{paddingRight: 0.4}}>
                      {item.tempType === 'photo' ? (
                        <ImageBackground
                          source={{uri: item.uri}}
                          style={styles.images}
                          imageStyle={{borderRadius: 10}}>
                          <TouchableOpacity
                            style={styles.closeIconCont}
                            onPress={() => handelClose(item.uri)}>
                            <Img
                              local
                              src={appIcons.cross}
                              style={styles.closeIcon}
                              resizeMode={'contain'}
                            />
                          </TouchableOpacity>
                        </ImageBackground>
                      ) : (
                        <View style={styles.videoContainer}>
                          <Video
                            source={{uri: item.uri}}
                            style={styles.video}
                            resizeMode="cover"
                            controls={false}
                          />
                          <TouchableOpacity
                            style={styles.closeIconCont}
                            onPress={() => handelClose(item.uri)}>
                            <Img
                              local
                              src={appIcons.cross}
                              style={styles.closeIcon}
                              resizeMode={'contain'}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          <ImagePicker
            style={styles.picker}
            isMultiple={true}
            uploadVideo
            onImageChange={(path, mime, type) => {
              updateImagesInGallery(
                path,
                mime,
                type,
                galleryAssets,
                callBackForGalleryAssets,
              );
            }}>
            <Text
              style={{
                fontSize: size.normal,
                color: theme.iconcolor,
                fontFamily: family.RedHatDisplay_Medium,
              }}>
              Upload Photo/Video
            </Text>
          </ImagePicker>
        </View>

        <View style={styles.btn}>
          <CustomButton
            title="Update"
            buttonStyle={{
              borderRadius: 8,
              backgroundColor: 'red',
            }}
            textStyle={{color: theme.iconcolor}}
            onPress={() => NavService.goBack()}
          />
        </View>
        </View>
      </AppBackground>
    );
  }
}
export default connect()(function (props) {
  const {colors} = useTheme();

  return <UpdatePost {...props} theme={colors} />;
});
