import { API_SERVER_ERROR, API_USER_ERROR } from './actionType';
import { SERVER_ERROR, USER_ERROR} from '../util/constant';


const INITIAL_STATE = {
  type:''  ,
  message: ''
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case API_SERVER_ERROR:
      return { ...state, type: SERVER_ERROR };
    case API_USER_ERROR:
      return { ...state, type: USER_ERROR };
    default:
      return state;
  }
}
 
