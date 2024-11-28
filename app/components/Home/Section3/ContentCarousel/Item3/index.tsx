import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Carousel3 from "@/public/assets/images/carouselSection3/carousel-3.webp";

export const CarouselItem3: React.FC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center w-full h-full">
      <div className="w-full sm:w-[48%] sm:pr-[10px] sm:mb-0 md:pr-[91px] mb-10 h-full">
        <div className="mt-7 sm:mt-0 text-[24px] font-bold text-[#334455]">
        Controle compras e contas <br /> a pagar da sua empresa, <br /> sem dor de cabeça
        </div>

        <div className="mb-7 font-medium text-darksilver mt-5">
          Ganhe tempo no controle de gastos de sua empresa, evite multas e
          atrasos no pagamento de fornecedores
        </div>

        <div className="mb-7 font-medium text-darksilver">
          <a
            href="https://experimente.contaazul.com/cadastro/?__hstc=139918060.0d4c46fb48fa26477461162b028d3929.1686585283281.1687782264129.1687812216936.23&__hssc=139918060.1.1687812216936&__hsfp=3074800436&_ga=2.94460441.485308634.1702334362-1985612529.1687788751"
            className="text-blue-500"
            target="_blank"
          >
            Teste Gratuitamente
            <ArrowRightIcon className="w-4 h-4 inline-block ml-2" />
          </a>
        </div>
      </div>

      <div className="w-full sm:w-[52%] h-auto">
        <Image
          src={Carousel3}
          alt="Carousel 3"
        />
      </div>
    </div>
  );
};
