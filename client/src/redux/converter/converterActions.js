import axios from 'axios';
import { 
  UPDATE_INPUT, RESET_INPUT, TOGGLE_LOADING,
  API_SUCCESS, API_FAILURE, CHANGE_FILTER
} from './converterConstants';

export const updateInput = payload => ({
  type: UPDATE_INPUT,
  input: payload.input,
});

export const resetInput = () => ({
  type: RESET_INPUT,
});

export const toggleLoading = payload => ({
  type: TOGGLE_LOADING,
  loading: payload.loading,
});

export const apiSuccess = payload => ({
  type: API_SUCCESS,
  data: payload,
});

export const apiFailure = payload => ({
  type: API_FAILURE,
  error: payload,
});

export const changeFilter = payload => ({
  type: CHANGE_FILTER,
  input: payload.input,
});

export const callApi = payload => (dispatch) => {
  dispatch(toggleLoading({ loading: true }));
  axios.get(`http://localhost:5005/api/${payload.input}`)
    .then(response => dispatch(apiSuccess(response.data)))
    .catch(error => dispatch(apiFailure(error)));
};