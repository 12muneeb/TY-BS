import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {colors, family, size} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import styles from './styles';
import Shadows from '../../../helpers/Shadows';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('screen');

const Tips = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  match,
  onClick,
  tip
}) => {
  console.log('selected', selected);
  const [check, ischeck] = useState('');
  const {colors} = useTheme();
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      {
        match ? 
        <View style={[styles.viewStyle1,{backgroundColor:colors.popup,borderWidth:1,borderColor:colors.constantcolor}]}>
        <ImageBackground
          source={appIcons.heartpopup}
          style={styles.heart}
          resizeMode="contain"></ImageBackground>
        <Text style={[styles.txtStyle1,{marginTop:0,color:colors.title}]}>Congratulations</Text>
        <Text style={[styles.txtStyle2,{color:colors.inputtext}]}>Its a Match</Text>
        <CustomButton
          onPress={onSubmit}
          title={'Message Her'}
          buttonStyle={[styles.btnstyle,{width:'70%',height:55,}]}
          textStyle={[styles.txtbtn,{color:colors.iconcolor}]}
        />
        <TouchableOpacity stle={{...Shadows.shadow5}} onPress={onClick}>
        <Text style={styles.profiletxt}>View Profile</Text>
        </TouchableOpacity>

      </View> 
      :
      <View style={[styles.viewStyle1,{backgroundColor:colors.popup,borderWidth:1,borderColor:colors.constantcolor}]}>
      <ImageBackground
        source={appIcons.smile}
        style={styles.imgbg1}
        resizeMode="contain"></ImageBackground>
      <Text style={[styles.txtStyle1,{color:colors.title}]}>Congratulation</Text>
      <Text style={[styles.txtStyle2,{color:colors.inputtext}]}>Payment Done Successfully</Text>
      <CustomButton
        onPress={onSubmit}
        title={'Continue'}
        buttonStyle={styles.btnstyle}
        textStyle={[styles.txtbtn,{color:colors.iconcolor}]}
      />
    </View>
      }
    
      
    </CustomModal>
  );
};

export default Tips;
