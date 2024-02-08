import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import ProfileImage from './ProfileImage';
import ImagePicker from './ImagePicker';
import {appImages, appIcons} from '../assets';
import {colors} from '../utils';
export class PickerImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
    };
  }
  render() {
    const {profileImage} = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <View>
        <View style={styles.profilecontainer}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <ProfileImage
              name={'UserName'}
              innerAsset={profileImage == null ? true : false}
              placeholderstyle={styles.profile}
              style={{width: 50, height: 50, backgroundColor: 'red'}}
              imageUri={
                profileImage !== null ? profileImage?.path : appIcons.redplus
              }
            />
            <View style={styles.viewStyle1}>
              {profileImage !== null ? (
                <Image source={appIcons.upload} style={styles.upload} />
              ) : null}
            </View>
          </ImagePicker>
        </View>
      </View>
    );
  }
}

export default PickerImageComponent;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    backgroundColor: 'blue',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.red,
  },
  profilecontainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  upload: {
    width: 10,
    height: 10,
  },
  viewStyle1: {
    alignSelf: 'center',
    backgroundColor: colors.red,

    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 10,
    marginTop: -12,
  },
});
