import React, {Component} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import NavService from '../../../helpers/NavService';
import {appIcons, appImages} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import Img from '../../../components/Img';
import makeStyles from './styles';
import {chats} from '../../../utils/dummyData';
import FlatComponent from '../../../components/FlatComponent';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';
class Messages extends Component {
  state = {
    searchText: '',
  };
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState({searchText: ''});
    });
  }
  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {searchText} = this.state;
    return (
      <AppBackground
        menu
        title={'Messages'}
        notification
        marginHorizontal={false}
        AppStyle={{...Shadows.shadow5}}
        >
        <CustomTextInput
           maxLength={15}
          //  onSubmitEditing={()=>{
          //   this?.setState({searchText:''})
          // }}
          rightIcon={appIcons.search}
          placeholder={'Search Here..'}
          value={searchText}
          keyboardType={'email-address'}
          onChangeText={value => this.setState({searchText: value})}
          containerStyle={styles.containerStyle}
          emailstyle={styles.emailstyle}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flat}
          keyExtractor={(item, index) => index.toString()}
          data={chats}
          renderItem={({item}) => <FlatComponent item={item} msg onSubmit={() => NavService.navigate('Chat')}/>}
        />
      </AppBackground>
    );
  }
}


export default connect()(function (props) {
  const {colors} = useTheme();

  return <Messages {...props} theme={colors} />;
});

