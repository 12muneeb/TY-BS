import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Img from './Img';
import {colors, family, size} from '../utils';
import {appIcons, appImages} from '../assets';
import Shadows from '../helpers/Shadows';
import StarRating from 'react-native-star-rating';
import {useTheme} from '@react-navigation/native';
import VideoPlayer from './VideoPlayer/videoPlayer';
import {useSelector} from 'react-redux';

const CommunityComponent = ({
  item,
  dots,
  onClick,
  img,
  time,
  desc,
  rate,
  btn,
  Dotsbtn,
  handleOn,
  handleSubmit,
}) => {
  const [starCount, setStarCount] = useState(4);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };
  const onStarRatingPress = rating => {
    setStarCount(rating);
  };
  const {colors} = useTheme();
  return (
    <View style={styles.mainView}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={handleOn}>
          <Image source={appImages.profile} style={styles.placeholder} />
        </TouchableOpacity>
        <View style={styles.viewstyle1}>
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={[styles.textstyle1, {color: colors.text}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: -5, padding: 3}}
                onPress={Dotsbtn}>
                <Img
                  local
                  src={btn ? item?.btn : null}
                  style={{width: 15, height: 15}}
                  resizeMode={'contain'}
                  tintColor={'#B47E00'}
                />
              </TouchableOpacity>
            </View>
            {desc && (
              <Text style={[styles.time, {color: colors.inputtext}]}>
                {item.time}
              </Text>
            )}
            {rate && (
              <View style={{flexDirection: 'row'}}>
                <StarRating
                  disabled={true}
                  empty
                  fullStar={appIcons.star}
                  emptyStar={appIcons.emptystar}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={starCount}
                  selectedStar={rating => onStarRatingPress(rating)}
                  fullStarColor={'red'}
                  halfStarEnabled={true}
                  starSize={14}
                  starStyle={{top: 2}}
                />
                <Text style={[styles.time, {left: 5, color: colors.inputtext}]}>
                  4.5
                </Text>
              </View>
            )}
          </View>
          {dots && (
            <Pressable onPress={onClick}>
              <Img
                local={true}
                src={appIcons.horizontaldots}
                style={styles.dots}
                resizeMode={'contain'}
                tintColor={colors.border}
              />
            </Pressable>
          )}
        </View>
      </View>
      {time && (
        <View style={{alignSelf: 'flex-end', right: 20, top: -20}}>
          <Text style={[styles.time, {color: colors.inputtext}]}>
            {item.time}
          </Text>
        </View>
      )}
      <View style={styles.toggle}>
        <Text style={[styles.textstyle2, {color: colors.inputtext}]}>
          {item.desc}
        </Text>
      </View>
      {img && (
        <View
          style={{
            width: '100%',
            height: 180,
            borderRadius: 12,
            marginBottom: 20,
            marginTop: 5,
          }}>
          {isVideoVisible ? (
            <VideoPlayer
              source={{
                uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              }}
            />
          ) : (
            <View
              style={{
                width: '100%',
                height: 180,
                borderRadius: 12,
                marginVertical: 20,
              }}>
              <ImageBackground
                source={item.image}
                resizeMode={'cover'}
                style={styles.backgroundimg}
                imageStyle={{borderRadius: 10}}>
                {item?.play && (
                  <TouchableOpacity onPress={toggleVideo}>
                    <Img
                      local
                      src={item?.play}
                      style={{width: 25, height: 25}}
                      tintColor={colors.iconcolors}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                )}
              </ImageBackground>
            </View>
          )}
        </View>
        // <View
        //   style={{
        //     width: '100%',
        //     height: 180,
        //     borderRadius: 12,
        //     marginVertical: 20,
        //   }}>
        //   <ImageBackground

        //     source={item.image}
        //     resizeMode={'cover'}
        //     style={styles.backgroundimg}
        //     imageStyle={{borderRadius:10}}
        //   >
        //     <TouchableOpacity>
        //     <Img local src={item?.play} style={{width:25,height:25}} tintColor={colors.iconcolors} resizeMode={'contain'}/>
        //     </TouchableOpacity>
        //   </ImageBackground>
        // </View>
      )}
    </View>
  );
};

export default CommunityComponent;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
    ...Shadows.shadow5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  placeholder: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.red,
  },
  viewstyle1: {
    left: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  textstyle1: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.normal,
  },
  textstyle2: {
    color: colors.black,
    fontFamily: family.RedHatDisplay_Light,
    fontSize: size.xsmall,
    width: '100%',
    left: 3,
  },
  toggle: {
    alignItems: 'center',
    top: 8,
    width: '100%',
  },
  time: {
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Light,
  },
  list: {backgroundColor: colors.red, paddingHorizontal: 5, borderRadius: 10},
  count: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.RedHatDisplay_Bold,
  },
  dots: {width: 19, height: 12, right: 25},
  imgcontainer: {width: '100%', height: 198, borderRadius: 12, marginTop: 15},
  backgroundimg: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
