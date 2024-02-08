import React, {Component, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import CommunityComponent from '../../../components/CommunityComponent';
import {community} from '../../../utils/dummyData';
import {styles} from './styles';
import BottomPopup from '../../../containers/PopUp/BottomPopup';
import NavService from '../../../helpers/NavService';
import LogoutPopup from '../../../containers/PopUp/LogoutPopup';

class Post extends Component {
  state = {
    isModalVisible: false,
    galleryAssets: [],
    matchProfile: false,
    isModalVisibleLogout: false,
  };
  handleFeedback = () => {
    this.setState({matchProfile: false});
    NavService.navigate('UpdatePost');
  };
  DeleteFeedback = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
    this.setState({isModalVisibleLogout: true});
    }, 640);
    // Alert.alert('hello')
  };
  render() {
    const {matchProfile, isModalVisibleLogout} = this.state;

    return (
      <AppBackground back title={'Post'} marginHorizontal={false}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flat}
          keyExtractor={(item, index) => index.toString()}
          data={community}
          scrollEnabled={true}
          renderItem={({item}) => (
            <CommunityComponent
              item={item}
              dots
              img
              desc
              onClick={() => this.setState({matchProfile: true})}
            />
          )}
        />
        <BottomPopup
        post
        editbtn
        deletebtn
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
          EditFeedback={this.handleFeedback}
          DeleteFeedback={this.DeleteFeedback}
        />
        <LogoutPopup
        dlt
          isModalVisible={isModalVisibleLogout}
          onToggle={() => this.setState({isModalVisibleLogout: false})}
          onCross={() => this.setState({isModalVisibleLogout: false})}
          onCancel={() => this.setState({isModalVisibleLogout: false})}
          description={'Are you sure you want to delete \n this post?'}
          onSubmit={() => {
            this.setState({isModalVisibleLogout: false});
          }}
        />
      </AppBackground>
    );
  }
}

export default Post;
