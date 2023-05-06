import "../styles/globals.scss";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "../store/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.warn(
      "Hydration warning: Server rendered the page without data and markup. "
    );
  }, []);

  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  );
}

export default MyApp;
