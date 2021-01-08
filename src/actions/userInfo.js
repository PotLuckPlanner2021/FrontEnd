import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_USER_INFO_START = 'FETCHING_USER_INFO_START';
export const FETCHING_USER_INFO_SUCCESS = 'FETCHING_USER_INFO_SUCCESS';
export const FETCHING_USER_INFO_FAIL = 'FETCHING_USER_INFO_FAIL';

export const getUserInfo = () => {
  return (dispatch => {

    dispatch({type: FETCHING_USER_INFO_START});

    axiosWithAuth() 
      .get('/users/userinfo')
      .then(res => {
        dispatch({type:FETCHING_USER_INFO_SUCCESS, payload: res.data});
        console.log('dispatch success userinfo', res.data)
      })
      .catch(err => {
        dispatch({type:FETCHING_USER_INFO_FAIL, payload: err.response})
        console.error('OMG NOO', err.response);
      })

  })
}

