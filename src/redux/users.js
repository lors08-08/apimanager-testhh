const initialState = {
  loading: false,
  items: [],
  itemId: 1,
};

function users(state = initialState, action) {
  switch (action.type) {
    case "users/load/start":
      return {
        ...state,
        loading: true,
      };
    case "users/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "users/add/start":
      return {
        ...state,
        loading: true,
      };
    case "users/add/succeed":
      return {
        ...state,
        loading: false,
        itemId: action.payload.id,
        items: [...state.items, action.payload],
      };
    case "users/switch":
      return {
        ...state,
        itemId: action.payload,
      };
    default:
      return state;
  }
}

export default users;
