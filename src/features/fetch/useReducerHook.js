import ACTIONS from './actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.SUCCESS:
      return {
        ...state,
        weatherList: action.payload.data,
        loading: false,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
