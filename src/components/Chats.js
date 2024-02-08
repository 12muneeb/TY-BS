import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ProfileImage from "./ProfileImage";
import { colors, family, size } from "../utils";

const { width } = Dimensions.get('window');

const Chats = (props) => {

    const item = props.item;
    const isMine = item.isMine ? true : false;

    return (
        <View
            style={{
                width: '100%',
                marginBottom: 15,
                marginTop: 5,
                alignItems: "flex-end",
                flexDirection: isMine ? 'row-reverse' : 'row',
            }}>
            <ProfileImage
                name={'Amelia'}
                size={20}
                innerAsset
                imageUri={item.image}
                style={{
                    height: 50,
                    width: 50,
                    resizeMode: "contain",
                    borderRadius: 50,
                    backgroundColor:'red'
                }}
                placeholderstyle={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }}
            />
            <View
                style={{
                    alignItems: isMine ? 'flex-start' : 'flex-end',
                    top: 25,
                }}>
                <View
                    style={{
                        backgroundColor: isMine ? colors.secondary : colors.primary,
                        width: width - 120,
                        borderTopLeftRadius: isMine ? 50 : 0,
                        borderTopRightRadius: isMine ? 0 : 50,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        paddingHorizontal: 20,
                        paddingVertical: 25,

                    }}>
                    {item?.dataImage ? (
                        <Img
                            src={item?.dataImage}
                            resizeMode={'contain'}
                            style={{
                                width: 200,
                                height: 150,
                                backgroundColor: theme.grey,
                                borderRadius: 15,
                            }}
                        />
                    ) : (
                        <Text style={{ color: colors.white, fontSize: size.small, fontFamily: family.RedHatDisplay_Medium }}>
                            {item.message}
                        </Text>
                    )}
                </View>
                <View style={{
                    width: width - 160,
                    flexDirection: isMine ? "row-reverse" : "row",
                    justifyContent: "space-between",
                }}>

                    <View>
                        <Text
                            text={isMine ? "You" : item.username}
                            style={styles.username}
                        />
                    </View>
                    <View>
                        {/* <Text
                            style={{
                                color: colors.darkGray,
                                fontSize: size.small,
                                fontFamily: family.RedHatDisplay_Medium,
                                marginVertical: 6
                            }}>
                            {item?.createdAt}
                        </Text> */}
                    </View>
                </View>

            </View>
        </View>
    );
};

export default Chats;

const styles = StyleSheet.create({
    username: {
        color: colors.black,
        fontSize: size.small,
        fontFamily: family.RedHatDisplay_Medium,
        marginVertical: 5
    },
});