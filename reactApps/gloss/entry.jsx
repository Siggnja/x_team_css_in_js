'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { DummyStorage } from './Components/DummyStorage'
import Router from './Components/Router'


/**
 *  Entry.
 */

ReactDOM.render(
  <Provider store={createStore(DummyStorage)}>
    <Router />
  </Provider>,
  document.getElementById('react_app_root'),
)
