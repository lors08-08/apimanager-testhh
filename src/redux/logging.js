const initialState = {
  id: null,
  login: null,
  password: null,
  token: localStorage.getItem("auth-token"),

  authorizing: false,
};

function logging(state = initialState, action) {
  switch (action.type) {
    case "admin/login/start":
      return {
        ...state,
        authorizing: true,
      };
    case "admin/login/succeed":
      return {
        ...state,
        ...action.payload[0],
        authorizing: false,
      };
    default:
      return state;
  }
}

export default logging;
