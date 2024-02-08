import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import NavService from '../../../helpers/NavService';
import AppBackground from '../../../components/AppBackground';
import {colors} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import styles from './styles';
import UpgradeFlat from './UpgradeFlat';
import {packages} from '../../../utils/dummyData';
const {width, height} = Dimensions.get('screen');
class Upgrade extends Component {
  state = {
    selected: false,
    key: false,
  };

  render() {
    const {data, selected, isModalVisible, key} = this.state;

    return (
      <AppBackground back title={'Subscription'}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            key={key}
            data={packages}
            renderItem={({item}) => (
              <UpgradeFlat
                item={item}
                onSubmit={() => NavService.navigate('SubscriptionPayment')}
                
              />
            )}
            sliderWidth={width - 44}
            itemWidth={width - 44}
          />
        </View>
      </AppBackground>
    );
  }
}

export default Upgrade;
