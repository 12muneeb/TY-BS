import React, { useState } from 'react';
import { Dimensions, Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors, family, size } from '../utils';
import Shadows from '../helpers/Shadows';
const { width } = Dimensions.get('screen');
import { appIcons } from '../assets/index';
import Img from './Img';
import CustomButton from './CustomButton';


const AcceptList = (props) => {
    const item = props.item;
    const chats = props.item;
    const index = props.item;
    const [status, setStatus] = useState('pending');
    const [accepted, setAccepted] = useState(false);

    const filter = (index) => {
        //   console.log('id' , item?.id)
        const deleteRequest = chats.filter((item) => item?.id !== index)
        // this.setState({ chats: deleteRequest })
    }
    const handleReject = () => {
        setStatus('rejected');
        setAccepted(false);
    };

    const handleAccept = (item) => {
        setAccepted(true);
    };

    if (status === 'rejected') {
        return null;
        // Return null to remove the card from rendering
    }
    return (
        <TouchableOpacity style={styles.mainView} activeOpacity={0.8}>
            <View style={styles.flex}>
                <Img
                    local={true}
                    src={item.image}
                    style={styles.placeholder}
                />
                <View style={styles.viewstyle1}>
                    <Text style={styles.textstyle1}>{item.title}</Text>
                    <Text style={styles.textstyle2}>{item.desc}</Text>
                </View>
            </View>
            <View style={styles.toggle}>
                {!accepted && (
                    <CustomButton
                        onPress={() => handleAccept(item)}
                        title={'Accept'}
                        buttonStyle={styles.accept}
                        textStyle={styles.textStyle}
                    />
                )}
                {!accepted && (
                    <CustomButton
                        onPress={() => filter(item?.id)}
                        title={'Reject'}
                        buttonStyle={[styles.accept, { backgroundColor: colors.secondary }]}
                        textStyle={styles.textStyle}
                    />

                )}
                {accepted && (
                    <CustomButton
                        onPress={() => NavService.navigate('SubscriptionPackages')}
                        title={'Message her'}
                        buttonStyle={styles.accepted}
                        textStyle={styles.textStyle}
                    />
                )}
            </View>
        </TouchableOpacity>
    );

}
export default AcceptList;
const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 0.78,
        borderBottomColor: colors.secondary,
        paddingBottom: 10,
        marginVertical: 5
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    accepted: {
        width: '60%',
        backgroundColor: colors.secondary,
        height: 40,
        alignSelf: 'flex-end'
    },
    placeholder: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
        borderRadius: 50
    },
    viewstyle1: {
        left: 5,

    },
    textstyle1: {
        color: colors.secondary,
        fontFamily: family.RedHatDisplay_ExtraBold,
        fontSize: size.large
    },
    textstyle2: {
        color: colors.black,
        fontFamily: family.RedHatDisplay_Regular,
        fontSize: size.xxsmall
    },
    viewstyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    accept: {
        borderRadius: 25,
        width: '29%',
        height: 40,
        marginHorizontal: 4,
        right: 20
    },
    textStyle: {
        fontSize: size.xsmall
    },
    accepted: {
        width: '60%',
        backgroundColor: colors.secondary,
        height: 40,
        alignSelf: 'flex-end'
    }
})
