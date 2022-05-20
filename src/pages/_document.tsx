import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText, theme } from '@src/stitches.config'

class MyDocument extends Document {
  render(): JSX.Element {
    const regular = theme.fontWeights.regular.value
    const bold = theme.fontWeights.bold.value

    return (
      <Html>
        <Head>
          <link
            href={`https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,${regular};0,${bold};1,${regular};1,${bold}&display=optimal`}
            rel="stylesheet"
          />
          <link rel="icon" href="/peregrine.svg" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
