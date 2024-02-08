import React, {Component} from 'react';
import {View, Pressable, FlatList, Keyboard, Dimensions} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import {appIcons} from '../../../assets';
import makeStyles from './styles';
import Img from '../../../components/Img';
import CommunityComponent from '../../../components/CommunityComponent';
import {community} from '../../../utils/dummyData';
import {useTheme} from '@react-navigation/native';
import NavService from '../../../helpers/NavService';
import {connect} from 'react-redux';
import Shadows from '../../../helpers/Shadows';
const {height} = Dimensions.get('screen')
class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCommunities: [],
      searchText: '',
      keyboardStatus: false,
      key: false,
    };
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState(previousState => ({
        searchText: '',
        allCommunities: community,
        key: !previousState?.key,
      }));
    });
    this.blurListener = this.props.navigation.addListener('blur', () => {
      this.setState(previousState => ({
        searchText: '',
        allCommunities: [],
        key: !previousState?.key,
      }));
    });
    this.keyboardDidShown = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(previousState => ({
        keyboardStatus: true,
      }));
    });
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(previousState => ({
        keyboardStatus: false,
      }));
    });
  }
  componentWillUnmount() {
    this?.focusListener();
    this?.blurListener();
    this?.keyboardDidShown?.remove();
    this?.keyboardDidHide?.remove();
  }
  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {searchText, allCommunities, key} = this.state;
    return (
      <AppBackground
        menu
        title={'Community'}
        notification
        marginHorizontal={false}
        AppStyle={{...Shadows.shadow5}}>
             <View style={{height: height / 1.25,}}>
        <CustomTextInput
          maxLength={15}
          // onSubmitEditing={() => {
          //   this?.setState({searchText: ''});
          // }}
          rightIcon={appIcons.search}
          placeholder={'Search Here...'}
          value={searchText}
          keyboardType={'email-address'}
          onChangeText={value => this.setState({searchText: value})}
          containerStyle={styles.containerStyle}
          mainView={styles.margin}
          emailstyle={styles.emailstyle}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flat}
          keyExtractor={(item, index) => index.toString()}
          data={allCommunities}
          renderItem={({item, index}) => (
            <CommunityComponent
              item={item}
              img
              desc
              video
              handleOn={() => NavService.navigate('MatchedProfile')}
              handleSubmit={() => NavService.navigate('MatchedProfile')}
            />
          )}
          key={key}
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Pressable
            style={styles.upload}
            onPress={() => NavService.navigate('CreatePost')}>
            <Img
              local
              src={appIcons.upload}
              resizeMode={'contain'}
              style={styles.uploadimg}
              tintColor={theme.iconcolors}
            />
          </Pressable>
        </View>
        </View>
      </AppBackground>
    );
  }
}
function mapStateToProps({authReducer: {user}}) {
  return {
    user,
  };
}

export default connect(
  mapStateToProps,
  null,
)(function (props) {
  const {colors} = useTheme();

  return <Community {...props} theme={colors} />;
});
