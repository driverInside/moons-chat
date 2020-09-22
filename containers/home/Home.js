import { Layout, Login } from '../../components'
import styles from './Home.module.scss'

const HomeContainer = () => {
  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.inner}>
          <Login />
        </div>
      </div>
    </Layout>
  )
}

export default HomeContainer
