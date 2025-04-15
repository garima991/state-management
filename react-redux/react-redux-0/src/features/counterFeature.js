// ----------------- Initial State -----------------

export const initialState = {
  count: 0,
};

// ----------------- Action Types -----------------

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const RESET = "RESET";

// ----------------- Action Creator Functions -----------------

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function increase(payload = null) {
  return {
    type: INCREASE,
    payload,
  };
}
export function decrease(payload = null) {
  return {
    type: DECREASE,
    payload,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}

function counterReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case INCREMENT:
      return { 
        ...state,
        count: state.count + 1 
      };
    case DECREMENT:
      return { 
        ...state, 
        count: state.count - 1 
      };
    case INCREASE:
      return {
         ...state, 
         count: state.count + parseInt(payload) 
        };
    case DECREASE:
      return {
         ...state, 
         count: state.count - parseInt(payload) 
        };
    case RESET:
      return {
         ...state, 
         count: 0 
        };
    default:
      return state;
  }
}

export default counterReducer;


