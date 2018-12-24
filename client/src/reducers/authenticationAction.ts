import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './actionType';
import { TOKEN_API_ENPOINT} from '../api/API';
import { LOCAL_STORAGE_TOKEN} from '../util/constant';
import { createToken } from '../api/axiosInterceptor';


// export const signup = (formProps:object, callback:Function) => async (dispatch:Function) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:3090/signup',
//       formProps
//     );

//     dispatch({ type: AUTH_USER, payload: response.data.token });
//     localStorage.setItem('token', response.data.token);
//     callback();
//   } catch (e) {
//     dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
//   }
// };

export const signin = (formProps:object, callback:Function, onErrorCallback: Function ) => async (dispatch:Function) => {
  try {
    const response = await createToken(
      TOKEN_API_ENPOINT,
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.token);
    callback();
  } catch (e) {
    onErrorCallback(); 
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};