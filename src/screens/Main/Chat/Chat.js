import React, {Component} from 'react';
import {
  FlatList,
  Platform,
  UIManager,
  View,
  TextInput,
  LayoutAnimation,
  TouchableOpacity,
  Text,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {appIcons, appImages} from '../../../assets';
import Chats from '../../../components/Chats';
import {colors} from '../../../utils';
import Img from '../../../components/Img';
import Block from '../../../containers/PopUp/Block/index';
import Unblock from '../../../containers/PopUp/Unblock';
import NavService from '../../../helpers/NavService';
import ImagePicker from '../../../components/ImagePicker';
import Unsubscribe from '../../../containers/PopUp/Unsubscribe';
import makeStyles from './styles';
import {useTheme} from '@react-navigation/native';
import ChatComponent from '../../../components/ChatComponent';
import MicroChat from '../../../components/MicroChat';
import {ChatData} from '../../../utils/dummyData';
import BottomPopup from '../../../containers/PopUp/BottomPopup';
import CustomButton from '../../../components/CustomButton';
import {connect} from 'react-redux';
import Shadows from '../../../helpers/Shadows';
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isModalVisible1: false,
      isModalVisibleReport: false,
      setImageData: null,
      message: '',
      messages: [...ChatData],
      matchProfile: false,
      uploadImg: null,
      bio: '',
      alertt: null,
      checked:false
    };
  }
  sendMessage = () => {
    const {message, messages} = this.state;
    if (message.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        message: message,
        created_at: new Date(),

      };

      this.setState({
        messages: [...messages, newMessage],
        message: '',
      });
    }
  };

  updateImageInGallery = (path, mime) => {
    this.setState({image: path});
  };
  Userbtn = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      NavService.navigate('UserAppStack');
    }, 850);
  };
  Blockbtn = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible: true});
    }, 850);
  };
  Reportbtn = () => {
    this.setState({matchProfile: false});
    setTimeout(() => {
      this.setState({isModalVisible1: true});
    }, 850);
  };

  render() {
    const {theme} = this.props;
    const styles = makeStyles(theme) || [];
    const {
      messages,
      matchProfile,
      isModalVisible,
      isModalVisible1,
      uploadImg,
      bio,
      alertt,
    } = this.state;
    console.log('uploadImg', uploadImg);
    const {route} = this.props.route.params;
    let messageInput = React.createRef(null);
    let message = React.createRef('');

    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }

    const sendNewMessage = async (type, image) => {
      if (message.current.length > 0 || image) {
        const currentMessages = [...messages];
        currentMessages.push({
          message: message.current,
          createdAt: '12:00 PM',
          isMine: true,
          // image: appImages.user5,
          dataImage: image,
        });
        this.setState({messages: currentMessages});
        message.current = '';
        messageInput.clear();
        LayoutAnimation.linear();
      } else {
        Toast.show({
          text1: 'Enter message',
          type: 'error',
          visibilityTime: 3000,
        });
      }
    };
    const SendImage = async (path, mime) => {
      console?.log('jkkjk', path);
      this.setState({setImageData: path});
      sendNewMessage('file', path);
      this.setState({uploadImg: path});
    };
    const {screenName} = this.props.route.params;
    return (
      <AppBackground
        title={'Amelia'}
        nobottom
        back
        dots={true}
       
        onSubmit={() => this.setState({matchProfile: true})}>
        <View style={styles.mainCont}>
          <ScrollView
            style={{marginBottom: 80, flex: 1}}
            showsVerticalScrollIndicator={false}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={ChatData}
              renderItem={({item}) => <ChatComponent item={item} />}
            />
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={messages}
              renderItem={({item}) => <MicroChat item={item} />}
            />

            <CustomButton
              // onPress={() => handleAccept(item)}
              title={'Ice Breaker'}
              buttonStyle={[styles.accept, {backgroundColor: '#FF2020'}]}
              textStyle={[styles.textStyle, {color: theme.iconcolor}]}
            />
            <CustomButton
              // onPress={() => handleAccept(item)}
              title={'Conversation Starter'}
              buttonStyle={[styles.accept, {backgroundColor: '#B47E00'}]}
              textStyle={[styles.textStyle, {color: theme.iconcolor}]}
            />
            <CustomButton
              // onPress={() => handleAccept(item)}
              title={'Topic Suggestion'}
              buttonStyle={[styles.accept, {backgroundColor: theme.msgbutton}]}
              textStyle={[styles.textStyle, {color: theme.title}]}
            />
          </ScrollView>

          <View style={[styles.flexRow, styles.messageView]}>
            <TextInput
              ref={input => {
                messageInput = input;
              }}
              style={styles.textInput}
              placeholder="Type message...."
              placeholderTextColor={theme.iconcolor}
              value={message}
              onChangeText={text => {
                console.log(text);
                message.current = text;
              }}
            />
            <View style={styles.row}>
              <ImagePicker
                onImageChange={(path, mime, type) => {
                  SendImage(path, mime, type);
                }}>
                <View
                  style={[
                    styles.sendCont,
                    {backgroundColor: theme.backgroundborder},
                  ]}>
                  <Img
                    local
                    src={appIcons.gallery}
                    style={styles.icon1}
                    resizeMode={'contain'}
                    tintColor={colors.white}
                  />
                </View>
              </ImagePicker>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  sendNewMessage('text');
                  Keyboard?.dismiss();
                }}
                style={styles.msg}>
                <Img
                  local
                  src={appIcons.send}
                  style={styles.icon}
                  resizeMode={'contain'}
                  tintColor={theme.iconcolor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BottomPopup
          unmatcheduser
          block
          report
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
          User={this.Userbtn}
          Blockbtn={this.Blockbtn}
          Reportbtn={this.Reportbtn}
        />
        <Unblock
          block
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Block!'}
          description={'Are you sure you want to block \n this person'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => NavService.goBack()}
        />
        <Unsubscribe
        desc={'Description'}
          alertText={alertt}
          bio={bio}
    
          onChangeText={value => this?.setState({bio: value})}
          isModalVisible={isModalVisible1}
          title={'Report'}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible1: false})}
          onCross={() => this.setState({isModalVisible1: false})}
          onSubmit={() => {
            // if (bio?.length <= 0 ) {
            //   this?.setState({ alertt: 'Please fill this input' });
            //   setTimeout(() => {
            //     this?.setState({ alertt: null });
            //   }, 3000);
            // } else {
              this?.setState({ isModalVisible1: false });
            // }
          }}
        />
      </AppBackground>
    );
  }
}
export default connect()(function (props) {
  const {colors} = useTheme();

  return <Chat {...props} theme={colors} />;
});
