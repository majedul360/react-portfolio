import "./Cards.scss";

const Cards = ({ title, name, img, icon1, icon2, desc, featured }) => {
  return (
    <div className={featured ? "card featured" : "card"}>
      <div className="img-container">
        <img className="icon" src={icon1} alt="" />
        <img className="user" src={img} alt="" />
        <img className="icon" src={icon2} alt="" />
      </div>
      <p>{desc}</p>
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default Cards;
