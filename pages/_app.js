import { Provider } from "react-redux";
import {store, wrapper } from "@/redux";

function App({ Component, pageProps }) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }

export default wrapper.withRedux(App)