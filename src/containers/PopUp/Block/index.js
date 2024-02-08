import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { colors } from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import { appIcons } from '../../../assets';
import Img from '../../../components/Img';
import styles from './styles';

const Match = ({
    isModalVisible = false,
    currentfocus,
    onToggle = () => { },
    onCross = () => { },
    onSubmit = () => { },
    onReport = () => { },
}) => {

    return (
        <CustomModal
            backdropColor={colors.primary}
            visible={isModalVisible}
            togglePopup={onToggle}
            style={{
                justifyContent: 'flex-end',
                width: '100%',
                alignSelf: 'center'
            }}>
            <View
                style={styles.viewStyle1}>
                <TouchableOpacity style={styles.tchStyle1}
                    onPress={onCross}
                >
                    <Img
                        local={true}
                        src={appIcons.cancel}
                        style={{ width: 20, height: 20 }}
                        tintColor={colors.secondary}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.tchStyle2}
                    onPress={onSubmit}>
                    <Text style={styles.txtStyle1}>Block Amelia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onReport}
                    activeOpacity={0.8} style={{ paddingTop: 10 }}>
                    <Text style={styles.txtStyle2}>Report Amelia</Text>
                </TouchableOpacity>
            </View>
        </CustomModal>
    );
};

export default Match;
