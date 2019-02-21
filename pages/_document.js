import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    static async getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styledTags = sheet.getStyleElement();
        return {...page, styledTags};
    }

    render() {
        return (
            <html lang="en">
            <Head>
                {this.props.styledTags}
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <style>
                    {`
                        body {
                            margin: 0;
                            background: #1b1c30;
                            color: white;
                            font-family: Inconsolata,monospace;
                        } /* custom! */`
                    }
                </style>
                <link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet" />
            </Head>
            <body className="custom_class">
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}
