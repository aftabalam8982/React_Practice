# <h1>React Note</h1>

# Data sharing

- Props
- Props drilling
- render props
- HOC
- Custom hook

# Data Management

- Context APIs and useContext()
- useState
- Lifting state Up
- useReducer
- Redux
- React-Redux

# Performance Optimization

- useMemo
- useCallback
- Lazy loading

# Router

# API

- Fetch()
- Third party library 'Axios'

=================================================

# Props

- Props is a object that is passed from parent to child.
- when we pass data from parent to child know as props.

# Props Drilling

- when a data pass from parent to child then child to grand child then great grand child called props drilling.
- when we data in nested component is called props drilling.
- we can also pass data form child to parent through callback.

# Render Props

- we create a common component
- pass a function as a props that return component
- we can share single state in multiple component using render props to update the multiple component state.
- we can see example in 'renderProps' folder.

# HOC(Higher Order Function)

- Create a HOC component.
- Wrap the component with HOC
- we can share single state or logic with multiple component but it control their state individually.
- see the example in HOC folder.

# Custom Hooks

- Custom hooks in react allow you to extract and reuse stateful logic across multiple component.
- Convention is to create custom hooks using 'use' keyword.
- first need to create custom hooks function and return reusable function or state.
- see the example in hooks folder.

=====================================================

# Context APIs and useContext

- first need to create context using 'createContext()' in any variable like 'Context', and we can provide default value while creating 'useContext('aftab').
-
- wrap the parent component with '<Context.Provider value={}>' and provide value as props.
- We can consume using the value 2 way,

1.  Using callback function.
    <div>{(value)=><h4>{value}</h4>}</div>
2.  Using 'useContext()' hooks.
    const value = useContext(context).

- see the example in contextAPIs folder.

# useState

- 'useState()' is function to hold and manage state in functional component.
- it's take initial value as argument and return array of length two.
  1. state
  2. function - to manage state.
     const [state, setState] = useState();

# Redux and React-Redux

- Redux is a library which hold and manage application state.

- REDUX ARCHITECTURE:

- App --> Action Creator -->(thunk or saga) --> Reducer --> Store

- ACTION CREATOR: A function which return javascript plain object which contain properties type and payload called Action Creator.
  exp:

  const action = () => {
  return{
  type:'increment',
  payload: data // when required
  }
  }

- THUNK AND SAGA: It is a middleware which allow Action creator to to return a function instead of object to perform async task, and receive 'dispatch' and 'gateState' as parameter in return function.
  exp:

      const action = () => {

  return (dispatch, gateState) => {
  // here we can perform async task and dispatch action one or more times.
  }
  }

- REDUCER : Reducer is pure function which get initial state and action as parameter and then perform task or manage state according to action and return updated state.
  exp:

  const reducer = (state = initialState, action) => {
  switch (action.type) {
  case "increment":
  return { ...state, count: state.count + 1 };
  case "decrement":
  return { ...state, count: state.count - 1 };
  case "reset":
  return initialState;
  default:
  return state;
  }
  };

- STORE : Store is the central piece of Redux architecture is the store, which hold application store.
  exp:

  const store = createStore(reducer)

- createStore is function which take reducer function and return a object which contain,

1.  dispatch function
2.  getState function
3.  subscribe function
4.  replaceReducer function

# React-Redux

- React-Redux is a library which binds react with redux.
- It helps to manage integration between Redux and React.
- Making it easer to connect Redux state and actions to React components.

- CORE PRINCIPLES:

Provider Component --> Connect Function

- PROVIDER COMPONENT: It is a component which use to wrap root of React component and provide Redux Store as Props of the provider component.
- And then able to access Redux store and dispatch action through props injected by 'connect' function.
  exp:

  <Provider store = {store}><App/></Provider>

- CONNECT FUNCTION: It is used to connect React Component to Redux Store.
- It create the higher order component(HOC) and wraps the original component, and inject props containing state and dispatch function form the Redux store.

const Counter = () => {
return (

<div>{counter}</div>

    )

}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

- mapStateToProps: It is function which accept 'current state' as parameter and return props.

- It's also provide hooks,
  1. useSelector() // it's take callback function as a argument and receive state as a parameter in callback.
  2. useDispatch() // return a function and take argument action.

# Redux-Thunk

- It is a library which helps us to return a action as 'function' instead of plain object.
- It's also help us to make a async task.
- once we return a callback function it's send arguments 'dispatch' and 'gateState' accept as parameter.
- exp
- Action:
  export const fetchUserAction = () => {

return async (dispatch, getState) => {
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const userData = await res.json();
console.log(userData);
dispatch({ type: "users", payload: userData });
};
};

- Store:

  const middlewareEnhancer = applyMiddleware(thunk);

  export const store = createStore(reducer, middlewareEnhancer);

- Then call the fetchUserAction from any app component as per requirement.

# useReducer

- useReducer is a hook that use to manage state similar to 'useState'.
- useReducer use to manage complex state or multi sub-value state.
  const initialState = {
  count:0
  }
  const [count, dispatch] = useReducer(reducer,initialState);

- useReducer take arguments 'callback or reducer function' and 'initialState'.
- useReducer return array of length 2.

1. state,
2. dispatch function

- In callback function receive 'state' and 'action' as parameter.
  exp:
  const reducer = (state,action) => {
  switch(action.type){
  case 'increment':
  return {...state, count:state.count+2}
  case 'decrement':
  return {...state, count:state.count-2}
  case 'reset':
  return initialState
  default:
  return state;
  }
  }

# Lifting Up State

- it is concept where manage state in parent component.
- Allow multiple component to share and update same state.
- instead of storing state separately, we just moved up to parent component and share state by props.
  exp

// Parent component
const ParentComponent = () => {
// Define state and state-updating function
const [count, setCount] = useState(0);

return (
<div>
<h2>Count: {count}</h2>
{/_ Child components _/}
<ChildComponent count={count} setCount={setCount} />
<AnotherChildComponent count={count} />
</div>
);
};
