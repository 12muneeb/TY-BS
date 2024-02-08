export function toggleAppTheme(payload) {
  return {
    type: 'TOGGLE_APP_THEME',
    payload,
  };
}
export function saveIndexForCurrentVisibleView(viewIndex) {
  return {
    type: 'SAVE_INDEX_FOR_CURRENT_VISIBLE_VIEW',
    payload: viewIndex,
  };
}