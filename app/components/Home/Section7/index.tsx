import Image from "next/image";
import BusinessPlan from "@/public/assets/images/business-plan.webp";

export const Section7: React.FC = () => {
  return (
    <div className="container mx-auto px-[15px] sm:px-[5px] lg:px-[22px] h-full py-20">
        <div className="flex flex-col sm:flex-row items-center">
          <div className=" w-full sm:w-[50%] sm:pr-[10px] sm:mb-0 md:pr-[91px] mb-10">
            <div className="text-[42px] font-bold text-gray-800 leading-[52px]">
              Temos o plano perfeito para o seu {""}
              <span className="text-blue-500">negócio </span> e para o seu {""}
              <span className="text-blue-500">bolso!</span>
            </div>

            <div className="text-sm mt-6 mb-8 leading-6 font-medium text-darksilver">
              ERP financeiro simples, seguro e de fácil implantação. Automatize
              suas rotinas financeiras e tenha suas informações organizadas.
              Mais controle, tempo e previsibilidade para tornar as melhores
              decisões.
            </div>

            <a
              type="submit"
              className={
                "bg-green-500 text-white px-5 items-center py-4 font-medium rounded-[4px] text-md"
              }
              href="https://ca.contaazul.com/planos/"
            >
              Saiba mais
            </a>
          </div>

          <div className="w-full sm:w-[53%]">
            <Image
              src={BusinessPlan}
              alt="Accounts Payable"
              width={580}
              style={{ width: "580px", height: "auto" }}
            />
          </div>
        </div>
      </div>
  );
};
