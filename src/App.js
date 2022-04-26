import logo from './logo.svg';
import { render } from '@testing-library/react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ToDo from "./Pages/ToDo";
import CV from "./Pages/CV";
import ProductList from "./Pages/ProductList"
import Counter from "./Pages/Counter"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="CV" element={<CV />} />
          <Route path="to-do" element={<ToDo />} />
          <Route path="counter" element={<Counter />} />
          <Route path="product" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;


/*  

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Interesting <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
     </header>
 <body>
        Test
      </body>

*/