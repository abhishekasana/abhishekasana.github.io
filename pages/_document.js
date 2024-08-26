import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styledTags = sheet.getStyleElement();
    return { ...page, styledTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styledTags}
          <style>
            {`
                /* custom! */
                body {
                    margin: 0;
                    background: #1b1c30;
                    color: white;
                    font-family: Lato,sans-serif;
                } 
            `}
          </style>
          <link href="https://fonts.googleapis.com/css2?family=Lato" rel="stylesheet" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
