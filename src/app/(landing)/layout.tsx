import { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
