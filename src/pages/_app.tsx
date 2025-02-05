import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import Layout from '@/components/Layout';
import { ConfigProvider } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Lexend_Deca, Montserrat } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextSeo } from 'next-seo';

const lexend_Deca = Lexend_Deca({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend-deca',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    setTimeout(() => {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f: any = d.getElementsByTagName(s)[0],
          j: any = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-WXWRBSP');
    }, 5000); // Delay by 3 seconds
  }, []);

  return (
    <>
      <NextSeo title='GAIA VETS' />
      <Head>
        <title>GAIA VETS</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-WXWRBSP'
          height='0'
          width='0'
        ></iframe>
      </noscript>
      <main className={`${lexend_Deca.variable} ${montserrat.variable}`}>
        <QueryClientProvider client={queryClientRef.current}>
          <RecoilRoot>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: lexend_Deca.style.fontFamily,
                },
                components: {
                  Menu: {
                    horizontalItemHoverColor: 'transparent !important',
                  },
                },
              }}
            >
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ConfigProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </main>
    </>
  );
};
export default App;
