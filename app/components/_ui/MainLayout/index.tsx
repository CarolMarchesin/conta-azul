import { Footer } from "@/app/components/_ui/Footer";
import { Header } from "@/app/components/_ui/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout : React.FC <MainLayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-[15px] sm:px-[30px] lg:px-[32px] h-full">
      {children}
      </main>
      <Footer />
    </div>
  );
};
