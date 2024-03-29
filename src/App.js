import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Icon from "./assets/gambar/logo.png";

function App() {
  return (
    <ChakraProvider>
      <main aria-label="App" className="App">
        <Helmet>
          <title>Bagas Dwi Pranata</title>
          <link rel="icon" type="image/png" href={Icon} />
        </Helmet>

        <Router>
          <Box position="relative">
            <Navbar />
            <Header />
            <Content />
            <Footer />
          </Box>
        </Router>
      </main>
    </ChakraProvider>
  );
}

export default App;
