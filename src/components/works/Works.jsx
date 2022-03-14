import "./works.scss";
// swiper js
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

// data
const data = [
  {
    id: "1",
    icon: "./images/mobile.png",
    title: "Web Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    id: "2",
    icon: "./images/globe.png",
    title: "Mobile Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  },
  {
    id: "3",
    icon: "./images/writing.png",
    title: "Branding",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  },
];

const Works = () => {
  return (
    <div className="works" id="works">
      <h2> my works</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        navigation
      >
        {data.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="container">
                <div className="box">
                  <img className="icon" src={data.icon} alt="" />
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                </div>
                <div className="image">
                  <img className="img" src={data.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Works;
