import React, {Component} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {appIcons} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import Img from '../../../components/Img';
import styles from './styles';
import FlatComponent from '../../../components/FlatComponent';
import {chats} from '../../../utils/dummyData';
class Notifications extends Component {
  state = {
    searchText: '',
  };

  render() {
    const {searchText} = this.state;
    return (
      <AppBackground
        back
        title={'Notification'}
        marginHorizontal={false}
        // titlestyle={styles.title}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flat}
          keyExtractor={(item, index) => index.toString()}
          data={chats}
          renderItem={({item}) => (
            <FlatComponent item={item} notificationdesc />
          )}
        />
      </AppBackground>
    );
  }
}

export default Notifications;
