import Layout from '@/components/layout'
import '@/styles/globals.css'

export const apiUrl = `${process.env.API_BASE_URL}`
export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
    </Layout>)
}
