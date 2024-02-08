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

export class Feedback extends Component {
  state = {
    searchText: '',
  };

  render() {
    const {searchText} = this.state;
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
              <CommunityComponent item={item} time rate />
            )}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default Feedback;
