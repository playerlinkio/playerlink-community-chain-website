import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../app/store';
import "../css/font-awesome.css"
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
