import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import Logo from '../../../components/Logo';
import CustomCard from '../../../components/CustomCard';
import {colors} from '../../../utils';
import CustomText from '../../../components/CustomText';
import makeStyles from './styles';
import Img from '../../../components/Img';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      setKeyboardStatus: false,
    };
    this.showSubscription = null;
    this.hideSubscription = null;
  }

  onSubmit = () => {
    const {email} = this.state;
    if (!email) {
      Toast.show({
        text1: `Email field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Please enter valid email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Keyboard?.dismiss();
      NavService.replace('Otp', {screenName: 'login', email: email});
      Toast.show({
        text1: 'Otp Verification has been sent to your Email',
        type: 'success',
        visibilityTime: 3000,
      });
    }
  };
  componentDidMount() {
    this.showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({setKeyboardStatus: true});
    });
    this.hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      // this.setState({comment: ''});
      this.setState({setKeyboardStatus: false});
    });
  }
  componentWillUnmount() {
    this.showSubscription.remove();
    this.hideSubscription.remove();
  }
  render() {
    const {email, setKeyboardStatus} = this.state;
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    console.log(setKeyboardStatus, 'setKeyboardStatussetKeyboardStatus');
    return (
      <CustomBackground
        showLogo={true}
        onBack={() => this.props.navigation.goBack()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'height'}
          style={{
            flex: 1,
            // alignItems: 'center',
            // backgroundColor: 'red',

            paddingBottom: setKeyboardStatus ? 5 : 0,
          }}
          keyboardVerticalOffset={0}>
          <CustomCard>
            <View style={styles.prelogin}>
              <Text style={styles.login}>Welcome Back!</Text>
              <CustomText
                style={styles.names}
                text={'Please sign-in to your account'}
              />
            </View>
            <View style={styles.container}>
              <CustomTextInput
                line
                maxLength={35}
                leftIcon={appIcons.email}
                placeholderTextColor={colors.nero}
                placeholder={'Enter your Email'}
                value={email}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({email: value})}
                emailstyle={styles.emailstyle}
                containerStyle={styles.containerStyle}
                lineStyle={{color: colors.red}}
                textInputStyle={{color: colors.nero}}
              />
              <CustomButton
                title="Continue"
                onPress={this.onSubmit}
                buttonStyle={styles.btn}
                textStyle={styles.text}
              />
            </View>
          </CustomCard>
        </KeyboardAvoidingView>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};

export default connect(
  null,
  actions,
)(function (props) {
  const {colors} = useTheme();

  return <Login {...props} theme={colors} />;
});
