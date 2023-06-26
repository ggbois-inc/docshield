import "@/styles/globals.css";
import AppProvider from "@/context/AppContext";
import FileProvider from "@/context/FileContext";
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <FileProvider>
        <Component {...pageProps} />
      </FileProvider>
    </AppProvider>
  );
}
