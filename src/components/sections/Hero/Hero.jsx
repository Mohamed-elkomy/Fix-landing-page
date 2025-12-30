import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import google from "../../../assets/images/logo/google.png";
import apple from "../../../assets/images/logo/apple.png";

import screen1 from "../../../assets/images/app/2.png";
import screen2 from "../../../assets/images/app/3.png";
import screen3 from "../../../assets/images/app/11.png";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          {/* TEXT */}
          <div className={`col-lg-6 ${styles.heroRight}`}>
            <h1 className={styles.title}>
              اشترِ أحدث الموبايلات والإكسسوارات أونلاين
            </h1>

            <h2 className={styles.subtitle}>
              منتجات أصلية • أسعار تنافسية • توصيل سريع
            </h2>

            <p className={styles.desc}>
              FIX هو متجر إلكتروني متخصص في بيع أحدث الهواتف الذكية
              والإكسسوارات الأصلية. تصفّح، قارن، واطلب بكل سهولة
              مع تجربة شراء آمنة وتوصيل موثوق.
            </p>

            {/* Store Buttons */}
            <div className={styles.storeButtons}>
              <button className={styles.storeButton}>
                <img src={apple} alt="App Store" />
              </button>

              <button className={styles.storeButton}>
                <img src={google} alt="Google Play" />
              </button>
            </div>
          </div>

          {/* IMAGE / SWIPER */}
          <div className={`col-lg-6 ${styles.heroVisual}`}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              loop
              slidesPerView={1}
              centeredSlides
              className={`${styles.heroSwiper}`}
            >
              {[screen1, screen2, screen3].map((img, index) => (
                <SwiperSlide className="d-flex justify-content-center align-content-center" key={index}>
                  <img
                    src={img}
                    alt={`FIX App Screen ${index + 1}`}
                    className={` ${styles.heroImg}`}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
