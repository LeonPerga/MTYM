import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../actions/type";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthentidcated: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
        localStorage.setItem('access',payload.access);
      return {
        ...state,
        isAuthentidcated:true,
        access:payload.access,
        refresh: payload.refresh
      }
    case LOAD_USER_SUCCESS:
        return {
        ...state,
        user: payload
        }
    case LOAD_USER_FAIL:
        return {
            ...state,
            user: null
            }
    case LOGIN_FAIL:
        localStorage.removeItem
      return {
        ...state,
        access:null,
        refresh:null,
        isAuthentidcated:false,
        user:null
      }
    default:
      return;
  }
}
