import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";
import whatsappIcon from "@/public/whatsapp-logo.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full hidden lg:block text-white font-semibold">
      <div className="grid grid-cols-2">

        <div className="bg-vividskyblue pl-20 p-[18px] flex items-end justify-end gap-2">
          <span className="text-sm"> Quer falar com um especialista? </span>

          <a className="flex gap-1 items-end" href="tel:08006000920" target="_blank">
            <DevicePhoneMobileIcon className="h-5" />
            <span className="text-[16px] font-bold"> 0800 600 0920</span>
          </a>
        </div>
        
        <div className="bg-pictonblue p-[18px] flex items-center font-bold">
            <a
              href="https://api.whatsapp.com/send/?phone=554730640460&text=Ol%C3%A1%21%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema."
              target="_blank"
              className="flex gap-1"
            >
              <Image src={whatsappIcon} alt="Whatsapp" width={24} height={24} />
              Fale com a gente no Whatsapp
            </a>
        </div>
      </div>
    </div>
  );
};
