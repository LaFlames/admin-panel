import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./duck";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

function App() {
  const [auth, setAuth] = useState({
    isLogged: !!localStorage.getItem("fake-token"),
  });
  const { Provider } = AuthProvider;

  return (
    <BrowserRouter>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <Provider value={{ auth, setAuth }}>
            <Router />
          </Provider>
        </ApolloProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
