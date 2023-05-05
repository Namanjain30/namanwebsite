import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./About";
import Header from "./component/Header";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Footer from "./component/Footer";
import Errorpage from "./component/Errorpage";
import Singleproduct from "./Singleproduct";
import Cart from "./Cart";


function App() {
  const theme = {
    color: {
      bg: "black",
    },
  };
  return (
    <>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/singleproduct/:id" element={<Singleproduct/>} />
              <Route path="/card" element = {<Cart/>}/>
              <Route path="*" element={<Errorpage />} />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
