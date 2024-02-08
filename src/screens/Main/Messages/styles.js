import { StyleSheet } from 'react-native';
import { colors, HP, WP, size, family } from '../../../utils';

const makeStyles = theme => {
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
 
  containerStyle: {
    borderRadius: 8,
    width: '100%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: 55
  },
 flat:{
  flexGrow: 1,
  marginTop: 15,
},
emailstyle:{tintColor:'#B47E00'}
 
 
 
  
  
  
});

}
export default makeStyles
