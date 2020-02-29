import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <style jsx global>
            {`
              html,
              body,
              body > div:first-child,
              div#__next {
                height: 100%;
                width: 100%;
                font-family: 'Ubuntu';
                font-weight: 400;
              }
              *,
              *:after,
              *:before {
                box-sizing: border-box;
              }
              body {
                margin: 0;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;