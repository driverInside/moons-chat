import fetch from 'unfetch'
import io from 'socket.io-client'
import { useRouter } from 'next/router'
import { useDispatch , useSelector} from 'react-redux'
import { useEffect } from 'react'
import { HomeContainer } from '../containers'

const useName = () => {
  const dispatch = useDispatch()

  const updateUserName = (userName) => {
    dispatch({
      type: 'SET_USERNAME',
      userName
    })
  }

  return { updateUserName }
}

const useSocket = () => {
  const dispatch = useDispatch()
  const updateSocket = (socket) => {
    dispatch({
      type: 'UPDATE_SOCKET',
      socket
    })
  }

  return { updateSocket }
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

export default function Home () {
  const router = useRouter()
  const { messages, updateMessages } = useMessages()
  const { updateUserName } = useName()
  const { updateSocket } = useSocket()
  useEffect(() => {
    fetch('/api/socketio')
      .finally(() => {
        const socket = io()

        socket.on('connect', () => {
          console.log('-----------')
          console.log('connect')
          console.log('-----------')
        })

        socket.on('messagereceived', data => {
          messages.push({
            from: data.from,
            text: data.message
          })
          updateMessages(messages)
        })

        socket.on('disconnect', () => {
          console.log('disconnect')
        })

        socket.on('welcome', name => {
          updateUserName(name)
          router.push('/chat')
        })
        updateSocket(socket)
      })
  })
  return (
    <HomeContainer />
  )
}
