import Document, { Html, Head, Main, NextScript } from 'next/document';
import React, { Fragment } from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Fragment>
            <script async type="text/javascript">
              var uid = '236265';
              var wid = '672811';
              var pop_tag = document.createElement('script');
              pop_tag.src='//cdn.popcash.net/show.js';
              document.body.appendChild(pop_tag);
              pop_tag.onerror = function() {
                pop_tag = document.createElement('script')
                pop_tag.src='//cdn2.popcash.net/show.js';
                document.body.appendChild(pop_tag);
              }
            </script>
          </Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
