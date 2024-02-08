import {Text, View, FlatList, ScrollView} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Tipsdata} from '../../../utils/dummyData';
import TipsClick from '../../../components/TipsClick';
import makeStyles from './styles';
import {appIcons} from '../../../assets';
import Img from '../../../components/Img';
import {useTheme} from '@react-navigation/native';
import {colors, family, size} from '../../../utils';
import { connect } from 'react-redux';
import NavService from '../../../helpers/NavService';
export class Tips extends Component {
  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    return (
      <AppBackground onBack={()=> NavService.replace('UserAppStack', {screen: 'Home'})} title={'Tip Features'}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.tipsfeature}>
            <Img
              local
              src={appIcons.tip}
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </View>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={Tipsdata}
            renderItem={({item}) => (
              <TipsClick
                item={item}
                tips
                titleStyle={styles.tipstext}
                viewcontainer={styles.tipscontainer}
              />
            )}
          />
          <View style={styles.description}>
            <Text
              style={{
                color: '#000000',
                fontSize: size.tiny,
                fontFamily: family.RedHatDisplay_Medium,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </Text>
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default connect()(function (props) {
  const {colors} = useTheme();

  return <Tips {...props} theme={colors} />;
});
