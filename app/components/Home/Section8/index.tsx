import Suporte from "@/public/assets/images/suporte.webp";
import Image from "next/image";
import { GenericSVGColorChanger } from "../../_ui/SVGColorChanger";
import { WhatsAppSVG } from "../../_ui/SVGColorChanger/SVGs/WhatsApp";
import { PhoneVolumeSVG } from "../../_ui/SVGColorChanger/SVGs/Phone";

export const Section8: React.FC = () => {
  return (
    <div className="bg-lightbluegray h-full mt-[70px]">
    <div className="container mx-auto px-[15px] sm:px-[5px] lg:px-[22px] h-full py-20">
    <div className="flex flex-col sm:flex-row items-center sm:gap-5">
          <div className="w-full sm:w-[50%]">
            <Image src={Suporte} alt="Mapa" className="rounded-md" />
          </div>
          <div className="mt-6 sm:mt-0 w-full sm:w-[50%]">
            <div className="text-[42px] font-bold text-gray-800 leading-[52px] mb-5">
              Tem dúvidas de como
              <br />
              a Conta Azul
              <br />
              pode {""}
              <span className="text-blue-500">
                ajudar o seu
                <br />
                negócio?
              </span>
            </div>

            <div className="mb-7 font-medium text-darksilver">
              Fale com nosso time especialista e tire todas as
              <br />
              suas dúvidas
            </div>

            <a
              href="#"
              className=" text-blue-500 px-5 items-center py-3 font-medium text-md"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
        <div className="flex flex-row mt-32 justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=554730640460&text=Ol%C3%A1!%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema."
            target="_blank"
            className="bg-white p-5 text-sm font-semibold text-center hover:bg-blue-100 ease-in duration-200 h-40 w-72 flex-col flex justify-center gap-3"
          >
            <div className="flex justify-center">
              <GenericSVGColorChanger
                svg={<WhatsAppSVG width={50} height={50} />}
                colors={"text-blue-500"}
              />
            </div>
            Mande um whatsapp
          </a>

          <a
            href="tel:08006000920"
            target="_blank"
            className="bg-white p-5 text-sm font-semibold text-center hover:bg-blue-100 ease-in duration-200 h-40 w-72 flex-col flex justify-center gap-3"
          >
            <div className="flex justify-center">
              <GenericSVGColorChanger
                svg={<PhoneVolumeSVG width={45} height={45} />}
                colors={"text-blue-500"}
              />
            </div>
            0800 600 0920
          </a>
        </div>
      </div>
    </div>
  );
};
