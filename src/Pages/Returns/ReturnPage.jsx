import PolicyCard from "../../components/sections/Policy/PolicyCard";
import styles from "../../assets/css/PolicyPages.module.css";
const WHATSAPP_LINK = (msg) =>
    `https://wa.me/201000000000?text=${encodeURIComponent(msg)}`;

export default function ReturnPolicyPage() {
    return (
        <section className={styles.policyContainer}>
            <h1
                className={`${styles.pageTitle} animate__animated animate__fadeInDown`}
            >
                سياسة الاسترجاع والاسترداد
            </h1>

            <PolicyCard title="مقدمة">
                <p>
                    تهدف سياسة الاسترجاع والاسترداد في <strong>FIX</strong> إلى ضمان
                    الشفافية الكاملة وتوضيح حقوق العميل في حال الرغبة في إلغاء الطلب أو
                    استبدال أي من المنتجات التي تم شراؤها عبر التطبيق أو الموقع.
                </p>
            </PolicyCard>

            <PolicyCard title="1. الحالات المؤهلة لإلغاء الطلب">
                <p>
                    • في حال تم تقديم طلب الإلغاء قبل شحن المنتج.<br />
                    • في حالة وجود عيب مصنعي في المنتج.<br />
                    • في حال تلف المنتج أثناء عملية الشحن.<br />
                    • في حالة حدوث خطأ في عملية الدفع.
                </p>
            </PolicyCard>

            <PolicyCard title="2. شروط قبول الإلغاء أو الاسترجاع">
                <p>
                    • تقديم الطلب خلال 48 ساعة من استلام المنتج.<br />
                    • أن يكون المنتج في حالته الأصلية دون استخدام.<br />
                    • توفر الفاتورة أو إثبات الشراء.<br />
                    • عدم إزالة الملصقات أو العبوات الأصلية.
                </p>
            </PolicyCard>

            <PolicyCard title="3. آلية تقديم طلب الاسترجاع">
                <p>
                    • من خلال التطبيق أو الموقع الإلكتروني.<br />
                    • التواصل مع فريق خدمة العملاء.<br />
                    • تزويدنا برقم الطلب وسبب الاسترجاع.
                </p>
            </PolicyCard>

            <PolicyCard title="4. سياسة الاسترداد">
                <p>
                    • يتم رد المبلغ خلال مدة من 3 إلى 7 أيام عمل.<br />
                    • يتم الاسترداد باستخدام نفس وسيلة الدفع المستخدمة.<br />
                    • قد يتم خصم رسوم الشحن في بعض الحالات.
                </p>
            </PolicyCard>

            <PolicyCard title="5. الحالات غير المشمولة بالاسترجاع">
                <p>
                    • المنتجات التي تم استخدامها أو فتحها.<br />
                    • المنتجات المخصّصة أو المعدلة حسب الطلب.<br />
                    • الطلبات التي تم تقديمها بعد انتهاء المدة المحددة.<br />
                    • المنتجات السليمة الخالية من العيوب.
                </p>
            </PolicyCard>

            <PolicyCard title="6. تعديل السياسة">
                <p>
                    تحتفظ <strong>FIX</strong> بحق تعديل سياسة الاسترجاع والاسترداد في أي
                    وقت، ويتم إشعار المستخدمين عبر التطبيق أو الموقع عند حدوث أي تغيير.
                </p>
            </PolicyCard>

            <PolicyCard title="7. تواصل معنا">
                <p>
                    في حال وجود أي استفسار بخصوص سياسة الاسترجاع، يمكنك التواصل معنا عبر:
                    <br />
                    <a
                        href={WHATSAPP_LINK("استفسار بخصوص الشروط والأحكام في تطبيق FIX")}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600 }}
                    >
                        التواصل معنا
                    </a>
                    .                   </p>
            </PolicyCard>
        </section>
    );
}
