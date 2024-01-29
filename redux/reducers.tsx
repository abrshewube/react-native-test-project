const initialState = {
  users: [],
};

const rootReducer = (state = initialState, action: any) => {
  console.log('Action:', action); // Log the action for debugging
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
