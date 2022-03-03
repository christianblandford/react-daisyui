import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './index.css'

import { Button } from '../dist'

const App = () => {
  return (
    <div>
      <Button>Test</Button>
      <Button variant="accent">Test</Button>
      <Button variant="accent" isLoading>
        Test
      </Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
