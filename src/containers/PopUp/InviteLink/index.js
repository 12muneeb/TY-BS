import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  FlatList,
  Platform,
} from 'react-native';
import {colors, family, size} from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import styles from './styles';
import {Link} from '../../../utils/dummyData';
import {useTheme} from '@react-navigation/native';
const width = Dimensions.get('screen');

const InviteLink = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
}) => {
  const {colors} = useTheme();
  const [check, ischeck] = useState('');
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View
        style={[
          styles.viewStyle1,
          {
            backgroundColor: colors.popup,
            borderWidth: 1,
            borderColor: colors.constantcolor,
          },
        ]}>
        <TouchableOpacity style={styles.tchStyle1} onPress={onCross}>
          <Img
            local={true}
            src={appIcons.cancel}
            style={{width: 14, height: 14}}
            tintColor={colors.text}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.txtStyle1,
            {color: colors.title, fontFamily: family.RedHatDisplay_Bold},
          ]}>
          Share To
        </Text>
        <View style={styles.container}>
          {/* <TouchableOpacity style={styles.fb}>
            <Img
              local
              src={appIcons.facebook}
              resizeMode={'contain'}
              style={styles.fbicon}
              tintColor={'#1674EA'}
            />
            <Text style={styles.fbtxt}>Facebook</Text>
          </TouchableOpacity> */}
          <View style={{width: '100%'}}>
            <FlatList
              data={Link}
              scrollEnabled={false}
              horizontal
              renderItem={({item}) => (
                <>
                  {item.id == 1 ? (
                    <TouchableOpacity
                      style={[styles.icncontainer, {flex: 1, marginRight: 15}]}>
                      <Img
                        local
                        src={item.image}
                        resizeMode={'contain'}
                        style={styles.img}
                        tintColor={item?.tintColor}
                      />
                      <Text style={[styles.txt, {color: item.titlecolor}]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={[
                        styles.icncontainer,
                        {marginHorizontal: Platform.OS == 'ios' ? 15 : 18},
                      ]}>
                      <Img
                        local
                        src={item.image}
                        resizeMode={'contain'}
                        style={styles.img}
                        tintColor={item?.tintColor}
                      />
                      <Text style={[styles.txt, {color: item.titlecolor}]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            />
          </View>
        </View>
        <Text
          style={[
            styles.txtStyle2,
            {color: colors.linkcolors, fontFamily: family.RedHatDisplay_Bold},
          ]}>
          Share Link
        </Text>
        <View style={[styles.input, {backgroundColor: colors.modallink}]}>
          <Text
            style={{
              color: colors.iconcolor,
              fontFamily: family.RedHatDisplay_SemiBold,
            }}>
            Lorem ipsum link
          </Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 10, padding: 5}}>
            <Img
              local
              src={appIcons.copy}
              style={{width: 20, height: 20}}
              resizeMode={'contain'}
              tintColor={colors.iconcolor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default InviteLink;
