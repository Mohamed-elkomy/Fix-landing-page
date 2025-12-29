import google from "../../../assets/images/logo/google.png";
import apple from "../../../assets/images/logo/apple.png";
import frame from "../../../assets/images/1.png";

import styles from "./Download.module.css";

export default function Download() {
  return (
    <section id="download" className={styles.downloadSection}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* IMAGE */}
          <div className={styles.downloadRight}>
            <div className={styles.imageWrapper}>
              <img
                src={frame}
                className={styles.downloadImg}
                alt="FIX App Preview"
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.downloadLeft}>
            <h2 className={styles.downloadTitle}>حمّل تطبيق FIX الآن</h2>

            <p className={styles.downloadText}>
              استمتع بتجربة تسوق سهلة وسريعة لشراء أحدث الموبايلات
              والإكسسوارات الأصلية. عروض حصرية، أسعار منافسة،
              ودفع آمن مع توصيل موثوق.
            </p>

            <div className={styles.downloadButtons}>
              <button
                type="button"
                className={styles.storeBtn}
                aria-label="Download on the App Store"
              >
                <img src={apple} alt="App Store" />
              </button>

              <button
                type="button"
                className={styles.storeBtn}
                aria-label="Download on Google Play"
              >
                <img src={google} alt="Google Play" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
