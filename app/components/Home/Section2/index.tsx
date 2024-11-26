import Image from "next/image";
import SecuritySite from "@/public/assets/images/security-site.webp";

export const Section2: React.FC = () => {
  return (
    <div className="bg-lightbluegray h-full mt-[70px]">
      <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[32px] h-full py-[70px]">
        <div className="text-[42px] font-bold text-gray-800 leading-[52px] text-center mb-11">
          Um Sistema ERP <span className="text-blue-500">simples</span> e{" "}
          <span className="text-blue-500">seguro</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-5 md:gap-28">
          <div className="w-full sm:w-[50%]">
            <Image src={SecuritySite} 
              alt="Security Site" 
              width={600}
              style={{ width: "600px", height: "auto" }} />
          </div>

          <div className="w-full sm:w-[50%]">
            <div className="font-bold text-[32px] mb-7 leading-10 pr-9">
              Livre-se das planilhas e assuma o controle da sua empresa, tudo na
              nuvem.
            </div>

            <div className="mb-7 font-medium text-darksilver">
              Um Sistema ERP para gestão financeira com um poderoso ecossistema
              que transforma a relação das empresas com seus contadores e
              bancos.
            </div>

            <div className="font-medium text-darksilver">
              Sistema ERP Financeiro com funcionalidades essenciais para todo
              negócio: gestão de clientes, controle de vendas, emissão de NFs
              eletrônicas, cobranças automáticas, contratos recorrentes e
              conciliação automática. Além disso, você também tem contas a pagar
              e receber, controle de inadimplência, conciliação bancária com
              importação automática de extratos e integração direta com o
              contador.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
