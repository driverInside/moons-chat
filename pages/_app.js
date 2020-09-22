import { useStore } from '../store'
import { Provider } from 'react-redux'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
