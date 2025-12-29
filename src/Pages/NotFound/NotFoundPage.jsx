import { Link } from "react-router-dom";
import buttons from "../../assets/css/buttons.module.css";

export default function NotFoundPage() {
    return (
        <section
            className="container d-flex align-items-center justify-content-center text-center"
            style={{ minHeight: "70vh" }}
            dir="rtl"
        >
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-12">
                    <h1 className="display-4 fw-bold mb-3">404</h1>

                    <h2 className="h4 fw-bold mb-3">
                        الصفحة غير موجودة
                    </h2>

                    <p className="text-muted mb-4">
                        الصفحة التي تحاول الوصول إليها غير متاحة حالياً،
                        قد يكون الرابط غير صحيح أو تم نقل الصفحة.
                    </p>

                    <Link to="/" className={`btn px-4 ${buttons.primaryBtn}`}>
                        العودة إلى الصفحة الرئيسية
                    </Link>
                </div>
            </div>
        </section>
    );
}
