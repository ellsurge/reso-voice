import Layout from '@/components/layout'
import '@/styles/globals.css'

export const apiUrl = "http://localhost:3001"

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
    </Layout>)
}
