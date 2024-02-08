import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavService from '../../../helpers/NavService';
import {appIcons} from '../../../assets/index';
import AppBackground from '../../../components/AppBackground';
import Img from '../../../components/Img';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';

class PackagePayment extends Component {
  state = {
    searchText: '',
  };

  render() {
    const {route} = this.props.route.params;
    const {searchText} = this.state;
    return (
      <AppBackground marginHorizontal={false} backgroundStyles={styles.bg}>
        <View style={styles.mainview}>
          <View style={styles.viewstyle1}>
            <Img local={true} src={appIcons.smile} style={styles.smile} />
            <Text style={styles.txt1}>Congratulations</Text>
            <Text style={styles.txt2}>Payment done successfully</Text>
            <CustomButton
              onPress={() =>
                NavService.navigate('Chat', {screenName: 'payment'})
              }
              title={'Back To Messages'}
              buttonStyle={styles.back}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default PackagePayment;
