import "../styles/globals.scss";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  );
}

export default MyApp;
