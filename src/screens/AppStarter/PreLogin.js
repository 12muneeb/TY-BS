import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
// import {Colors} from '../../../config';
import {colors} from '../../utils';
import CustomBackground from '../../components/CustomBackground';
// import SocialSignin from '../../../components/SocialSignin';
// import Icons from '../../../assets/Icons';
import {appIcons, appLogos} from '../../assets/index';
import Logo from '../../components/Logo';
import styles from './styles';
import {openLink} from '../../helpers/BrowserUrl';
import CustomCard from '../../components/CustomCard';
const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const methods = [
      {
        name: 'Email',
        icon: appIcons.email,
        onPress: () => navigation.navigate('Login'),
        color: colors.cred,
      },
      {
        name: 'Phone',
        icon: appIcons.phone,
        color: colors.brown,
        onPress: () => navigation.navigate('LoginPhone'),
      },
      {
        name: 'Google',
        icon: appIcons.googlePlus,
        color: colors.cblue,
        onPress: () =>
          Toast.show({
            text1: 'Google login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Google,
      },
      {
        name: 'Apple',
        icon: appIcons.apple,
        color: colors.black,
        onPress: () =>
          Toast.show({
            text1: 'Apple login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Apple,
      },
    ];
    const {navigation} = this.props;
    return (
      <CustomBackground back={false} showLogo={true}>
        <CustomCard>
          <View style={styles.container}>
            <View style={styles.prelogin}>
              <Text style={styles.login}>Pre Login</Text>
            </View>
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[styles.buttonContainer, {backgroundColor: color}]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <Text style={styles.buttonInnerText}>
                    Sign-In with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <View style={styles.viewstyle2}>
              <Text style={styles.textstyle3}>
                By Sign-in, You agree to our
              </Text>
              <View style={styles.viewstyle3}>
                <Text
                  onPress={() => openLink('https://www.google.com')}
                  style={styles.textstyle4}>
                  Terms & Conditions
                </Text>
                <Text style={styles.textstyle6}> & </Text>
                <Text
                  onPress={() => openLink('https://www.google.com')}
                  style={styles.textstyle4}>
                  Privacy Policy
                </Text>
              </View>
            </View>
          </View>
        </CustomCard>
      </CustomBackground>
    );
  }
}

export default App;
