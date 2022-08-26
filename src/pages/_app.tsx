import { AppProps } from "next/app";
import AppBar from "src/components/TopBar/AppBar";
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AppBar/>
    <Component {...pageProps} />
    </>
  );
}