import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native';
import { colors } from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import { appIcons } from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import Img from '../../../components/Img';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const width = Dimensions.get('screen');

const Match = ({
    isModalVisible = false,
    currentfocus,
    selected = '',
    onToggle = () => { },
    onCross = () => { },
    onSubmit = () => { },
    desc
}) => {
    console.log('selected', selected)
    const [check, ischeck] = useState('')
    const {colors} = useTheme();
    return (
        <CustomModal
            backdropColor={colors.primary}
            visible={isModalVisible}
            togglePopup={onToggle}>
            <View
                style={[styles.viewStyle1,{backgroundColor:colors.popup,borderWidth:1,borderColor:colors.constantcolor}]}>
                <ImageBackground source={appIcons.match} style={styles.imgbg1} resizeMode='contain'>
                    <ImageBackground source={appIcons.thumbbg} style={styles.imgbg1} resizeMode='contain' >

                    </ImageBackground>
                </ImageBackground>
                <TouchableOpacity style={styles.tchStyle1} onPress={onCross}>
                    <Img
                        local={true}
                        src={appIcons.cancel}
                        style={{ width: 14, height: 14, }}
                        tintColor={colors.text}
                    />
                </TouchableOpacity>
                <Text style={[styles.txtStyle1,{color:colors.title}]}>Your Request Send</Text>
                <Text style={[styles.txtStyle2,{color:colors.inputtext}]}>{desc ? desc :'Great Start - if they like you \n back then its a match!'}</Text>

                <CustomButton
                    onPress={onSubmit}
                    title={'Got it'}
                    buttonStyle={[styles.btnstyle,{color:colors.iconcolor}]}
                    textStyle={styles.txtbtn}
                />
            </View>
        </CustomModal>
    );
};

export default Match;
