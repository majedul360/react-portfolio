import Cards from "../cards/Cards";
import "./testimonials.scss";

const data = [
  {
    id: 1,
    name: "Tom Durden",
    title: "Senior Developer",
    img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon1: "images/right-arrow.png",
    icon2: "images/twitter.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },
  {
    id: 2,
    name: "Alex Kalinski",
    title: "Co-Founder of DELKA",
    img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon1: "images/right-arrow.png",
    icon2: "images/youtube.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    featured: true,
  },
  {
    id: 3,
    name: "Martin Harold",
    title: "CEO of ALBI",
    img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon1: "images/right-arrow.png",
    icon2: "images/linkedin.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
  },
];
const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h2>testimonials</h2>
      <div className="container">
        {data.map((data) => {
          return (
            <Cards
              key={data.id}
              title={data.title}
              name={data.name}
              img={data.img}
              icon1={data.icon1}
              icon2={data.icon2}
              desc={data.desc}
              featured={data.featured}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
