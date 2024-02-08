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


const width = Dimensions.get('screen');

const RequestPopup = ({
    
    isModalVisible = false,
    currentfocus,
    selected = '',
    onToggle = () => { },
    onCross = () => { },
    onSubmit = () => { },
}) => {
    console.log('selected', selected)
    const [check, ischeck] = useState('')
    return (
        <CustomModal
            backdropColor={colors.primary}
            visible={isModalVisible}
            togglePopup={onToggle}>
            <View
                style={styles.viewStyle1}>
                <ImageBackground source={appIcons.match} style={styles.imgbg1} resizeMode='contain'>
                    <ImageBackground source={appIcons.matchbg} style={styles.imgbg1} resizeMode='contain'>

                    </ImageBackground>
                </ImageBackground>
                <TouchableOpacity style={styles.tchStyle1} onPress={onCross}>
                    <Img
                        local={true}
                        src={appIcons.cancel}
                        style={{ width: 14, height: 14, }}
                        tintColor={colors.black}
                    />
                </TouchableOpacity>
                <Text style={styles.txtStyle1}>Your Request Send</Text>
                <Text style={styles.txtStyle2}>Great Start - if they like you{'\n'}back then its a match!</Text>

                <CustomButton
                    onPress={onSubmit}
                    title={'Got it'}
                    buttonStyle={styles.btnstyle}
                    textStyle={styles.txtbtn}
                />
            </View>

        </CustomModal>
    );
};

export default RequestPopup;
