import "./PortfolioList.scss";
const Portfoliolist = ({ id, title, select, setSelect }) => {
  return (
    <span
      className={`list-item ${select === id && "active"}`}
      onClick={() => setSelect(id)}
    >
      {title}
    </span>
  );
};

export default Portfoliolist;
