import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavService from '../../../helpers/NavService';
import {appIcons} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import Img from '../../../components/Img';
import CustomButton from '../../../components/CustomButton';
import makeStyles from './styles';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';
import {toggleAppTheme} from '../../../redux/actions/appAction';
class SubscriptionPayment extends Component {
  state = {};
  
  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const lightThem = this.props.appTheme;
    return (
      <AppBackground
        marginHorizontal={false}
        backgroundStyles={styles.bg}
        title={'Subscription'}
        back>
        <View style={styles.mainview}>
          <View style={styles.viewstyle1}>
            <Img local={true} src={lightThem=='light' ?  appIcons.right:  appIcons.darkright} style={styles.smile} />
            <Text style={styles.txt1}>Congratulation</Text>
            <Text style={styles.txt2}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              fringilla, nunc tortor mattis aliquam facilisi varius velit
              bibendum nisi sed,{' '}
            </Text>
          </View>
          <CustomButton
            onPress={() => NavService.navigate('Settings')}
            title={'Back To Settings'}
            buttonStyle={styles.back}
            textStyle={styles.textbutton}
          />
        </View>
      </AppBackground>
    );
  }
}

// const ThemedSubscriptionPayment = props => {
//   const {colors} = useTheme();
//   return <SubscriptionPayment {...props} theme={colors} />;
// };

// export default ThemedSubscriptionPayment;

// const actions = {logoutUser, toggleAppTheme};
function mapStateToProps({authReducer: {user}, appReducer: {appTheme}}) {
  return {
    user,
    appTheme,
  };
}
export default connect(
  mapStateToProps,
)(function (props) {
  const {colors} = useTheme();

  return <SubscriptionPayment {...props} theme={colors} />;
});