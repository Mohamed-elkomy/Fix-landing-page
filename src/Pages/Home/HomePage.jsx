import Hero from "../../components/sections/Hero/Hero";
import Categories from "../../components/sections/Categories/Categories";
import Features from "../../components/sections/Features/Features";
import Screenshots from "../../components/sections/Screenshots/Screenshots";
// import Offers from "../../components/sections/Offers/Offers";
import Download from "../../components/sections/Download/Download";

export default function HomePage() {
    return (
        <main style={{ overflow: "hidden" }}>
            <Hero />
            <Features />
            <Categories />
            <Screenshots />
            {/* <Offers /> */}
            <Download />
        </main>
    );
}
