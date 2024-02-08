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
import CustomTextInput from '../../../components/CustomTextInput';
import {SearchBar} from '../../../components/CustomTextInput';
import StarRating from 'react-native-star-rating';
import {useTheme} from '@react-navigation/native';
import { useSelector } from 'react-redux';
const width = Dimensions.get('screen');

const FeedbackPopup = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  match,
  onClick,
  tip,
  title,
  starCount,
  onStarRatingPress
}) => {
  console.log('selected', selected);
  const [check, ischeck] = useState('');
  const [bio, setbio] = useState('');
  const [name, setname] = useState('');
  // const [starCount, setStarCount] = useState(0);
  const {colors} = useTheme();
  const lightTheme = useSelector(state => state?.appReducer?.appTheme);

  // const onStarRatingPress = rating => {
  //   setStarCount(rating);
  // };

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
        <Text style={[styles.txtStyle1, {color: colors.title}]}>Feedback</Text>
        <Text style={[styles.txtStyle2, {color: colors.title}]}>
          Rate Your Experience
        </Text>
        <View style={{width: '50%', alignSelf: 'center', marginTop: 10}}>
          <StarRating
            disabled={false}
            fullStar={appIcons.star}
            emptyStar={lightTheme == 'light' ? appIcons.starempty : appIcons.darkstar}
            halfStar={lightTheme == 'light' ? appIcons.starempty : appIcons.darkstar}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => onStarRatingPress(rating)}
            halfStarEnabled={true}
            starSize={25}
          />
        </View>

        <SearchBar
          placeholder={'Write a review...'}
          value={bio}
          onChangeText={value => setbio({bio: value})}
          containerStyle={[
            styles.containerheight,
            {backgroundColor: colors.filterinput, borderColor: colors.line},
          ]}
          searchCustom={[styles.searchcontainerheight, {color: colors.title}]}
          numberOfLines={2}
          multiline={true}
        />

        <CustomButton
          onPress={onSubmit}
          title={title}
          buttonStyle={[styles.btnstyle]}
          textStyle={[styles.txtbtn, {color: colors.iconcolor}]}
        />
      </View>
    </CustomModal>
  );
};

export default FeedbackPopup;
