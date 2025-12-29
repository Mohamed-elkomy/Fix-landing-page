import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/ui/Loader/Loader";

export default function RouteLoader({ children }) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // نبدأ اللودر
        setLoading(true);

        // نوقف أي تايمر قديم
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // نوقف اللودر بعد مدة
        timeoutRef.current = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [location.key]); // 👈 key مش pathname

    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
}
