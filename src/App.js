import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

//learning react-router 6
//Steps
//Install react-router-dom@6
//import the following {BrowserRouter, Routes, Route} from 'react-router-dom'

//BrowserRouter to connect to our browser
//Routes to act as our parent element
//Route, the component to show our pages
//Link allows us to reference any Route that has been added instead of <a href=""/>
//Outlet renders the current route selected

//How it works
//Index.js will import all the components that act as pages
//it will also import {BrowserRouter, Routes, Route}
//<BrowserRouter> will wrap the whole content
//<Routes> will act as parent for each <Route>.
//An app can have multiple <Routes>
//<Route> will house each component that act as pages
//The <Route> contains the following attributes and looks like this
//<Route path="/" element={<Layout/>} />
//Where path represents url display usually home has none
//for 404 error pages path="*" is used to catch-all for any undefined url
//element represents the component

//How does it work in each individual page/component
//Each compnenent that's support to act as page will work as usual
//While for best practice a component should act as the shared component that inserts common contents on all pages eg.navigation menu
//Usually it's the Layout component
//Layout.jsx will import {Outlet, Link} from "react-router-dom"
//With <Link to="/">Home</Link> it references home and can be set for others
/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        <li>
        <li>
          <Link to="/blogs">Blogs</Link>
        <li>
      </ul>
    </nav>
    <Outlet/>
*/
//Where <Outlet /> renders the current page

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
