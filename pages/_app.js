import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <html lang="en" />
        <title>Arda Fevzi Armutcu</title>
        <meta name="description" content="Arda F. Armutcu's Personal Portfolio" />
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preload" as="font" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
