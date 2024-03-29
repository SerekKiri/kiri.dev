import '../styles/globals.css'
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import type { AppProps } from 'next/app'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  useEffect(() => {
    gtag.pageview(router.pathname)
  }, [router.pathname])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
