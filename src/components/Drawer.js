import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useTheme} from '@react-navigation/native';
import {family, size} from '../utils';
import NavService from '../helpers/NavService';
import {appIcons, appImages} from '../assets';
import ProfileImage from '../components/ProfileImage';
import {logoutUser} from '../redux/actions/authAction';
import LogoutPopup from '../containers/PopUp/LogoutPopup';
import Img from './Img';
import Shadows from '../helpers/Shadows';

const menuItems = [
  {
    icon: appIcons.homeUnSelected,
    title: 'Home',
    nav: 'Home',
  },
  {
    icon: appIcons.homeUnSelected,
    title: 'Matched Profile',
    nav: 'MainProfile',
  },
  {
    icon: appIcons.homeUnSelected,
    title: 'Requests',
    nav: 'Requests',
  },
  {
    icon: appIcons.homeUnSelected,
    title: 'Tips',
    nav: 'Tips',
  },
  {
    icon: appIcons.homeUnSelected,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: appIcons.power,
    title: 'Logout',
    nav: 'logout',
  },
];
class Drawer extends Component {
  state = {
    isModalVisibleLogout: false,
  };

  render() {
    // const {user} = this.props;
    const {isModalVisibleLogout} = this.state;
    const {theme} = this.props;
    const RenderItem = ({item, index}) => {
      const {title, icon, nav} = item;
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (title === 'Logout') {
              NavService.closeDrawer();
              setTimeout(() => {
                this.setState({isModalVisibleLogout: true});
              }, 850);
            } else if (item?.browser) {
              Linking.openURL(item?.browser);
            } else {
              NavService.closeDrawer();
              NavService.navigate(nav);
            }
          }}
          style={{
            width: title == 'Logout' ? 135 : '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
            borderBottomWidth: index == menuItems?.length - 1 ? 0 : 0.3,
            borderColor: theme?.nero,
            paddingHorizontal: 20,
            paddingVertical: 8,
            backgroundColor: title == 'Logout' && '#FF2020',
            borderTopRightRadius: title == 'Logout' ? 8 : 0,
            borderBottomRightRadius: title == 'Logout' ? 8 : 0,
            height: title == 'Logout' ? 55 : 40,
            marginTop: title == 'Logout' ? 20 : 0,
          }}>
          <View
            style={{
              paddingVertical: 10,
              borderRadius: 7,
            }}>
            {title == 'Logout' ? (
              <Image
                source={icon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  marginRight: 10,
                  tintColor: theme?.iconcolor,
                }}
              />
            ) : null}
          </View>
          <Text
            style={{
              color: title == 'Logout' ? theme?.iconcolor : theme?.text,
              fontSize: size.normal,
              fontFamily: family.RedHatDisplay_SemiBold,
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: theme?.drawer,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          borderRightWidth: 1,
          borderColor: '#B47E00',
        }}>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            alignItems: 'center',
            paddingBottom: 40,
            position: 'relative',
          }}>
          <TouchableOpacity
            onPress={() => NavService?.closeDrawer()}
            // onPress={handleNavigate}
            style={{
              right: 30,
              position: 'absolute',
              padding: 5,
            }}>
            <Img
              local={true}
              src={appIcons.cross}
              style={{width: 14, height: 14}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={{marginTop: 40, alignItems: 'center', height: 105}}>
            <ProfileImage
              size={100}
              innerAsset
              imageUri={appImages.profile}
              style={{
                borderWidth: 2,
                borderColor: '#FF2020',
                ...Shadows.shadow5,
              }}
            />
          </View>
          <Text
            numberOfLines={1}
            style={{
              color: theme?.border,
              fontSize: size?.large,
              fontFamily: family?.RedHatDisplay_Bold,
            }}>
            John smith
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: theme?.inputtext,
              fontSize: size?.medium,
              fontFamily: family?.RedHatDisplay_Bold,
            }}>
            johnsmith@email.com
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 10, width: '100%'}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            style={{
              height: '100%',
            }}
            renderItem={props => <RenderItem {...props} />}
          />
        </View>
        <LogoutPopup
          isModalVisible={isModalVisibleLogout}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisibleLogout: false})}
          onCross={() => this.setState({isModalVisibleLogout: false})}
          onCancel={() => this.setState({isModalVisibleLogout: false})}
          title={'Logout '}
          description={'Are you sure you want  to  \n logout account'}
          onSubmit={() => {
            this.setState({isModalVisibleLogout: false});
            this.props.logoutUser();
          }}
        />
      </View>
    );
  }
}

function mapStateToProps({authReducer: {user}, appReducer: {appTheme}}) {
  return {
    user,
    appTheme,
  };
}
const actions = {logoutUser};
export default connect(
  mapStateToProps,
  actions,
)(function (props) {
  const {colors} = useTheme();

  return <Drawer {...props} theme={colors} />;
});
