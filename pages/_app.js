import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import {store, wrapper } from "@/redux";
import { theme } from "@/utils/theme";

function App({ Component, pageProps }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }

export default wrapper.withRedux(App)