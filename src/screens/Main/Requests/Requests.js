import React, {Component, useState} from 'react';
import {Text, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
import Img from '../../../components/Img';
import {appIcons, appImages} from '../../../assets';
import {colors} from '../../../utils';
import makeStyles from './styles';
import Listed from '../../../components/Listed';
import { chat,pendings } from '../../../utils/dummyData';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'current',
      isPending: false,
      message: false,
      status: 'pending',
      pendingsData:pendings
    };
  }

  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {chats, select, pending, status,pendingsData} = this.state;

  
    const acceptRequest = index => {
      console.log('index', index);
    };
    const filter = index => {
      const deleteRequest = chats.filter(item => item?.id !== index);
      this.setState({chats: deleteRequest});
    };
    const CancelButton = id => {
   
      updatedCard = pendingsData.filter(item => item?.id !== id);
      this.setState({pendingsData: updatedCard});
    };
   



    return (
      <AppBackground back title={'Requests'} marginHorizontal={false}>
        <View style={styles.viewstyle}>
          <TouchableOpacity
            style={[
              styles.current,
              {borderColor: select == 'current' ? colors.red : theme.title},
            ]}
            onPress={() => this.setState({select: 'current'})}>
            <Text
              style={[
                styles.pendingtxt,
                {color: select == 'current' ? colors.red : theme.title},
              ]}>
              Current
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.current,
              {borderColor: select == 'pending' ? colors.red : theme.title},
            ]}
            onPress={() => this.setState({select: 'pending'})}>
            <Text
              style={[
                styles.pendingtxt,
                {color: select == 'pending' ? colors.red : theme.title},
              ]}>
              Pending
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={ select == 'current' ? chat : select == 'pending' ? pendingsData : null }
            renderItem={({ item }) => 
            {
              if (select == 'current'){
               return <Listed item={item} current  Accepted={() => NavService.navigate('Chat')} />;
              }
            else if (select == 'pending'){
              return <Listed item={item} pending CancelButton={CancelButton} />

            }
            
          
          }
        }
          />
        
      </AppBackground>
    );
  }
}


export default connect()(function (props) {
  const {colors} = useTheme();

  return <Messages {...props} theme={colors} />;
});
