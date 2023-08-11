
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Facts from "./pages/Facts";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Portfolio from "./pages/Portfolio";
import TestPage from "./pages/TestPage";
import News from "./pages/News";
import Detail from "./pages/Detail";

const estaAutenticado = () => {
  const token = localStorage.getItem("Token");
  
  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return false;
  }
};


function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About />} />
          <Route path="/facts" exact element={<Facts />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/testimonial" exact element={<Testimonial />} />
          <Route path="/test" exact element={<TestPage />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/news" exact element={<News />} />

          <Route path="/detail/:id" exact element={<Detail />} />
          {/* <Route
            exact
            path="/index"
            element={estaAutenticado() ? <Index /> : <Navigate to="/" />}
                       
          /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
