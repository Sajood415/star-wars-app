const initialState = {
    category: null,
    subItems: [],
    loading: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORY':
        return { ...state, category: action.payload };
      case 'SET_SUB_ITEMS':
        return { ...state, subItems: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  