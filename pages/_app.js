import '../styles/globals.css'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/footer.css'
import '../styles/cardresultados.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
   <>
   <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'es_ES',
            url: process.env.PAGE_URL,
            site_name: 'Grupos Para Unirse',
          }}
          twitter={{
            handle: '@GruposParaUnirse',
            site: '@GruposParaUnirse',
            cardType: 'summary_large_image',
          }}
        />
  <Component {...pageProps} />
  </> 
  )
}

export default MyApp
