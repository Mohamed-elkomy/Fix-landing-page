import { useState } from "react";
import styles from "./ContactPage.module.css";
import buttons from "../../assets/css/buttons.module.css";

const initialState = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "الاسم مطلوب";
    if (!form.email.trim()) nextErrors.email = "البريد الإلكتروني مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "بريد إلكتروني غير صالح";
    if (!form.message.trim()) nextErrors.message = "الرسالة مطلوبة";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("تم استلام رسالتك بنجاح، فريق FIX سيتواصل معك قريبًا.");
    setForm(initialState);
  };

  return (
    <section className={styles.contactPage} dir="rtl">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <h1 className={`${styles.contactTitle} text-center mb-3`}>
              تواصل معنا
            </h1>

            <p className={`${styles.contactSubtitle} text-center mb-5`}>
              عندك استفسار عن منتج؟ محتاج مساعدة في الطلب؟ فريق FIX جاهز يساعدك.
            </p>

            <div className={styles.contactCard}>
              {/* Contact Info */}
              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>بيانات التواصل</h2>
                <ul>
                  <li>📞 01000000000</li>
                  <li>✉️ support@fix-store.com</li>
                  <li>📍 القاهرة – مصر</li>
                </ul>
              </div>

              <hr className={styles.divider} />

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    الاسم
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""
                      }`}
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""
                      }`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`form-control ${errors.message ? "is-invalid" : ""
                      }`}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn w-100 ${buttons.primaryBtn}`}
                >
                  إرسال الرسالة
                </button>

                {status && (
                  <div className="alert alert-success mt-3 mb-0 text-center">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
