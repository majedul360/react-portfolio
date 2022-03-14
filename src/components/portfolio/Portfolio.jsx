import { useState, useEffect } from "react";
import Portfoliolist from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
const list = [
  {
    id: "featured",
    title: "featured",
  },
  {
    id: "web app",
    title: "web app",
  },
  {
    id: "mobile app",
    title: "mobile app",
  },
  {
    id: "design",
    title: "design",
  },
  {
    id: "content",
    title: "content",
  },
];
const Portfolio = () => {
  const [select, setSelect] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (select) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web app":
        setData(webPortfolio);
        break;
      case "mobile app":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [select]);
  return (
    <div className="portfolio" id="portfolio">
      <h2>portfolio</h2>
      <div className="list">
        {list.map((list, index) => {
          return (
            <Portfoliolist
              key={index}
              id={list.id}
              title={list.title}
              select={select}
              setSelect={setSelect}
            />
          );
        })}
      </div>
      <div className="box-container">
        {data.map((data, index) => {
          return (
            <div className="box" key={index}>
              <div className="image">
                <img src={data.img} alt="" />
                <div className="content">
                  <h3>{data.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
