import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiUserVoiceLine } from 'react-icons/ri'
import styles from './Login.module.scss'

const useName = () => {
  const userName = useSelector(state => state.userName)
  const dispatch = useDispatch()

  const updateUserName = (userName) => {
    dispatch({
      type: 'SET_USERNAME',
      userName
    })
  }

  return { updateUserName, userName }
}

const useSocket = () => {
  const socket = useSelector(state => state.socket)
  return socket
}

const Login = () => {
  const { updateUserName } = useName()
  const socket = useSocket()
  const inputName = useRef()

  const handleClick = async (e) => {
    const input = inputName.current
    const name = input.value

    updateUserName(name)
    socket.emit('adduser', { name })

    return false
  }

  return (
    <div className={styles.login}>
      <label className='label'>Username</label>
      <div className='field is-grouped'>
        <p className='control is-expanded has-icons-left'>
          <input ref={inputName} className='input' type='text' placeholder='Username' required />
          <span className='icon is-small is-left'>
            <RiUserVoiceLine />
          </span>
        </p>
        <p className='control'>
          <a className='button is-primary' onClick={handleClick}>
            Guardar
          </a>
        </p>
      </div>
    </div>
  )
}
export default Login
