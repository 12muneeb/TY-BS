import React, {Component} from 'react';
import {Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import Img from '../../../components/Img';
import {colors, family, size} from '../../../utils';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomButton from '../../../components/CustomButton';
import Unblock from '../../../containers/PopUp/Unblock';
import LogoutPopup from '../../../containers/PopUp/LogoutPopup';
import {connect} from 'react-redux';
import {logoutUser} from '../../../redux/actions/authAction';
import {toggleAppTheme} from '../../../redux/actions/appAction';
import makeStyles from './styles';
import {Tipsdata} from '../../../utils/dummyData';
import TipsClick from '../../../components/TipsClick';
import InviteLink from '../../../containers/PopUp/InviteLink';
import {useTheme} from '@react-navigation/native';
import Switched from './Switched';
class Settings extends Component {
  state = {
    set: false,
    check: false,
    isModalVisible: false,
    isModalVisibleLogout: false,
    matchProfile: false,
    isMode: false,
    isNoti:false
  };

  render() {
    const styles = makeStyles(theme) || [];
    const {
      set,
      data,
      check,
      isModalVisible,
      isModalVisibleLogout,
      matchProfile,
      isMode,
      isNoti
    } = this.state;
    const theme = this.props.appTheme;
    const handleMode = () => {
      this.setState({isMode:!isMode})
      this?.props?.toggleAppTheme(theme == 'dark' ? 'light' : 'dark');
    };
    return (
      <AppBackground back title={'Settings'} marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Switched title={'Notification'} isOn={isNoti} onToggle={()=> this.setState({isNoti:!isNoti})}/>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={Tipsdata}
            renderItem={({item}) => (
              <TipsClick
                item={item}
                onPress={() => this.setState({matchProfile: true})}
              />
            )}
          />
          <Switched
            title={theme == 'light' ? 'Dark Mode' : 'Light Mode'}
            // title={'Light Mode'}
            isOn={isMode}
            onToggle={handleMode}
          />

          {/* <CustomButton
            onPress={() =>
              this?.props?.toggleAppTheme(theme == 'light' ? 'dark' : 'light')
            }
            title={`${
              theme == 'light'
                ? 'Switch To Dark Theme'
                : 'Switch To Light Theme'
            }`}
            buttonStyle={styles.buttonChangeTheme}
          /> */}
        </ScrollView>
          <CustomButton
            onPress={() => this.setState({isModalVisible: true})}
            title={'Delete Account'}
            buttonStyle={styles.btn}
          />
          <CustomButton
            onPress={() => this.setState({isModalVisibleLogout: true})}
            title={'Logout'}
            buttonStyle={styles.btn}
          />

        <Unblock
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Delete Account'}
          description={'Are you sure you want to delete \n Account?'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
        <LogoutPopup
          isModalVisible={isModalVisibleLogout}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisibleLogout: false})}
          onCross={() => this.setState({isModalVisibleLogout: false})}
          onCancel={() => this.setState({isModalVisibleLogout: false})}
          title={'Logout'}
          description={'Are you sure you want to logout \n account'}
          onSubmit={() => {
            this.setState({isModalVisibleLogout: false});
            setTimeout(() => {
              this.props.logoutUser();
            }, 850);
          }}
        />
        <InviteLink
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
        />
      </AppBackground>
    );
  }
}
const actions = {logoutUser, toggleAppTheme};
function mapStateToProps({authReducer: {user}, appReducer: {appTheme}}) {
  return {
    user,
    appTheme,
  };
}
export default connect(
  mapStateToProps,
  actions,
)(function (props) {
  const {colors} = useTheme();

  return <Settings {...props} theme={colors} />;
});
