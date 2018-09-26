import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Components
import App from './components/App'
// Middleware
import middleware from './middleware'
// Reducers
import reducer from './reducers'
// Styles
import './index.css'

const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
