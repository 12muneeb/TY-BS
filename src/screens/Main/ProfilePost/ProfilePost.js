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

class ProfilePost extends Component {
  state = {
    isModalVisible: false,
    galleryAssets: [],
    matchProfile: false,
    isModalVisibleLogout: false,
  };
  handleFeedback = () => {
    this.setState({matchProfile: false});
    NavService.navigate('CreatePost');
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
      <AppBackground back title={'Sara Smith'} marginHorizontal={false}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flat}
          keyExtractor={(item, index) => index.toString()}
          data={community}
          scrollEnabled={true}
          renderItem={({item}) => (
            <CommunityComponent
              item={item}
              img
              desc
              onClick={() => this.setState({matchProfile: true})}
            />
          )}
        />
        <BottomPopup
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

export default ProfilePost;
