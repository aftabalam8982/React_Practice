# React Topics

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
    <div>{(value)=><h1>{value}</h1>}</div>
2.  Using 'useContext()' hooks.
    const value = useContext(context).

- see the example in contextAPIs folder.

# useState

- 'useState()' is function to hold and manage state in functional component.
- it's take initial value as argument and return array of length two.
  1. state
  2. function - to manage state.
     const [state, setState] = useState();

# Lifting State Up
