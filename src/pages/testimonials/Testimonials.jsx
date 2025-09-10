import Header from "../../components/header/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../../data/coursesData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonials() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
    },
  ];
  return (
    <>
      <Header title={"Testimonials"} breadCrumbs={breadcrumbs} />
      <div>
        <div>
          <div className="text-center mt-10">
            <h1 className="text-5xl font-bold text-[#FB873F] mb-4">
              Success Stories
            </h1>
            <p>
              Can Edu.CHAPMS courses help your career? Our learners tell us how.
            </p>
          </div>
        </div>
        <Swiper
          // effect={"coverflow"}
          modules={[EffectCoverflow, Pagination]}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          initialSlide={3}
          loop={true}
          onLoop={(swiper) => {
            swiper.update();
          }}
          pagination={true}
          className="mySwiper lg:w-[500px] swwiper"
        >
          {reviews.map((review) => {
            return (
              <div>
                <SwiperSlide className="mySwiperSlide" key={review.id}>
                  <div className="w-[300px] m-auto myPrev myNext">
                    <div className="w-200 p-5 ">
                      <div className="relative p-7 w-20 h-20 rounded-full m-auto border-2">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="absolute top-0 left-0 right-0 bottom-0 w-16 h-16 rounded-full m-auto align-middle"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-center mb-4 font-semibold text-xl">
                        {review.name}
                      </h2>
                    </div>
                    <p className="py-8 px-3 text-center bg-[#F0FBFC] review-p">
                      {review.review}
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
