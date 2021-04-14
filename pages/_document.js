import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script 
              id="Cookiebot" 
              src="https://consent.cookiebot.com/uc.js" 
              data-cbid="f107e2b2-3258-4ef1-aefa-533acd1a84d2" 
              data-blockingmode="auto" 
              type="text/javascript"
          >
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script 
            id="CookieDeclaration" 
            src="https://consent.cookiebot.com/f107e2b2-3258-4ef1-aefa-533acd1a84d2/cd.js" 
            type="text/javascript" 
            async
          >
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument