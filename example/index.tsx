import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './index.css'

import { Button, Collapse, H1, Modal } from 'react-daisyui'

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="p-8 flex flex-col gap-6">
      <div className="p-4 flex flex-row gap-6">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <H1>This is a modal</H1>
        </Modal>
        <Button onClick={() => setIsOpen(true)} disabled={isOpen}>
          Open Modal
        </Button>
      </div>
      <Collapse className="bg-base-100 border border-base-content">
        <Collapse.Title>This is a collapse with some content</Collapse.Title>
        <Collapse.Content>This is the content</Collapse.Content>
      </Collapse>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
