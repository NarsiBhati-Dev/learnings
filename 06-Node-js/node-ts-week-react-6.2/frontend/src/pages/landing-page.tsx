import Footer from "../components/footer";
import Navbar from "../components/navbar";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-amber-50 h-screen flex flex-col justify-center">
      <Navbar />
      <main className="mx-2 flex-1 flex items-center justify-center">
        <img src="/hi.png" alt="Landing" className="w-full max-w-lg" />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
