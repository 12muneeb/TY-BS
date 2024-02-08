import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import {appIcons} from '../../../assets';
import {styles} from './styles';
import Img from '../../../components/Img';
import CommunityComponent from '../../../components/CommunityComponent';
import {community} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import {colors} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import BottomPopup from '../../../containers/PopUp/BottomPopup';
import FeedbackPopup from '../../../containers/PopUp/FeedbackPopup/FeedbackPopup';
import Unblock from '../../../containers/PopUp/Unblock';
import GiveFeedback from '../../../containers/PopUp/GiveFeedback/GiveFeedback';

export class ProfileFeedback extends Component {
  state = {
    searchText: '',
    matchProfile: false,
    isModalVisible: false,
    isModalVisible1: false,
    isModalVisible2: false,
    starCount: 0,
  };
  handleFeedback = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible2: true});
    }, 850);
  };
  DeleteFeedback = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible1: true});
    }, 850);
  };
  render() {
    const {
      searchText,
      matchProfile,
      isModalVisible,
      isModalVisible1,
      isModalVisible2,
      starCount,
    } = this.state;
    return (
      <AppBackground back title={'Feedbacks'} marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flat}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{backgroundColor: colors.gray, height: 0.4}} />
            )}
            data={community}
            scrollEnabled={false}
            renderItem={({item}) => (
              <CommunityComponent
                item={item}
                time
                rate
                btn
                Dotsbtn={() => this.setState({matchProfile: true})}
              />
            )}
          />
        </ScrollView>
        <CustomButton
          title={'Give Feedback'}
          buttonStyle={styles.postbtn}
          onPress={() => this.setState({isModalVisible: true})}
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
        <FeedbackPopup
          title={'Submit'}
          isModalVisible={isModalVisible}
          onStarRatingPress={rating => {
            this?.setState({starCount: rating});
          }}
          starCount={starCount}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onSubmit={() => {
            this.setState({isModalVisible: false});
            setTimeout(() => {
              this.setState({starCount: 0});
            }, 550);
          }}
        />
        <Unblock
          isModalVisible={isModalVisible1}
          currentfocus={this}
          title={'Delete Feedback'}
          description={'Are you sure you want to delete this feedback?'}
          onCross={() => this.setState({isModalVisible1: false})}
          onCancel={() => this.setState({isModalVisible1: false})}
          onToggle={() => this.setState({isModalVisible1: false})}
          onSubmit={() => this.setState({isModalVisible1: false})}
        />
        <GiveFeedback
          title={'Save'}
          isModalVisible={isModalVisible2}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible2: false})}
          onCross={() => this.setState({isModalVisible2: false})}
          onSubmit={() => this.setState({isModalVisible2: false})}
        />
      </AppBackground>
    );
  }
}

export default ProfileFeedback;
