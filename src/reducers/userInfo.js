import { FETCHING_USER_INFO_FAIL, FETCHING_USER_INFO_SUCCESS, FETCHING_USER_INFO_START } from '../actions/userInfo';

const initialState = {
  userInfo: undefined,
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCHING_USER_INFO_START):
      return ({
        ...state,
      isFetching: true,
      error: ''
      });
    case (FETCHING_USER_INFO_SUCCESS):
      return ({
        ...state,
        isFetching: false,
        userInfo: action.payload
      });
    case (FETCHING_USER_INFO_FAIL):
      return ({
        ...state,
        error: action.payload
      })
    default:
      return state;
  }
};

export default reducer;