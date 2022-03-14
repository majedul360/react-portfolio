import "./Menu.scss";

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={`menu ${openMenu && "active"}`}>
      <nav>
        <a href="#intro" onClick={() => setOpenMenu(false)}>
          Intro
        </a>
        <a href="#portfolio" onClick={() => setOpenMenu(false)}>
          portfolio
        </a>
        <a href="#works" onClick={() => setOpenMenu(false)}>
          works
        </a>
        <a href="#testimonials" onClick={() => setOpenMenu(false)}>
          testimonials
        </a>
        <a href="#contact" onClick={() => setOpenMenu(false)}>
          contact
        </a>
      </nav>
    </div>
  );
};

export default Menu;
