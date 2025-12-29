import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import styles from "./Features.module.css";
import { FEATURES } from "../../../data/features";

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.featuresTitle}>ليه تختار FIX؟
        </h2>
        <p className={styles.featuresSubtitle}>
          كل اللي تحتاجه لشراء الموبايلات والإكسسوارات الأصلية في مكان واحد
        </p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          freeMode
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className={styles.featuresSwiper}
        >
          {[...FEATURES, ...FEATURES].map((item, index) => (
            <SwiperSlide
              key={`${item.id}-${index}`}
              className={styles.slide}
            >
              <div className={styles.featureCard}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
