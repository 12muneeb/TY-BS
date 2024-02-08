import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import {colors, family, size} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('screen');

const BottomPopup = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  EditFeedback,
  DeleteFeedback,
  editbtn,
  deletebtn,
  unmatcheduser,
  block,
  report,
  User,
  Blockbtn,
  Reportbtn,
  post
}) => {
  const {colors} = useTheme();
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View style={styles.mainContainer}>
        <View
          style={[
            styles.modalChild,
            {
              backgroundColor: colors.popup,
              borderTopColor: colors.constantcolor,
              borderWidth: 1,
            },
          ]}>
          <TouchableOpacity style={{position:'absolute',right:20,top:8,padding:8}}
            onPress={onCross}
            >
           <Img local src={appIcons.cross} style={{width:16,height:16}} tintColor={colors.text}/>
            </TouchableOpacity>

          {editbtn && (
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={EditFeedback}>
              <Img
                local
                src={appIcons.pen}
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
                tintColor={'#FF2020'}
              />
              <Text
                style={{
                  fontSize: size.large,
                  fontFamily: family.RedHatDisplay_Regular,
                  left: 10,
                  color:colors.title
                }}>
       {       post ? 'Edit Post' : 'Edit Feedback'}
              </Text>
            </TouchableOpacity>
          )}
          {deletebtn && (
            
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={DeleteFeedback}>
              <Img
                local
                src={appIcons.delete}
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
                tintColor={colors.red}
              />
              <Text
                style={{
                  fontSize: size.large,
                  fontFamily: family.RedHatDisplay_Regular,
                  left: 10,
                  color:colors.title
                }}>
               {       post ? 'Delete Post' : 'Delete Feedback'}
              </Text>
            </TouchableOpacity>
          )}
          {unmatcheduser && (
            <View style={styles.buttonWrapper} >
              <TouchableOpacity onPress={User}>
              <Text
                style={{
                  fontSize: size.large,
                  fontFamily: family.RedHatDisplay_Regular,
                  left: 10,
                  color:colors.title
                }}>
                Unmatched User
              </Text>
              </TouchableOpacity>
            </View>
          )}
          {block && (
            <View style={styles.buttonWrapper} >
              <TouchableOpacity onPress={Blockbtn}>
              <Text
                style={{
                  fontSize: size.large,
                  fontFamily: family.RedHatDisplay_Regular,
                  left: 10,
                  color:colors.title
                }}>
                Block Amelia
              </Text>
              </TouchableOpacity>
            </View>
          )}
          {report && (
            <View style={styles.buttonWrapper} >
              <TouchableOpacity onPress={Reportbtn}>
              <Text
                style={{
                  fontSize: size.large,
                  fontFamily: family.RedHatDisplay_Regular,
                  left: 10,
                  color:colors.title
                }}>
                Report Amelia
              </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </CustomModal>
  );
};

export default BottomPopup;
