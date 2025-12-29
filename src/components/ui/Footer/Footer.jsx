import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import logo from "../../../assets/images/logo/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <footer className={styles.footer} dir="rtl">
                <div className={styles.footerContent}>
                    {/* About */}
                    <div className={styles.footerColumn}>
                        <h3>عن FIX</h3>
                        <p>
                            FIX منصة إلكترونية متخصصة في بيع وشراء الأجهزة
                            بسهولة وأمان، مع ضمان جودة المنتجات وتجربة
                            استخدام سلسة.
                        </p>
                    </div>

                    {/* Links */}
                    <div className={styles.footerColumn}>
                        <h3>روابط هامة</h3>
                        <ul>
                            <li><Link className="text-decoration-none" to="/">الرئيسية</Link></li>
                            <li><Link className="text-decoration-none" to="/privacy">سياسة الخصوصية</Link></li>
                            <li><Link className="text-decoration-none" to="/returns">سياسة الاسترجاع</Link></li>
                            <li><Link className="text-decoration-none" to="/terms">الشروط والأحكام</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.footerColumn}>
                        <h3>تواصل معنا</h3>
                        <p>📞 01000000000</p>
                        <p>✉️ support@fix.com</p>
                        <p>📍 القاهرة – مصر</p>
                    </div>

                    {/* Logo */}
                    <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
                        <img
                            src={logo}
                            alt="FIX - بيع وشراء الأجهزة بثقة"
                        />
                    </div>
                </div>

                <hr />

                <div className={styles.copyright}>
                    © 2025 FIX – جميع الحقوق محفوظة
                </div>
            </footer>

            {/* Scroll To Top */}
            <button
                className={`${styles.scrollTopBtn} ${showButton ? styles.show : ""}`}
                onClick={scrollToTop}
                aria-label="العودة لأعلى الصفحة"
            >
                <FaArrowCircleUp />
            </button>
        </>
    );
}
