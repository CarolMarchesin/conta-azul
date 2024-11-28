import mapa from "@/public/assets/images/mapa.webp";
import Image from "next/image";

export const Section6: React.FC = () => {
  return (
    <div className="bg-lightbluegray h-full">
    <div className="container mx-auto px-[15px] sm:px-[5px] lg:px-[22px] h-full py-20">
    <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-5 md:gap-28">
          <div className="w-full sm:w-[50%]">
            <div className="text-[42px] font-bold text-gray-800 leading-[52px] mb-5">
              Já ajudamos
              <br />
              <span className="text-blue-500">milhares de clientes</span>
              <br />
              no Brasil todo!
            </div>
          </div>

          <div className="w-full sm:w-[50%]">
            <Image src={mapa} alt="Mapa" width={580} />
          </div>
        </div>
      </div>
    </div>
  );
};
