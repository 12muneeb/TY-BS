import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-toast-message';
import {appIcons, appLogos} from '../../../assets/index';
import styles from './styles';
import NavService from '../../../helpers/NavService';
class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSubmit = () => {
    const {email, password, confirmPassword} = this.state;
    if (!email) {
      Toast.show({
        text1: `Email field can't be empty`,
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Email is not valid',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'OTP verification code has been sent to your email address',
        type: 'success',
        visibilityTime: 3000,
      });
      Keyboard?.dismiss();
      NavService.replace('Otp', {screenName: 'signup'});
    }
  };

  render() {
    const {email, password, confirmPassword} = this.state;
    return (
      <CustomBackground
        showLogo={false}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, {marginTop: 20}]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <View style={styles.prelogin}>
              <Text style={styles.login}>Sign Up</Text>
            </View>
            <CustomTextInput
              maxLength={35}
              leftIcon={appIcons.email}
              placeholder={'Email'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({email: value})}
              emailstyle={styles.emailstyle}
              containerStyle={styles.containerStyle}
            />
            {/* <CustomTextInput
              leftIcon={appIcons.lock}
              placeholder={'Password'}
              value={password}
              onChangeText={value => this.setState({password: value})}
              rightIcon
              isPassword
              emailstyle={styles.emailstyle}
              containerStyle={styles.containerStyle}
              styleRight={styles.styleRight}
            />
            <CustomTextInput
              leftIcon={appIcons.lock}
              placeholder={'Change Password'}
              value={confirmPassword}
              onChangeText={value => this.setState({confirmPassword: value})}
              rightIcon
              isPassword
              emailstyle={styles.emailstyle}
              containerStyle={styles.containerStyle}
              styleRight={styles.styleRight}
            /> */}
            <CustomButton
              title="SIGNUP"
              onPress={this.onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.text}
            />
          </View>

          <View style={styles.bottomView}>
            <Text style={styles.textNormal}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textNormalWithColor}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default Signup;
