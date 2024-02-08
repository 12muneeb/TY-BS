import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {colors, family, size} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import styles from './styles';
import Shadows from '../../../helpers/Shadows';
import CustomTextInput from '../../../components/CustomTextInput';
import {SearchBar} from '../../../components/CustomTextInput';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('screen');

const Tip = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  match,
  onClick,
  tip,
}) => {
  console.log('selected', selected);
  const [check, ischeck] = useState('');
  const [bio, setbio] = useState('');
  const [name, setname] = useState('');
  const {colors} = useTheme();

  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View style={[styles.viewStyle1, {backgroundColor: colors.popup}]}>
        <TouchableOpacity style={styles.tchStyle1} onPress={onCross}>
          <Img
            local={true}
            src={appIcons.cancel}
            style={{width: 14, height: 14}}
            tintColor={colors.text}
          />
        </TouchableOpacity>
        <Text style={[styles.txtStyle1, {color: colors.title}]}>Send Tips</Text>
        <View style={styles.tipsicon}>
          <Img
            local
            src={appIcons.scan}
            style={styles.imgbg1}
            resizeMode="contain"
            tintColor={colors.iconcolor}
          />
        </View>
        <CustomTextInput
          placeholder={'Title'}
          value={name}
          onChangeText={value => setname({name: value})}
          containerStyle={[
            styles.containerStyle,
            {backgroundColor: colors.filterinput, borderColor: colors.line},
          ]}
          // placeholderColor={colors.gray}
        />
        <SearchBar
          placeholder={'Description'}
          placeholderColor={colors.inputtext}
          value={bio}
          onChangeText={value => setbio({bio: value})}
          containerStyle={[
            styles.containerheight,
            {backgroundColor: colors.filterinput, borderColor: colors.line,paddingTop:10,paddingLeft:10},
          ]}
          searchCustom={[styles.searchcontainerheight,{color: colors.title}]}
          numberOfLines={2}
          multiline={true}
        />

        {/* <Text style={styles.txtStyle2}>Payment Done Successfully</Text> */}
        <CustomButton
          onPress={onSubmit}
          title={'Message Her'}
          buttonStyle={styles.btnstyle}
          textStyle={[styles.txtbtn,{color:colors.iconcolor}]}
        />
      </View>
    </CustomModal>
  );
};

export default Tip;
