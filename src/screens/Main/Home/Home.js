import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Alert,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CustomTextInput from '../../../components/CustomTextInput';
import AppBackground from '../../../components/AppBackground';
import Filter from '../../../containers/PopUp/Filter';
import Match from '../../../containers/PopUp/Match';
import NavService from '../../../helpers/NavService';
import Img from '../../../components/Img';
import {appIcons} from '../../../assets';
import {colors} from '../../../utils';
import makeStyles from './styles';
import {matchData} from '../../../utils/dummyData';
import Tips from '../../../containers/PopUp/Tips/Tips';
import FlatCard from './FlatCard';
import {useTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import Shadows from '../../../helpers/Shadows';
const {width} = Dimensions.get('screen');
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isModalVisible: '',
      isModalVisible1: '',
      address: '',
      key: false,
      matchProfile: false,
      matchData: [],
      matchDataCard: matchData,
      currentIndex: 0,
    };
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState({searchText: ''});
    });
  }
  componentWillUnmount() {
    this.focusListener();
  }
  onSubmit = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible1: true});
    }, 750);
  };
  onClick = () => {
    this.setState({isModalVisible1: false});
    setTimeout(() => {
      NavService.navigate('MainProfile');
    }, 750);
  };
  onChat = () => {
    this.setState({isModalVisible1: false});
    setTimeout(() => {
      NavService.navigate('Chat');
    }, 750);
  };
  onCancel = index => {
    const {matchDataCard} = this.state;
    const deletecancel = matchDataCard?.filter(item => item?.id !== index);
    this.setState({matchDataCard: deletecancel});
    const arr = matchDataCard[matchDataCard?.length - 1];
    console.log('arrrinhomescreen', arr);
    if (arr?.id == index) {
      this._carousel?.snapToItem(
        matchDataCard?.filter(item => item?.id) == matchDataCard?.length - 1,
      );
    }
  };

  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {
      searchText,
      isModalVisible,
      address,
      key,
      matchProfile,
      isModalVisible1,
      matchDataCard,
    } = this.state;

    const saveAddress = (address, geometry) => {
      this.setState({address: address});
    };
    const getCarouselItemLayout = (_, index) => ({
      length: width - 44,
      offset: width - 44 * index,
      index,
    });

    const handlePrevious = index => {
      let params = {
        filter: 0,
      };
      this.setState({searchText: ''});
      // this.getUserList(params);
      this._carousel?.snapToItem(index == 0);
    };

    return (
      <AppBackground menu  title={'Home'} notification marginHorizontal={false} AppStyle={{...Shadows.shadow5}}>
        <View style={styles.viewStyle1}>
          <CustomTextInput
           maxLength={15}
            rightIcon={appIcons.search}
            placeholder={'Search you best match'}
            value={searchText}
            keyboardType={'default'}
            onChangeText={value => this.setState({searchText: value})}
            emailstyle={styles.emailstyle}
            containerStyle={styles.containerStyle}
            mainView={styles.margin}
            textInputStyle={[styles.textInputStyle, {color: theme.title}]}
            // onSubmitEditing={() => {
            //   this?.setState({searchText: ''});
            // }}
          />
          <TouchableOpacity
            style={styles.tch}
            onPress={() => this.setState({isModalVisible: true})}>
            <Img
              local={true}
              src={appIcons.filter}
              style={styles.filter}
              tintColor={theme.iconcolors}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txtstyle1}>
            Hello, <Text style={styles.txtstyle2}>John</Text>
          </Text>
        </View>
        <View style={styles.viewstyle1}>
          <Text style={styles.txtstylematch}>Find Your Best Match</Text>
          <View style={styles.viewstyle2}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{flexDirection: 'row'}}
              onPress={handlePrevious}>
              <Text style={styles.txtstyleprev}>Previous</Text>
              <Img
                local={true}
                src={appIcons.previous}
                style={styles.previous}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            key={key}
            data={matchDataCard}
            getItemLayout={getCarouselItemLayout}
            renderItem={({item}) => (
              <FlatCard
                item={item}
                onCancel={this.onCancel}
                onOpen={() => this.setState({matchProfile: true})}
              />
            )}
            sliderWidth={width - 34}
            itemWidth={width - 44}
          />
        </ScrollView>
        <Filter
          isModalVisible={isModalVisible}
          currentfocus={this}
          saveAddress={saveAddress}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
        <Match
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={this.onSubmit}
        />
        <Tips
          match
          isModalVisible={isModalVisible1}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible1: false})}
          onCross={() => this.setState({isModalVisible1: false})}
          onSubmit={this.onChat}
          onClick={this.onClick}
        />
      </AppBackground>
    );
  }
}

export default connect()(function (props) {
  const {colors} = useTheme();

  return <Home {...props} theme={colors} />;
});
