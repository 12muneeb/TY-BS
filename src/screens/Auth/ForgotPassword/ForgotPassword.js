import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import { appIcons, appLogos } from '../../../assets/index';
import styles from './styles';
class ForgotPassword extends Component {
  state = {
    email: '',
  };

  onSubmit = () => {
    const { email } = this.state;
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
      NavService.replace('Otp', { screenName: 'forgot' });
    }
  };

  render() {
    const { email } = this.state;
    return (
      <CustomBackground
        showLogo={false}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, { marginTop: 20 }]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <View style={styles.prelogin}>
              <Text style={styles.login}>Forgot Password</Text>
            </View>
            <View style={styles.textNormal}>
              <CustomTextInput
                leftIcon={appIcons.email}
                placeholder={'Email'}
                value={email}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({ email: value })}
                emailstyle={styles.emailstyle}
                containerStyle={styles.containerStyle}

              />
              <CustomButton
                title="Continue"
                onPress={this.onSubmit}
                buttonStyle={styles.btn}
                textStyle={styles.text}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default ForgotPassword;
