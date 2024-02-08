import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import NavService from '../../../helpers/NavService';
import AppBackground from '../../../components/AppBackground';
import {colors} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import Unsubscribe from '../../../containers/PopUp/Unsubscribe';
import makeStyles from './styles';
import {SubscriptionData} from '../../../utils/dummyData';
import {useTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
class Subscription extends Component {
  state = {
    selected: false,
    isModalVisible: false,
    abcd: false,
    checked: false,
    bio: '',
    alertt: null,
  };

  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {selected, isModalVisible, checked, bio, alertt} = this.state;

    return (
      <AppBackground back title={'Subscription'} marginHorizontal={false}>
        <View style={styles.maincontainer}>
          <View style={styles.starter}>
            <Text style={styles.txt}>Basic Pack</Text>
            <Text style={styles.price}>$ 10.00</Text>
          </View>
          <View style={styles.content}>
            {SubscriptionData.map((item, index) => {
              return (
                <View style={styles.viewstyle}>
                  <TouchableOpacity
                    style={[
                      styles.circle,
                      {
                        backgroundColor: selected == item ? colors.red : '',
                      },
                    ]}
                    onPress={() =>
                      this.setState({selected: item})
                    }></TouchableOpacity>
                  <Text style={styles.title} numberOfLines={1}>
                    {item?.title}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.viewstyle1}>
          <Text style={styles.subscribe}>
            You have subscribed our starter pack
          </Text>
        </View>
        <View style={{position: 'absolute', bottom: 20}}>
          <CustomButton
            onPress={() => this.setState({isModalVisible: true})}
            title={'Unsubscribe'}
            buttonStyle={styles.btn}
          />

          <CustomButton
            onPress={() => NavService.navigate('Upgrade')}
            title={'Upgrade'}
            buttonStyle={[styles.btn, {top: 10, backgroundColor: colors.red}]}
          />
        </View>
        <Unsubscribe
          alertText={alertt}
          bio={bio}
          onChangeText={value => this?.setState({bio: value})}
          isModalVisible={isModalVisible}
          title={'Reason'}
          desc={'Description...'}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onSubmit={() => {
            // if (bio?.length <= 0) {
            //   this?.setState({alertt: 'Please fill this input'});
            //   setTimeout(() => {
            //     this?.setState({alertt: null});
            //   }, 3000);
            // } else {
              this.setState({isModalVisible: false});
              setTimeout(() => {
                NavService.navigate('Settings');
              }, 500);
            // }
          }}
          // onSubmit={() => {

          // }}
        />
      </AppBackground>
    );
  }
}

export default connect()(function (props) {
  const {colors} = useTheme();

  return <Subscription {...props} theme={colors} />;
});
