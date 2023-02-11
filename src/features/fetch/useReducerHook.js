const ACTIONS = {
  FETCH: 'fetch',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  weatherList: {},
  loading: false,
  error: null,
};

export { ACTIONS, initialState };

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
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
