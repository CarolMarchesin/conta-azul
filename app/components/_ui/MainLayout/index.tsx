import { Footer } from "@/app/components/_ui/Footer";
import { Header } from "@/app/components/_ui/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mb-10 mt-[80px]">{children}</main>
      <Footer />
    </div>
  );
};
