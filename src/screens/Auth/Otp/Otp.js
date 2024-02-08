import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-toast-message';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import {appLogos} from '../../../assets/index';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {colors} from '../../../utils';
import {loginUser} from '../../../redux/actions/authAction';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import Logo from '../../../components/Logo';
import CustomCard from '../../../components/CustomCard';
import CustomText from '../../../components/CustomText';
import NavService from '../../../helpers/NavService';

const Otp = ({navigation, route}) => {
  const {screenName, email, phoneNo} = route.params;
  console.log('email', email);
  const dispatch = useDispatch();
  let timer;
  const [code, setCode] = useState();
  const [check, setCheck] = useState('123456');
  const [timerCode, setTimerCode] = useState(30);
  const [resend, setResend] = useState(false);
  const [resendOtpActive, setResendOtpActive] = useState(false);
  const [key, setKey] = useState(0);
  const handleCodeFilled = code => {
    Keyboard.dismiss();
    NavService.replace('CompleteProfile', {email: email, phoneNo: phoneNo});
  };

  const startInterval = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setTimerCode(timerCode => {
        if (timerCode > 0) {
          return timerCode - 1;
        } else {
          setResend(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };
  const handleReset = () => {
    if (resend) {
      setKey(prevKey => prevKey + 1);
      setResendOtpActive(false);
      setTimerCode(30);
      setResend(false);
      setCode();
      startInterval();
      Toast.show({
        text1: 'OTP verification code has been sent to your email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'Please wait untill timer finishes!',
        type: 'error',
        visibilityTime: 3000,
      });
    }
  };
  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(timer);
    };
  }, []);
  const onCompleteTimer = () => {
    setResendOtpActive(true);
  };
  return (
    <CustomBackground showLogo={true} onBack={() => navigation.goBack()}>
      <CustomCard>
        <View style={styles.container}>
          <View style={styles.prelogin}>
            <CustomText
              style={styles.login}
              text={'Please Verify Your Account'}
            />
          </View>

          <Text style={styles.names}>
            We send you a six-digit verification code {'\n'} to verify your
            account
          </Text>

          <OTPInputView
            keyboardType="numeric"
            style={styles.otpInput}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={c => {
              const cleanNumber = c.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
              setCode(cleanNumber);
            }}
            onCodeFilled={handleCodeFilled}
            code={code}
          />

          <View style={styles.countview}>
            <CountdownCircleTimer
              isPlaying
              rotation={'clockwise'}
              key={key}
              duration={30}
              colors={[colors.darkwhite, colors.red]}
              colorsTime={[6, 4]}
              size={100}
              strokeWidth={4}
              trailColor="transparent"
              onComplete={onCompleteTimer}>
              {({remainingTime}) => {
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;
                return (
                  <Text style={styles.timerText}>{`00:${
                    timerCode < 10 ? '0' + timerCode : timerCode
                  }`}</Text>
                );
              }}
            </CountdownCircleTimer>
          </View>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
              <View style={styles.bottomView}>
                <Text style={styles.textNormal}>Don't received the Code? </Text>
                <TouchableOpacity onPress={() => handleReset()}>
                  <Text style={styles.textNormalWithColor}>Resend</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </CustomCard>
    </CustomBackground>
  );
};

const actions = {loginUser};
export default connect(null, actions)(Otp);
