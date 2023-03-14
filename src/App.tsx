import "./App.css";
import { Footer } from "./components/Footer";
import { Layout } from "./routes/Layout";
import { Navbar } from "./components/Navbar";

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  return (
    <div className="container">
      <div className="main-content">
        <Navbar />
        <Layout />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};
