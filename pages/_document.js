import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import { getInitColorSchemeScript } from '@mui/material/styles';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
        <Script 
            src="/js/main.js"
            strategy='lazyOnload'
        />
      </body>
    </Html>
  )
}
