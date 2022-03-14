import { useState } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app">
      <Header
        className="header"
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
