import React, {Component, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {appIcons, appImages} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import VideoPlayer from '../../../components/VideoPlayer/videoPlayer';
import {ScrollView} from 'react-native-gesture-handler';
import Img from '../../../components/Img';
import ImagePicker from '../../../components/ImagePicker';
import {Image as ImageCompressor} from 'react-native-compressor';
import {colors, family, size} from '../../../utils';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import Carousel from 'react-native-snap-carousel';
import ProfileCard from '../../../components/ProfileCard';
import makeStyles from './styles';
import {useTheme} from '@react-navigation/native';
import Shadows from '../../../helpers/Shadows';
import {
  social,
  hobbies,
  intersets,
  document,
  data,
  imageb,
  Profiledata,
  Banner,
} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import {connect} from 'react-redux';
import {toggleAppTheme} from '../../../redux/actions/appAction';
import Match from '../../../containers/PopUp/Match';
const {width} = Dimensions.get('screen');
class MatchedProfile extends Component {
  constructor(props) {
    super(props);
   this.state = {
      isModalVisible: false,
      galleryAssets: [],
      key: false,
      documentCards: document,
      isVideoVisible: false,
      selectedImage: null,
      allCommunities: []
    };
  }
  componentDidMount(){
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState(previousState => ({
        allCommunities: Profiledata,
        key: !previousState?.key,
      }));
    });
   }
   componentWillUnmount() {
    this.setState({allCommunities: []});
    this.focusListener();
  }
  toggleVideo = () => {
    this.setState(prevState => ({
      isVideoVisible: true,
    }));
  };

  selectImage = item => {
    this.setState({
      selectedImage: item.link,
    });
  };
  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {
      images,
      posts,
      isModalVisible,
      galleryAssets,
      key,
      documentCards,
      isVideoVisible,
      selectedImage,
      matchProfile,
      allCommunities
    } = this.state;
    const handleCross = id => {
      updatedCard = documentCards.filter(item => item?.id != id);
      this.setState({documentCards: updatedCard});
    };
    const lightThem = this.props.appTheme;
    return (
      <AppBackground
        title={'Amelia'}
        marginHorizontal={false}
        back
       
        >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formarginhorizontal}>
            <View>
              <Carousel
                ref={c => {
                  this._carousel = c;
                }}
                key={key}
                data={Banner}
                renderItem={({item}) => <ProfileCard item={item} banner />}
                sliderWidth={width - 44}
                itemWidth={width - 44}
              />
            </View>
            <View style={styles.buttons}>
              <CustomButton
                title={'Posts'}
                buttonStyle={styles.postbtn}
                onPress={() => NavService.navigate('ProfilePost')}
              />
              <CustomButton
                title={'Feedbacks'}
                buttonStyle={styles.feedback}
                onPress={() => NavService.navigate('ProfileFeedback')}
              />
            </View>
            <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {color: colors.red}]}>
                Sara Smith
              </Text>
              <Text style={styles.txtstyle2}>United States Of America</Text>
            </View>

            <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {fontSize: size.normal}]}>
                My Basic Info
              </Text>
              <Text style={styles.txtstyle2} numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit
                commodo enim tellus et nascetur at leo accumsan, odio
                habitanLorem ipsum dolor...
              </Text>
              <View >
                <FlatList
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  data={data}
                  renderItem={({item}) => <ProfileCard item={item} data />}
                />
              </View>
            </View>
            <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {fontSize: 16}]}>
                Social Handles
              </Text>
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={social}
                renderItem={({item}) => (
                  <View style={styles.socialcontainer}>
                    <View
                      style={[
                        styles.maincontainer,
                        {
                          backgroundColor:
                            lightThem == 'light' ? '#fff' : '#292929',
                          borderWidth: 1,
                          borderColor:
                            lightThem == 'light' ? '#FF2020' : '#292929',
                        },
                      ]}>
                      <Img
                        local
                        src={item.image}
                        style={styles.socialimg}
                        resizeMode={'contain'}
                      />
                    </View>
                    <Pressable onPress={item.onPress}>
                      <Text style={[styles.link, {color: theme.inputtext}]}>
                        {item.link}
                      </Text>
                    </Pressable>
                  </View>
                  // <ProfileCard item={item} socialhandles />
                )}
              />
            </View>
            <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {fontSize: 16}]}>Interests</Text>
              <View style={styles.interest}>
                <FlatList
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                  data={intersets}
                  renderItem={({item}) => <ProfileCard item={item} intersets />}
                />
              </View>
            </View>
            <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {fontSize: 16}]}>Hobbies</Text>
              <View style={styles.interest}>
                <FlatList
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  numColumns={4}
                  keyExtractor={(item, index) => index.toString()}
                  data={hobbies}
                  renderItem={({item}) => <ProfileCard item={item} hobbies />}
                />
              </View>
            </View>
            {/* <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {fontSize: 16}]}>Documents</Text>
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
                data={documentCards}
                renderItem={({item}) => (
                  <ProfileCard
                    item={item}
                    document
                    cross
                    handleCross={handleCross}
                  />
                )}
              />
            </View> */}

            <View style={styles.imageParent}>
              {isVideoVisible ? (
                <View style={{height: 180, marginBottom: 30}}>
                  <VideoPlayer
                    source={{
                      uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                    }}
                  />
                </View>
              ) : (
                <ImageBackground
                  source={selectedImage || appIcons.amelia}
                  style={styles.imgbg1}
                  imageStyle={{borderRadius: 20, resizeMode: 'cover'}}>
                  <ImageBackground
                    source={appIcons.ameliabg}
                    style={styles.imgbg1}
                    imageStyle={{
                      borderRadius: 20,
                      resizeMode: 'cover',
                    }}></ImageBackground>
                </ImageBackground>
              )}
              <View style={{alignSelf: 'center', marginTop: 10, height: 110}}>
                <FlatList
                  data={allCommunities}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <>
                      <Pressable
                        style={styles.imagescroll}
                        onPress={() => {
                          this.selectImage(item);
                          this.setState({isVideoVisible: false});
                        }}>
                        <ImageBackground
                          source={item.link}
                          style={styles.imgbgscroll}
                          imageStyle={{
                            borderRadius: 10,
                            resizeMode: 'cover',
                          }}>
                          <ImageBackground
                            source={appImages.tumbnailwhite}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 10,
                            }}>
                            {item?.play && (
                              <TouchableOpacity
                                onPress={this.toggleVideo}
                                style={{padding: 40, borderRadius: 20}}>
                                <Img
                                  local
                                  src={item.play}
                                  style={{width: 20, height: 20}}
                                  resizeMode={'contain'}
                                  tintColor={theme.iconcolors}
                                />
                              </TouchableOpacity>
                            )}
                          </ImageBackground>
                        </ImageBackground>
                      </Pressable>
                    </>
                  )}
                />
              </View>
            </View>
            <View style={styles.flexbtn}>
              <TouchableOpacity
                style={styles.tchstyle}
                activeOpacity={0.8}
                onPress={()=> NavService.navigate('BottomTabs', {screen: 'Home'})}
              >
                <Img
                  local={true}
                  src={appIcons.crossmark}
                  style={styles.img}
                  tintColor={theme.iconcolors}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchablestyle}
                activeOpacity={0.9}
                onPress={() => this.setState({matchProfile: true})}
              >
                <Image
                  source={appIcons.hearticon}
                  style={[styles.cartoon, {tintColor: theme.iconcolor}]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Match
        desc={'Great start - if they \n swipe right then it will \n be a match'}
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
        />
      </AppBackground>
    );
  }
}
// const ThemedProfile = props => {
//   const {colors} = useTheme();
//   return <Profile {...props} theme={colors} />;
// };

// export default ThemedProfile;

function mapStateToProps({authReducer: {user}, appReducer: {appTheme}}) {
  return {
    user,
    appTheme,
  };
}
export default connect(mapStateToProps)(function (props) {
  const {colors} = useTheme();

  return <MatchedProfile {...props} theme={colors} />;
});
