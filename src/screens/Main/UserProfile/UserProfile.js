import React, {Component, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import NavService from '../../../helpers/NavService';
import {appIcons, appLogos} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import VideoPlayer from '../../../components/VideoPlayer/videoPlayer';
import {ScrollView} from 'react-native-gesture-handler';
import Img from '../../../components/Img';
import Unblock from '../../../containers/PopUp/Unblock';
import Unsubscribe from '../../../containers/PopUp/Unsubscribe';
import {colors} from '../../../utils';
import styles from './styles';

class UserProfile extends Component {
  state = {
    intersets: [
      {
        title: `68 cm (5'6)`,
      },
      {
        title: 'Trainer',
      },
      {
        title: 'Art',
      },
      {
        title: 'Cooking',
      },
      {
        title: 'Action Adventure',
      },
    ],
    images: [
      {
        image: appIcons.amelia,
        id: 1,
      },
      {
        image: appIcons.amelia,
        id: 2,
      },
      {
        image: appIcons.amelia,
        id: 3,
      },
    ],
    posts: [
      {
        image: appIcons.thumb1,
      },
      {
        image: appIcons.thumb2,
      },
      {
        image: appIcons.thumb3,
      },
    ],
    buttons: [
      {
        title: 'Unmatched user',
        image: appIcons.cancel,
      },
      {
        title: 'Block user',
        image: appIcons.block,
        onPress: () => this.setState({isModalVisible: true}),
      },
      {
        title: 'Report user',
        image: appIcons.cartoon,
        onPress: () => this.setState({isModalVisibleReport: true}),
      },
    ],
    isModalVisible: false,
    isModalVisibleReport: false,
    bio: '',
  };

  render() {
    const {
      intersets,
      posts,
      isModalVisible,
      isModalVisibleReport,
      buttons,
      bio,
    } = this.state;
    const item = this.props.route.params?.userProfile;
    return (
      <AppBackground
        back
        title={item?.title ? item?.title : 'Amelia'}
        marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyExtractor={(item, index) => index.toString()}
                        data={images}
                        renderItem={({ item }) => {
                            return ( */}

          <View style={styles.imageParent}>
            <ImageBackground
              source={appIcons.amelia}
              style={styles.imgbg1}
              imageStyle={{borderRadius: 25}}>
              <ImageBackground
                source={appIcons.ameliabg}
                style={styles.imgbg}
                imageStyle={{borderRadius: 25}}></ImageBackground>
            </ImageBackground>
          </View>
          {/* )
                        }
                        } /> */}
          <View style={styles.parentView}>
            <View style={styles.viewStyle1}>
              <Text style={styles.txtstyle1}>
                {item?.title ? item?.title : 'Amelia smith'}
              </Text>
              <Text style={styles.txtstyle2}>United States Of America</Text>
            </View>
            <TouchableOpacity
              style={styles.tchsms}
              onPress={() => NavService.navigate('Chat')}>
              <Img local={true} src={appIcons.sms} style={styles.sms} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewStyle1}>
            <Text style={styles.txtstyle1}>My Basic Info</Text>
            <Text style={styles.txtstyle2} numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit
              commodo enim tellus et nascetur at leo accumsan, odio habitanLorem
              ipsum dolor...
            </Text>
          </View>
          <View style={styles.viewStyle1}>
            <Text style={styles.txtstyle1}>Intersets</Text>
            <View style={styles.interest}>
              {intersets?.map((item, index) => {
                return (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagtxt}>{item.title}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View>
            <View style={styles.viewStyle2}>
              <VideoPlayer
                source={{
                  uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                }}
              />
            </View>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            keyExtractor={(item, index) => index.toString()}
            data={posts}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 20}}>
                  <ImageBackground
                    source={item.image}
                    style={styles.thumbbg1}
                    imageStyle={{borderRadius: 20}}>
                    <ImageBackground
                      source={appIcons.thumbbg}
                      style={styles.thumbbg}
                      imageStyle={{borderRadius: 20}}>
                      <Img
                        local={true}
                        src={appIcons.heart}
                        style={styles.heart}
                      />
                      <Text style={styles.likes}>52 Likes</Text>
                    </ImageBackground>
                  </ImageBackground>
                </View>
              );
            }}
          />
          <Unblock
            isModalVisible={isModalVisible}
            currentfocus={this}
            title={'Block!'}
            description={'Are you sure you want to block this person'}
            onCross={() => this.setState({isModalVisible: false})}
            onCancel={() => this.setState({isModalVisible: false})}
            onToggle={() => this.setState({isModalVisible: false})}
            onSubmit={() => this.setState({isModalVisible: false})}
          />
          <Unsubscribe
         
            isModalVisible={isModalVisibleReport}
            currentfocus={this}
            onToggle={() => this.setState({isModalVisibleReport: false})}
            onCross={() => this.setState({isModalVisibleReport: false})}
            onSubmit={() => this.setState({isModalVisibleReport: false})}
          />
          <View style={styles.flex}>
            {buttons.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={item.onPress}
                  style={{
                    right:
                      item.title == 'Unmatched user'
                        ? 12
                        : item.title == 'Block user'
                        ? 12
                        : 0,
                  }}>
                  <View
                    style={[
                      styles.tchstyle,
                      {
                        backgroundColor:
                          item.title == 'Unmatched user'
                            ? colors.red
                            : item.title == 'Block user'
                            ? colors.primary
                            : '',
                      },
                    ]}>
                    <Img
                      local={true}
                      src={item?.image}
                      style={
                        item.title == 'Report user'
                          ? styles.cartoon
                          : styles.icon
                      }
                      tintColor={
                        item.title == 'Report user' ? '' : colors.white
                      }
                    />
                  </View>
                  <Text style={styles.title}>{item?.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default UserProfile;
