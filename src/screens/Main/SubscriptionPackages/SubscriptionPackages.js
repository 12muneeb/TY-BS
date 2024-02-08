import React, {Component} from 'react';
import {Text, Dimensions, View} from 'react-native';
import NavService from '../../../helpers/NavService';
import AppBackground from '../../../components/AppBackground';
import {colors, family, size} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import SubscriptionData from './SubscriptionData';
import styles from './styles';
import {products} from '../../../utils/dummyData';
import Tips from '../../../containers/PopUp/Tips/Tips';
const {width, height} = Dimensions.get('screen');
class SubscriptionPackages extends Component {
  state = {
    selected: false,
    key: false,
    matchProfile:false
  };
  
  render() {
   const onClick = () => {
      this.setState({matchProfile: false})
    setTimeout(() => {
      NavService.navigate('Tips')
    }, 550);
    }
    const {key,matchProfile} = this.state;
    return (
      <AppBackground
        back
        title={'Subscription Packages'}
        marginHorizontal={false}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          key={key}
          data={products}
          renderItem={({item}) => (
            <SubscriptionData
              item={item}
              onSubmit={() => this.setState({matchProfile: true})}
            />
          )}
          sliderWidth={width - 44}
          itemWidth={width - 44}
        />
          <Tips
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={onClick}
        />
      </AppBackground>
    );
  }
}

export default SubscriptionPackages;
