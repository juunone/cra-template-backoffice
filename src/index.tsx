import React from 'react'
import ReactDOM from 'react-dom'
import { connectReduxDevtools } from 'mst-middlewares'
import App from '@/components/App'
import { createStore } from '@/stores/createStore'
import { StoreProvider } from '@/components/StoreProvider'

const rootStore = createStore()

connectReduxDevtools(require('remotedev'), rootStore)

ReactDOM.render(
  <React.Fragment>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
    ,
  </React.Fragment>,
  document.getElementById('root')
)
