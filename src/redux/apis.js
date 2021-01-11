const initialState = {
  loading: false,
  searchValue: "",
  items: [],
  currentItem: {},
};

function apis(state = initialState, action) {
  switch (action.type) {
    case "apis/load/start":
      return {
        ...state,
        loading: true,
      };
    case "apis/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "apis/select/start":
      return {
        ...state,
        loading: true,
      };
    case "apis/select/succeed":
      return {
        ...state,
        currentItem: action.payload,
        loading: false,
      };
    case "apis/setSearchValue": {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
      return state;
  }
}

export default apis;
