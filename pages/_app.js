import '../styles/globals.css'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/footer.css'
import '../styles/cardresultados.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Popcash from 'componentes/parts/popcash'
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (<>
  <Popcash/>
  <Component {...pageProps} /> 
  </>)
}
export default MyApp
