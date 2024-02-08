import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import ImagePicker from '../../../components/ImagePicker';
import { colors, size, family } from '../../../utils';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import { Image as ImageCompressor } from 'react-native-compressor';
import Img from '../../../components/Img';
import { appIcons } from '../../../assets';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import PickerImageComponent from '../../../components/PickerImageComponent';
import DocumentPicker from 'react-native-document-picker';
import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const UploadCard = () => {
  const [galleryDocuments, setGalleryDocuments] = useState([]);
  const [documentCount, setDocumentCount] = useState(1);
const {colors} = useTheme()
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      const documentObject = {
        uri: result.uri,
        name: result.name || `IMG${documentCount}`,
        id: documentCount,
      };

      setGalleryDocuments((prevGalleryDocuments) => [
        ...prevGalleryDocuments,
        documentObject,
      ]);
      setDocumentCount((prevDocumentCount) => prevDocumentCount + 1);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
      } else {
        // Handle other errors
      }
    }
  };

  const removeDocument = (documentId) => {
    setGalleryDocuments((prevGalleryDocuments) =>
      prevGalleryDocuments.filter((document) => document.id !== documentId)
    );
  };

  return (
    <>
      {galleryDocuments?.length > 0 ? (
        <ScrollView style={styles.mainCont} horizontal={true} showsHorizontalScrollIndicator={false}>
          {galleryDocuments?.map((document, index) => {
            return (
              <View key={index + 1}>
                <TouchableOpacity activeOpacity={0.9}>
                  <View style={[styles.documentContainer,{backgroundColor:colors.button}]}>
                    <Text style={styles.documentText}>{document.name}</Text>
                    <TouchableOpacity
                      style={styles.closeIconCont}
                      onPress={() => removeDocument(document.id)}
                    >
                     <Img local src={appIcons.cross} resizeMode={'contain'} style={{width:8,height:8}}/>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      ) : null}
      <View>
        <TouchableOpacity style={styles.imageBtn} onPress={pickDocument}>
          <ImageBackground style={styles.propertyImage} resizeMode="cover">
            <Img
              local={true}
              src={appIcons.up}
              style={styles.up}
              tintColor={'#FF2020'}
            />
            <Text
              style={[
                styles.carettext,
                { color:'#FF2020', textAlign: 'center' },
              ]}
            >
              Identification Government Card {'\n'} or Business Sales License
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    width: '100%',
    marginTop: 18,
  },
  documentContainer: {
    width: 85,
    height: 45,
    borderRadius: 30,
    // backgroundColor: colors.lightpink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  documentText: {
    fontSize: 16,
  },
  closeIconCont: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    color: '#000',
    fontSize: size.xxtiny,
  },
  imageBtn: {
    width: 340,
    height: 130,
    borderColor: colors.red,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.lightYellow,
    overflow: 'hidden',
    marginTop: 18,
  },
  propertyImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  up: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: colors.red,
  },
  carettext: {
    fontSize: size.medium,
    fontFamily: family.RedHatDisplay_Medium,
    marginTop: 5,
  },
});

export default UploadCard;
