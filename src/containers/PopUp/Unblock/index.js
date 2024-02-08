import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {colors} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('screen');

const Unblock = ({
  isModalVisible = false,
  currentfocus,
  title,
  description,
  onCross = () => {},
  onCancel = () => {},
  onToggle = () => {},
  onSubmit = () => {},
  block,
}) => {
  const {colors} = useTheme();
  return (
    <CustomModal
      backdropOpacity={0.3}
      visible={isModalVisible}
      togglePopup={onToggle}>
      <View
        style={[
          styles.viewStyle1,
          {
            backgroundColor: colors.popup,
            borderWidth: 1,
            borderColor: colors.constantcolor,
          },
        ]}>
        <Text style={[styles.txtStyle1, {color: colors.title}]}>{title}</Text>
        <TouchableOpacity style={styles.tchStyle1} onPress={onCross}>
          <Img
            local={true}
            src={appIcons.cancel}
            style={{width: 14, height: 14}}
            tintColor={colors.text}
          />
        </TouchableOpacity>

        <Text style={[styles.txtStyle2, {color: colors.inputtext}]}>
          {description}
        </Text>
        {block ? (
          <View style={styles.viewStyle2}>
            <CustomButton
              title={'Cancel'}
              buttonStyle={[styles.btnstyle,{backgroundColor:colors.backgroundborder}]}
              textStyle={{color:colors.filterinput}}
              onPress={onCancel}
            />
            <CustomButton
              title={'Block'}
              buttonStyle={[
                styles.btnstyle,
                {marginLeft: 10, backgroundColor: '#FA2020'},

              ]}
              onPress={onSubmit}
            />
          </View>
        ) : (
          <View style={styles.viewStyle2}>
            <CustomButton
              title={'Cancel'}
              buttonStyle={[styles.btnstyle, {backgroundColor: colors.backgroundborder}]}
              textStyle={{color:colors.filterinput}}
              onPress={onCancel}
            />
            <CustomButton
              title={'Yes'}
              buttonStyle={[
                styles.btnstyle,
                {marginLeft: 10, backgroundColor: '#FA2020'},
              ]}
              textStyle={{color: colors.iconcolor}}
              onPress={onSubmit}
            />
          </View>
        )}
      </View>
    </CustomModal>
  );
};

export default Unblock;
