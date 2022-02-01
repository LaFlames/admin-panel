import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
