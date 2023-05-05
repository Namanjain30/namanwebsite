import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./AppContext/ProductContext";
import { Fullproductcontext } from "./AppContext/Fullproductcontext";
import { Cartprovider } from "./AppContext/Cartcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-74wfmxrhblv7o4gg.us.auth0.com"
    clientId="pCOKaoWj1zEDTMu2IwykVGLf0oTHJDQx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <Fullproductcontext>
      <Cartprovider>
        <App />
      </Cartprovider>
    </Fullproductcontext>
  </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
