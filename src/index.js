import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();
// const store = createStore(reducer, enhancer);

const store = createStore(rootReducer,enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
