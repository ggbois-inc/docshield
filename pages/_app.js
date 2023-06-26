import "@/styles/globals.css";
import AppProvider from "@/context/AppContext";
import FileProvider from "@/context/FileContext";
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <FileProvider>
        <Component {...pageProps} />
      </FileProvider>
    </AppProvider>
  );
}
