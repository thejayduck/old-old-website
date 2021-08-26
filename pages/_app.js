import Head from 'next/head'
import '@styles/globals.scss'

export function scrollToAnchor(hashId) {
  const element = document.querySelector(hashId);

  if (element) {
    element.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    });
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <html lang="en" />

        <title>Arda Fevzi Armutcu</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Arda Fevzi Armutcu's Portfolio" />
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preload" as="font" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
