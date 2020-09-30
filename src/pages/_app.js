import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import i18next from '../utils/i18next';
import { wrapper } from '../store/configureStore';
import { ToastContainer } from 'react-toastify';
import '../styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <I18nextProvider i18next={i18next}>
        <React.Fragment>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap"
              rel="stylesheet"
            />
            <meta charset="UTF-8" />
            <meta name="author" content="Perdana-Faishal" />
            <title>Spotify Stats</title>
          </Head>
          <Component {...pageProps} />
          <ToastContainer />
        </React.Fragment>
      </I18nextProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
