import styles from './Message.module.scss'

const Message = ({
  name = 'Unknown',
  incoming = false,
  text = ''
}) => {
  return (
    <article className={styles.message}>
      <div
        className={
          `${styles.messageContainer} 
          ${incoming ? styles.incomingMessage : styles.ownMessage}`
        }
      >
        <p className={styles.messageTitle}>{name}</p>
        <div className={styles.messageBody}>
          <p className={styles.messageText}>
            {text}
          </p>
        </div>
      </div>
    </article>
  )
}
export default Message
