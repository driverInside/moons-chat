
import { useSelector } from 'react-redux'
import { Layout, Message } from '../../components'
import styles from './Chat.module.scss'

const useName = () => {
  const userName = useSelector(state => state.userName)
  return {
    name: userName
  }
}

const useMessages = () => {
  const messages = useSelector(state => state.messages)

  return { messages }
}

const ChatContainer = () => {
  const { name } = useName()
  const { messages } = useMessages()

  return (
    <Layout title='Moons chat' footer='false'>
      <div className={styles.chatContainer}>
        {messages.map((message, i) => {
          const incoming = message.from === name
          return (
            <Message
              key={i}
              name={message.from}
              text={message.text}
              incoming={incoming}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default ChatContainer
