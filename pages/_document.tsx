import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="preload"
            href="/fonts/silka/silka-regular-webfont.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/silka/silka-medium-webfont.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/silka/silka-semibold-webfont.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/silka/silka-bold-webfont.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className="bg-neutral-50 text-neutral-600 text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
