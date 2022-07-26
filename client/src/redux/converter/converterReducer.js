import { UPDATE_INPUT, RESET_INPUT, TOGGLE_LOADING, API_SUCCESS, API_FAILURE, CHANGE_FILTER } from './converterConstants';

const initialState = {
  displayInput: '',
  displayOutput: [],
  filterType: 'Decrypt T9',
  isLoading: false,
};

const converterReducer = (state = initialState, action) => {
  switch (action.type){
    case UPDATE_INPUT:
      return {
        ...state,
        displayInput: state.displayInput + action.input,
      };
    case RESET_INPUT:
      return {
        ...state,
        displayInput: '',
        displayOutput: [],
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      };
    case API_SUCCESS:
      return {
        ...state,
        displayOutput: [...action.data],
        isLoading: false,
      };
    case API_FAILURE:
      console.log(`Error calling API: ${action.error}`);
      return {
        ...state,
        isLoading: false,
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filterType: action.input,
      };
    default:
      return state;
  }
}

export default converterReducer;