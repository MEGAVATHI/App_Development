// store.js

import { createStore } from 'redux';

// Define your initial state with empty fields for the form data
const initialState = {
  feedbackData: {
    userName: '',
    dressName: '',
    phoneNumber: '',
    message: '',
  },
};

// Define your reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK':
      // Update the state with the new form data
      return {
        ...state,
        feedbackData: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
