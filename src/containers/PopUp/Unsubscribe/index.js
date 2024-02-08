import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {colors} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput, {SearchBar} from '../../../components/CustomTextInput';
import Img from '../../../components/Img';
import styles from './styles';
import {Reason} from '../../../utils/dummyData';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Unsubscribe = ({
  isModalVisible = false,
  title,
  desc,
  bio,
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  onChangeText,
  alertText = null,
}) => {
  const [description, setDescription] = useState('');
  const [checked, setchecked] = useState(false);
  const {colors} = useTheme();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);
  const handleSubmit = () => {
    setchecked(false);
    onSubmit();
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{marginBottom: Platform.OS === 'ios' ? width / 4 : null}}>
        <View
          style={[
            styles.viewStyle1,
            {
              backgroundColor: colors.popup,
              borderWidth: 1,
              borderColor: colors.constantcolor,
            },
          ]}>
          <Text style={[styles.txtStyle1, {color: colors.title}]}>
            {title ? title : 'Report'}
          </Text>
          <TouchableOpacity onPress={onCross} style={styles.tchStyle1}>
            <Img
              local={true}
              src={appIcons.cancel}
              style={styles.cancel}
              tintColor={colors.text}
            />
          </TouchableOpacity>
          {Reason.map((item, index) => {
            return (
              <View style={styles.viewStyle2}>
                <TouchableOpacity onPress={() => setchecked(item.id)}>
                  {checked == item.id ? (
                    <Img
                      local={true}
                      src={appIcons.notempty}
                      style={styles.img}
                     tintColor={colors.border}
                    />
                  ) : (
                    <View style={[styles.img, styles.empty,{borderColor:colors.border}]}></View>
                  )}
                </TouchableOpacity>
                <Text style={[styles.txtStyle3, {color: colors.inputtext}]}>
                  {item?.title}
                </Text>
              </View>
            );
          })}
          {checked == 5 ? (
            <>
              <SearchBar
                placeholder={desc ? desc : 'Whats on your mind, Robert?'}
                placeholderColor={colors.inputtext}
                value={bio}
                onChangeText={onChangeText}
                containerStyle={[
                  styles.containerheight,
                  {
                    backgroundColor: colors.filterinput,
                    borderColor: colors.line,
                  },
                ]}
                searchCustom={[
                  styles.searchcontainerheight,
                  {color: colors.title},
                ]}
                numberOfLines={2}
                multiline={true}
              />
              <Text style={{color: 'red'}}>{alertText}</Text>
            </>
          ) : (
            ''
          )}
          {checked && (
            <>
              <CustomButton
                onPress={handleSubmit}
                title={'Submit'}
                buttonStyle={styles.btnstyle}
                textStyle={{color: colors.iconcolor}}
              />
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
};

export default Unsubscribe;
