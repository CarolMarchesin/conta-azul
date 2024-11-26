import Image from "next/image";
import AccounstPayable from "@/public/assets/images/accounts-payable.jpeg";
import { useState } from "react";

export const Section1: React.FC = () => {
  const [accept, setAccept] = useState<boolean>(true);

  const handleAccept = () => {
    setAccept(!accept);
  };
  return (
    <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[32px] h-full">
      <div className="mt-[70px]">
        <div className="flex flex-col sm:flex-row items-center">
          <div className=" w-full sm:w-[47%] sm:pr-[10px] sm:mb-0 md:pr-[91px] mb-10">
            <div className="text-[42px] font-bold text-gray-800 leading-[52px]">
              <span className="text-blue-500">Controle</span> seu negócio e{" "}
              <span className="text-blue-500">ganhe tempo</span> com o ERP Conta
              Azul.
            </div>

            <div className="text-sm mt-6 leading-6 font-medium text-darksilver">
              ERP financeiro simples, seguro e de fácil implantação. Automatize
              suas rotinas financeiras e tenha suas informações organizadas.
              Mais controle, tempo e previsibilidade para tomar as melhores
              decisões.
            </div>

            <form className="mt-6 flex flex-col md:flex-row items-stretch h-full">
              <input
                className="w-full md:w-[55%] items-center gap-2 border border-gray-300 rounded-md font-medium p-4 pl-3 bg-transparent focus:border-blue-500 focus:outline-none"
                type="email"
                placeholder="seu-email"
              />

              <button
                type="submit"
                disabled={!accept}
                className={`${
                  accept
                    ? "bg-green-500 text-white"
                    : "bg-white text-darksilver border border-gray-300 text-gray-400"
                } w-full md:w-[45%] items-center py-5 font-medium rounded-md text-sm hover:opacity-90 transition-colors duration-100`}
              >
                Experimente Grátis
              </button>
            </form>

            <div className="flex mt-4 text-sm font-medium text-darksilver">
              <input type="checkbox" checked={accept} onChange={handleAccept} />
              <label className="ml-1 text-center">
                Concordo com a{" "}
                <a
                  href="https://ca.contaazul.com/termos/privacidade/?_ga=2.209904273.54477621.1690375421-388926672.1690220393"
                  className="text-blue-600"
                >
                  Política de Privacidade.
                </a>
              </label>
            </div>
          </div>

          <div className="w-full sm:w-[53%]">
            <Image
              src={AccounstPayable}
              alt="Accounts Payable"
              width={580}
              style={{ width: "580px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
