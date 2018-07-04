import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import createStore from './store';
import App from './containers'

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root'))
