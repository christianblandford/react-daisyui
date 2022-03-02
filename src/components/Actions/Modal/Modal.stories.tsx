import { H1, Prose } from '@/components'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { ModalProps } from '.'
import { Button } from '..'

import { Modal } from './Modal'

const meta: Meta = {
  title: `Actions/Modal`,
  component: Modal,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    console.log('Opening')
    setIsOpen(true)
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
      <Button variant="info" onClick={handleOpen}>
        Open Modal
      </Button>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = { children: 'This is a modal' }

export const DisabledBackdropClick = ({
  className,
  backdropClickCloses = false,
  ...rest
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    console.log('Opening')
    setIsOpen(true)
  }

  return (
    <div>
      <Modal
        {...rest}
        backdropClickCloses={backdropClickCloses}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className={className}
      >
        <div className="flex flex-col gap-8>">
          <Prose>
            <h1>This is a modal</h1>
            <p>Try clicking the backdrop, nothing will happen</p>
            <Button onClick={() => setIsOpen(false)}>Close modal</Button>
          </Prose>
        </div>
      </Modal>
      <Button variant="info" onClick={handleOpen}>
        Open Modal
      </Button>
    </div>
  )
}
