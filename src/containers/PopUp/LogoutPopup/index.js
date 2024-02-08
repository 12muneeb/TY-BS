import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import CustomModal from '../../../components/CustomModal';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import {appIcons} from '../../../assets';
import styles from './styles';

const width = Dimensions.get('screen');

const LogoutPopup = ({
  isModalVisible = false,
  currentfocus,
  onToggle = () => {},
  onCross = () => {},
  onCancel = () => {},
  title,
  description,
  onSubmit = () => {},
  dlt,
}) => {
  const {colors} = useTheme();
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View
        style={[
          styles.viewStyle1,
          {
            backgroundColor: colors?.popup,
            borderWidth: 1,
            borderColor: colors?.constantcolor,
          },
        ]}>
        <Text style={[styles.txtStyle1, {color: colors?.title}]}>{title}</Text>
        <TouchableOpacity style={styles.tchStyle1} onPress={onCross}>
          <Img
            local={true}
            src={appIcons.cancel}
            style={{width: 14, height: 14}}
            tintColor={colors?.text}
          />
        </TouchableOpacity>

        <Text style={[styles.txtStyle2, {color: colors?.inputtext}]}>
          {description}
        </Text>
        <View style={styles.viewStyle2}>
          <CustomButton
            title={'Cancel'}
            buttonStyle={[
              styles.btnstyle,
              {backgroundColor: colors?.backgroundborder},
            ]}
            textStyle={{color: colors?.filterinput}}
            onPress={onCancel}
          />
          <CustomButton
            title={dlt ? 'Delete' : 'Yes'}
            buttonStyle={[
              styles.btnstyle,
              {marginLeft: 10, backgroundColor: '#FA2020'},
            ]}
            textStyle={{color: colors.iconcolor}}
            onPress={onSubmit}
          />
        </View>
      </View>
    </CustomModal>
  );
};

export default LogoutPopup;
