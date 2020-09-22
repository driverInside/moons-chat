import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiSend } from 'react-icons/fi'
import styles from './Footer.module.scss'

const useName = () => {
  const userName = useSelector(state => state.userName)

  return { userName }
}

const useSocket = () => {
  const socket = useSelector(state => state.socket)
  return socket
}

const useMessages = () => {
  const messages = useSelector(state => state.messages)
  const dispatch = useDispatch()

  const updateMessages = (messages) => {
    dispatch({
      type: 'UPDATE_MESSAGES',
      messages
    })
  }
  return { messages, updateMessages }
}

const Footer = () => {
  const socket = useSocket()
  const inputMessage = useRef()
  const { userName } = useName()
  const [isLoading, setIsLoading] = useState(false)
  const { updateMessages, messages } = useMessages()

  const handleClick = (e) => {
    const input = inputMessage.current
    const message = input.value

    if (!message || message === '') {
      return false
    }

    setIsLoading(true)

    socket.emit('sendMessage', {
      message,
      userName
    }, data => {
      input.value = ''
      messages.push({
        from: userName,
        text: message
      })

      updateMessages(messages)
      setIsLoading(false)
    })

  }

  return (
    <nav className={`navbar ${styles.footer}`}>
      <div className={`columns is-mobile is-gapless ${styles.columns}`}>
        <div className={`column is-10 ${styles.textBox}`}>
          <div className='control'>
            <textarea
              ref={inputMessage}
              className='textarea has-fixed-size'
              rows='1'
              placeholder='Your message...'
            />
          </div>
        </div>
        <div className={`column is-2 ${styles.sendButton}`}>
          <button className={`button ${isLoading ? 'is-loading' : ''}`} onClick={handleClick}>
            <span className='icon'>
              <FiSend />
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Footer
