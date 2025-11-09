import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../assets/car.png";
import img1 from "../assets/car1.png";
import img2 from "../assets/car2.png";
function App() {
  return (
    <div className="container1">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="">
            <img className="w-full rounded-3xl" src={img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="w-full rounded-3xl" src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="w-full rounded-3xl" src={img2} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
