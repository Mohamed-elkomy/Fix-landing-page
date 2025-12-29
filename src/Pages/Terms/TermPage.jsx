import PolicyCard from "../../components/sections/Policy/PolicyCard";
import { Link } from "react-router-dom";
import styles from "../../assets/css/PolicyPages.module.css";
const WHATSAPP_LINK = (msg) =>
    `https://wa.me/201000000000?text=${encodeURIComponent(msg)}`;


export default function TermsPage() {
    return (
        <section className={styles.policyContainer}>
            <h1 className={`${styles.pageTitle} animate__animated animate__fadeInDown`}>
                الشروط والأحكام
            </h1>

            <PolicyCard title="مقدمة">
                <p>
                    توضح هذه الشروط والأحكام إطار استخدام تطبيق <strong>FIX</strong> والخدمات
                    المقدمة من خلاله. باستخدامك للتطبيق أو الموقع، فإنك توافق على الالتزام
                    بجميع البنود الواردة في هذه الصفحة.
                </p>
            </PolicyCard>

            <PolicyCard title="1. استخدام التطبيق">
                <p>
                    يلتزم المستخدم باستخدام التطبيق بشكل قانوني وعدم إساءة الاستخدام أو
                    محاولة الوصول غير المصرح به إلى أي جزء من أنظمة التطبيق أو خدماته.
                </p>
            </PolicyCard>

            <PolicyCard title="2. حساب المستخدم">
                <p>
                    يجب على المستخدم إدخال بيانات صحيحة عند إنشاء الحساب، ويُحظر مشاركة
                    بيانات الدخول مع أي طرف آخر. يحق لإدارة <strong>FIX</strong> تعليق أو
                    إيقاف الحساب في حال وجود نشاط غير طبيعي أو مخالف للشروط.
                </p>
            </PolicyCard>

            <PolicyCard title="3. الطلبات والمنتجات">
                <p>
                    يتيح تطبيق <strong>FIX</strong> شراء الهواتف الذكية والإكسسوارات
                    الأصلية. جميع الأسعار المعروضة قابلة للتغيير وفقًا للعروض والتحديثات
                    دون إشعار مسبق.
                </p>
            </PolicyCard>

            <PolicyCard title="4. المسؤولية">
                <p>
                    تبذل <strong>FIX</strong> أقصى جهدها لتقديم معلومات دقيقة حول المنتجات،
                    إلا أن المستخدم يتحمل مسؤولية التأكد من ملاءمة المنتج لاحتياجاته قبل
                    إتمام عملية الشراء.
                </p>
            </PolicyCard>

            <PolicyCard title="5. الإلغاء والاسترداد">
                <p>
                    تخضع عمليات الإلغاء والاسترداد لشروط{" "}
                    <Link to="/returns">سياسة الاسترجاع والاسترداد</Link> المعتمدة داخل
                    التطبيق أو الموقع.
                </p>
            </PolicyCard>

            <PolicyCard title="6. الملكية الفكرية">
                <p>
                    جميع محتويات التطبيق، بما في ذلك النصوص والصور والتصاميم والبرمجيات،
                    مملوكة لـ <strong>FIX</strong>، ولا يجوز نسخها أو إعادة استخدامها دون
                    إذن كتابي مسبق.
                </p>
            </PolicyCard>

            <PolicyCard title="7. تعديل الشروط">
                <p>
                    تحتفظ <strong>FIX</strong> بحق تعديل هذه الشروط والأحكام في أي وقت،
                    وتصبح التعديلات سارية فور نشرها داخل التطبيق أو الموقع.
                </p>
            </PolicyCard>

            <PolicyCard title="8. التواصل معنا">
                <p>
                    لأي استفسار بخصوص الشروط والأحكام، يمكنك التواصل معنا من خلال صفحة
                    <a
                        href={WHATSAPP_LINK("استفسار بخصوص الشروط والأحكام في تطبيق FIX")}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600 }}
                    >
                        التواصل معنا
                    </a>
                    .                </p>
            </PolicyCard>
        </section>
    );
}
