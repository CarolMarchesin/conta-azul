import EmpresasNegocios from "@/public/assets/images/empresas-negocios.webp";
import Exame from "@/public/assets/images/exame.png";
import Forbes from "@/public/assets/images/forbes.webp";

import Image from "next/image";

export const Section5: React.FC = () => {
  return (
    <div className="container mx-auto px-[15px] sm:px-[5px] lg:px-[22px] h-full py-20">
      <div className="text-[42px] font-bold text-gray-800 leading-[52px] text-center mb-5">
        Conta Azul na <span className="text-blue-500">mídia!</span>
      </div>

      <div className="font-medium text-darksilver text-center">
        Veja o que estão falando da gente nas redes.
        <div className="flex justify-center mt-5 flex-col md:flex-row items-center md:gap-24 gap-10">
          <Image
            src={EmpresasNegocios}
            alt="Empresas e Negócios"
            className="object-contain"
          />
          <Image src={Exame} alt="Exame" className="object-contain" />
          <Image src={Forbes} alt="Forbes" className="object-contain" />
        </div>
      </div>
    </div>
  );
};
