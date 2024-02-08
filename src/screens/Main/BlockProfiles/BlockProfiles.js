import React, {Component} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {appIcons, appImages} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import Img from '../../../components/Img';
import Unblock from '../../../containers/PopUp/Unblock';
import styles from './styles';
import Listed from '../../../components/Listed';
import { Blockdata } from '../../../utils/dummyData';
class BlockProfiles extends Component {
  state = {
    searchText: '',
    isModalVisible: false,
    title: '',
    description: '',
    blockInfo: {
      isModalVisible: false,
      info: null,
    },
  };

  render() {
    const {searchText, chats, isModalVisible, blockInfo} = this.state;
    const cancel = index => {
      console.log('index', index);
      const deletecancel = Blockdata.filter(item => item?.id !== index);
      this.setState({chats: deletecancel});
    };
    return (
      <AppBackground back title={'Block Profiles'} marginHorizontal={false}>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Blockdata}
          renderItem={({item}) => (
            <Listed
              item={item}
              unblock
              onSubmit={() => {
                const currentSelectedInfo = {...blockInfo};
                currentSelectedInfo['info'] = item;
                currentSelectedInfo['isModalVisible'] = true;
                this.setState({blockInfo: currentSelectedInfo});
              }}
            />
          )}
        />
        <Unblock
          isModalVisible={blockInfo?.isModalVisible}
          currentfocus={this}
          title={'UNBLOCK!'}
          description={'Are you sure you want to unblock \n this person?'}
          onCross={() => {
            const currentSelectedInfo = {...blockInfo};
            currentSelectedInfo['info'] = null;
            currentSelectedInfo['isModalVisible'] = false;
            this.setState({blockInfo: currentSelectedInfo});
          }}
          onCancel={() => {
            const currentSelectedInfo = {...blockInfo};
            currentSelectedInfo['info'] = null;
            currentSelectedInfo['isModalVisible'] = false;
            this.setState({blockInfo: currentSelectedInfo});
          }}
          onToggle={() => {
            const currentSelectedInfo = {...blockInfo};
            currentSelectedInfo['info'] = null;
            currentSelectedInfo['isModalVisible'] = false;
            this.setState({blockInfo: currentSelectedInfo});
          }}
          onSubmit={() => {
            const currentSelectedInfo = {...blockInfo};
            currentSelectedInfo['info'] = null;
            currentSelectedInfo['isModalVisible'] = false;
            this.setState({blockInfo: currentSelectedInfo});
            setTimeout(() => {
              cancel(blockInfo?.info?.id);
            }, 850);
          }}
        />
      </AppBackground>
    );
  }
}

export default BlockProfiles;
