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
<p>Count: {count}</p>
{/_ Child components _/}
<ChildComponent count={count} setCount={setCount} />
<AnotherChildComponent count={count} />
</div>
);
};

# Redux-Toolkit

- It's come to simplify redux setup.
- Immutability helper: it uses 'immer' library to write reducer logic more concise and readable manner.
- It is almost same as redux except action and reducer.
- we don't have to create 'action creator' and 'reducer' manually.

  const userSlice = createSlice({name, initialState, reducers, extraReducers for middleware})

  return userSlice = {action, reducer, getSelectors, caseReducers, getInitialState, ...}

  exp of simple state management:
  const counterSlice = createSlice({
  name: "counter",
  initialState: {
  value: 0,
  },
  reducers: {
  increment(state) {
  state.value += 1;
  },
  decrement(state) {
  state.value -= 1;
  },
  },
  });

export const { reducer, actions } = counterSlice;

- createSlice take argument a object and return object which contain 'action' 'reducer' and getInitialState etc...

exp of async operation by redux toolkit, redux toolkit gives us redux middleware by defaults.

exp: const userSlice = createSlice({
name: "user",
initialState: {
isData: null,
isLoading: false,
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchUserData.pending, (state) => {
state.isLoading = true;
state.error = null;
})
.addCase(fetchUserData.fulfilled, (state, action) => {
state.isData = action.payload;
state.isLoading = false;
})
.addCase(fetchUserData.rejected, (state) => {
state.error = true;
});
},
});
console.log(userSlice);
export default userSlice.reducer;

exp of store: const store = configureStore({
reducer: {
counter: reducer,
user: userReducer,
},
});
export default store;

# REACT-ROUTER-DOM

- it's fully feature client and server side routing library for react.

  1. Configuring Routes:

  <BrowserRouter><App/></BrowserRouter>

    <Routes>
      <Route path="/" element={<Directory/>}></Route>
      <Route path="home" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
    </Routes>

2.  Link:

    - Link directly add anchor tag in real dom.

        <Nav>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        </Nav>

    - to: This is the most important prop of the Link component. It specifies the target URL to navigate to when the link is clicked. It can be a string representing the path or an object representing the location.

      <Link to="/about">About</Link>

    - replace: When set to true, this prop replaces the current entry in the history stack with the new URL instead of adding a new entry. This can be useful for preventing the user from going back to the previous page after navigating.
    - when we click back button of browser, it'll will not go to the previous page, it's move to the first navigate.

      <Link to="/about" replace={true}>About</Link>

    - state: This prop allows you to pass state data along with the URL. The state data will be available in the location object when the new route is rendered.

           <Link to="/about" state={{ from: "homepage" }}>About</Link>

      import { useLocation } from 'react-router-dom';

function About() {
const location = useLocation();
const { from } = location.state;

return (

<div>
<h2>About Page</h2>
<p>Coming from: {from}</p>       // it'll provide you state 
</div>
);
}

- className: This prop allows you to specify CSS classes to apply to the link. This can be useful for styling the link differently based on its context.

     <Link to="/about" className="custom-link">About</Link>

- onClick: This prop allows you to specify a function to be called when the link is clicked. You can use this to perform additional actions before navigating, such as logging or analytics tracking.

   <Link to="/about" onClick={() => console.log("Link clicked")}>About</Link>

3. Active Links:

- if we want to add style if link is active.
- import NavLink instead of Link.
- the NavLink provide active class by default there we can grab it and style it.
- if we are using any css library then we can add prop.

  const navLinkStyles=({isActive})=>{
  return {
  font : isActive?'bold':'normal',
  background-color: isActive?'grey': ''
  }
  }

  <NavLink style={navLinkStyles}>About</NavLink>

- using stylesheet:
  a.active{
  font:bold;
  background-color:grey;
  }

4. Navigating Programmatically:

- React Router provide us a hook (useNavigate()) to navigate to any page .
- useNavigate hook return a function.
- we can call the function with path argument where we want to navigate.

  const navigate = useNavigate()

  <button onClick={()=>navigate('home')}>Go to Home</button>

- we navigate to previous page using useNavigate hook.
- only pass -1 as argument.
  <button onClick={()=>navigate(-1)}>Go to Home</button>

5. No Match Found:

- if routes does not match found then we need to add component with message 'Routes not found'
- with path '\*'.

  <Routes>
    <Route path="/" element={<Directory/>}></Route>
    <Route path="home" element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="*" element={<PageNotFound/>}></Route>
  </Routes>

6. Nested Routes:

<Routes>
    <Route path="/" element={<Directory/>}></Route>
    <Route path="home" element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="about" element={<About/>}>
       <Route path="product-list" element={< ProductList/>}>
       <Route path="new" element={< NewProduct/>}>
    </Route>
    <Route path="*" element={<PageNotFound/>}></Route>
  </Routes>
