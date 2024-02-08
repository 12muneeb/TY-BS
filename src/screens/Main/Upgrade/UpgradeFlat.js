import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React,{Component} from 'react';
import {size, family, colors} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import {SubscriptionData} from '../../../utils/dummyData';
import {useTheme} from '@react-navigation/native';
import { connect } from 'react-redux';



export class UpgradeFlat extends Component {
  state = {
    selected: false,
    isModalVisible: false,
    abcd: false,
    checked: false,
    bio: '',
    alertt: null,
  };

  render() {
    const {theme,item,onSubmit} = this.props;
 
    // const styles = makeStyles(theme) || [];
    const {selected, isModalVisible, checked, bio, alertt} = this.state;
 
    return (
        <View style={styles.content}>
        <View style={styles.starter}>
          <Text style={[styles.txt, {color: theme.constantcolor}]}>
            {item?.title}
          </Text>
          <Text style={[styles.price, {color: theme.constantcolor}]}>
            {item?.price}{' '}
          </Text>
        </View>
        <View style={{marginTop: 20}}>
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
        <CustomButton
          onPress={onSubmit}
          title={'Buy New'}
          buttonStyle={[styles.btn, {color: theme.iconcolor}]}
        />
      </View>
    
   
          )}
}

function mapStateToProps({appReducer: {appTheme}}) {
  return {
    appTheme,
  };
}
export default connect(
  mapStateToProps,
 
)(function (props) {
  const {colors} = useTheme();

  return <UpgradeFlat {...props} theme={colors} />;
});


const styles = StyleSheet.create({
  content: {
    width: '100%',
    alignSelf: 'center',
    padding: 4,
    height: '53%',
    borderWidth: 1.8,
    borderColor: colors.red,
    borderRadius: 4,
  },
  starter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#982424',
    paddingVertical: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  txt: {
    color: colors.white,
    fontSize: size.h1,
    fontFamily: family.RedHatDisplay_Bold,
  },
  price: {
    color: colors.white,
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.h1,
  },
  btn: {
    width: '40%',
    position: 'absolute',
    bottom: -25,
    borderRadius: 5,
    height: 50,
    backgroundColor: colors.red,
    alignSelf: 'center',
  },
  viewstyle: {
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.red,
    alignSelf: 'center',
    right: 10,
  },
});

