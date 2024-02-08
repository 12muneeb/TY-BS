import {LOADER, ERRMSG, SEARCHEDREST} from '../../constants';

const INITIAL_STATE = {
  loader: false,
  errMsg: '',
  searchedRest: [],
  appTheme: 'light',
  indexOfCurrentVisibleView: 0,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...states,
        loader: action.payload,
      };
    case ERRMSG:
      return {
        ...states,
        errMsg: action.payload,
      };
    case 'TOGGLE_APP_THEME':
      return {
        ...states,
        appTheme: action.payload,
      };
    case SEARCHEDREST:
      return {
        ...states,
        searchedRest: action.payload,
      };
      case 'SAVE_INDEX_FOR_CURRENT_VISIBLE_VIEW':
        return {
          ...states,
          indexOfCurrentVisibleView: action.payload,
        };
    default:
      return states;
  }
};
