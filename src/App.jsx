import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes/Router";
import ScrollToTop from "./routes/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterApp />
    </BrowserRouter>
  );
}
