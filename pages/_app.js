import { useState, useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
