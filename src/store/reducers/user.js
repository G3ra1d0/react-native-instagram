import {USER_LOGIN, USER_LOGOUT} from '../actions/actionsType';

const initialState = {
  name: null,
  email: null,
  photoUrl: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photoUrl: action.payload.photoUrl,
      };
    case USER_LOGOUT:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photoUrl: action.payload.photoUrl,
      };
    default:
      return state;
  }
};

export default reducer;
