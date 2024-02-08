import React, {Component, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import {appIcons, appImages} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import VideoPlayer from '../../../components/VideoPlayer/videoPlayer';
import {ScrollView} from 'react-native-gesture-handler';
import Img from '../../../components/Img';
import ImagePicker from '../../../components/ImagePicker';
import {Image as ImageCompressor} from 'react-native-compressor';
import {colors, family, size} from '../../../utils';
import makeStyles from './styles';
import CustomButton from '../../../components/CustomButton';
import Carousel from 'react-native-snap-carousel';
import ProfileCard from '../../../components/ProfileCard';
import {useTheme} from '@react-navigation/native';
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
import Unblock from '../../../containers/PopUp/Unblock';
import Unsubscribe from '../../../containers/PopUp/Unsubscribe';
import Tip from '../../../containers/PopUp/TipFilter/Tip';
import BottomPopup from '../../../containers/PopUp/BottomPopup';
import {NavigatorIOS} from 'react-native';
import {connect} from 'react-redux';
import {toggleAppTheme} from '../../../redux/actions/appAction';
import Toast from 'react-native-toast-message';
const {width} = Dimensions.get('screen');
class MainProfile extends Component {
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
  onMessage = () => {
    NavService.navigate('Chat');
  };
  onBlock = () => {
    () => this.setState({isModalVisible: false});
    setTimeout(() => {
      NavService.navigate('UserAppStack');
      NavService.closeDrawer();
   
    }, 850);
  };
  Userbtn = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      NavService.goBack();
    }, 850);
  };
  Blockbtn = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible: true});
    }, 850);
  };
  Reportbtn = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible1: true});
    }, 850);
  };
  onClick = () => {
    this.setState({isModalVisible2: false});
    // setTimeout(() => {
    //   NavService.navigate('Chat');
    // }, 750);
  };
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
      isModalVisible1,
      isModalVisible2,
      isVideoVisible,
      matchProfile,
      selectedImage,
      bio,
      alertt,
      allCommunities

    } = this.state;
    const lightThem = this.props.appTheme;
    return (
      <AppBackground
        back
        title={'Matched Profile'}
        marginHorizontal={false}
        dots
        onSubmit={() => this.setState({matchProfile: true})}>
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
                sliderWidth={width - 45}
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
              <CustomButton
                title={'Send Tips'}
                buttonStyle={styles.feedback}
                onPress={() => this.setState({isModalVisible2: true})}
              />
            </View>
            <View style={styles.viewStyle1}>
              <View style={styles.flexmain}>
                <Text style={[styles.txtstyle1, {color: colors.red}]}>
                  Sara Smith
                </Text>
                <TouchableOpacity
                  style={styles.msgbtn}
                  onPress={this.onMessage}>
                  <Img
                    local
                    src={appIcons.msg}
                    resizeMode={'contain'}
                    style={styles.msg}
                    tintColor={theme.iconcolors}
                  />
                </TouchableOpacity>
              </View>
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
              <Text style={[styles.txtstyle1, {fontSize: 16}]}>Social Handles</Text>
              <View style={styles.interest}>
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
            <View style={styles.viewStyle1}>
              <Text style={[styles.txtstyle1, {fontSize: 16}]}>Documents</Text>
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
                data={document}
                renderItem={({item}) => <ProfileCard item={item} document />}
              />
            </View>

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
              <View style={{alignSelf: 'center', marginTop: 10, height: 120}}>
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
          </View>
          <View style={styles.flex}>
            <ProfileCard
              profilebutton={true}
              onBack={() => NavService.goBack()}
              BlockProfile={() => this.setState({isModalVisible: true})}
              ReportProfile={() => this.setState({isModalVisible1: true})}
            />
          </View>
        </ScrollView>
        <Unblock
          block
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Block!'}
          description={'Are you sure you want to block \n this person'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={this.onBlock}
        />
        <Unsubscribe
          alertText={alertt}
          bio={bio}
          onChangeText={value => this?.setState({bio: value})}
          desc={'Description'}
          isModalVisible={isModalVisible1}
          title={'Report'}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible1: false})}
          onCross={() => this.setState({isModalVisible1: false})}
          onSubmit={() => {
              
              this.setState({isModalVisible1: false});
            
          }}

        />
        <Tip
          isModalVisible={isModalVisible2}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible2: false})}
          onCross={() => this.setState({isModalVisible2: false})}
          onSubmit={this.onClick}
        />
        <BottomPopup
          unmatcheduser
          block
          report
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
          User={this.Userbtn}
          Blockbtn={this.Blockbtn}
          Reportbtn={this.Reportbtn}
        />
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer: {user}, appReducer: {appTheme}}) {
  return {
    user,
    appTheme,
  };
}
export default connect(mapStateToProps)(function (props) {
  const {colors} = useTheme();

  return <MainProfile {...props} theme={colors} />;
});
