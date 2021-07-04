// introdução ao redux - exercicios freecodecamp

// Define a function named actionCreator() that returns the action object when called.

const action = {
    type: 'LOGIN',
};
  
function actionCreator() {
    return action;
}

// The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

const store = Redux.createStore(
    (state = {login: false}) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

store.dispatch(loginAction());

// The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.

const defaultState = {
    login: false
};
  
const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { login: true };
      default: 
        return state;
    }
};
  
const store = Redux.createStore(reducer);
  
const loginAction = () => {
    return {
      type: 'LOGIN'
    }
};

// The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state. 

const defaultState = {
    authenticated: false
};
  
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'LOGIN': 
        return {authenticated: true};
      case 'LOGOUT':
        return {authenticated: false};
      default: 
        return state;
    }
};
  
const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
};
  
const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
};