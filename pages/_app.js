// import App from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "../components/context/AuthContext";
function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}

export default App;
