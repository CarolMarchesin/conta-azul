import Image from "next/image";
import ContaAzulLogo from "@/public/assets/logos/conta-azul-logo.svg";
import {
  listContentContaAzul,
  listContentFunctionality,
  listContentPartners,
  listContentSegments,
  listContentToGoFurther,
} from "@/constants/Footer";
import AppStore from "@/public/assets/images/app-store.webp";
import GooglePlay from "@/public/assets/images/google-play.webp";
import AWS from "@/public/assets/images/aws.webp";
import AWSPartner from "@/public/assets/images/aws-partner.webp";
import Certificado from "@/public/assets/images/certificado.webp";
import { listSocialMedia } from "@/constants/socialMediaLinks";

export const Footer: React.FC = () => {
  return (
    <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[32px] h-full py-[70px]">
      <div className="grid grid-cols-5 gap-12">
        <div>
          <Image src={ContaAzulLogo} alt="Conta Azul" />

          <div className="flex flex-col gap-4 mt-5">
            {listContentContaAzul.map((item, index) => (
              <a key={index} className="text-darksilver text-md font-medium">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-600 font-bold text-md ">Funcionalidades</p>

          <div className="flex flex-col gap-4 mt-5">
            {listContentFunctionality.map((item, index) => (
              <a key={index} className="text-darksilver text-md font-medium">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-600 font-bold text-md">Segmentos</p>

          <div className="flex flex-col gap-4 mt-5">
            {listContentSegments.map((item, index) => (
              <a key={index} className="text-darksilver text-md font-medium">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-600 font-bold text-md">Para Parceiros</p>

          <div className="flex flex-col gap-4 mt-5">
            {listContentPartners.map((item, index) => (
              <a key={index} className="text-darksilver text-md font-medium">
                {item.title}
              </a>
            ))}
          </div>

          <p className="text-gray-600 font-bold text-md mt-16">Para ir além</p>
          <div className="flex flex-col gap-4 mt-5">
            {listContentToGoFurther.map((item, index) => (
              <a key={index} className="text-darksilver text-md font-medium">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-600 font-bold text-md">
            Baixe nossos aplicativos
          </p>

          <div className="mt-5">
            <Image
              src={AppStore}
              alt="App Store"
              width={120}
              className="mb-3"
            />
            <Image src={GooglePlay} alt="Google Play" width={120} />
          </div>

          <p className="text-gray-600 font-bold text-md mt-28">Certificações</p>

          <div className="mt-5 flex gap-4">
            <Image src={AWS} alt="AWS" />
            <Image src={AWSPartner} alt="AWS Partner" />
          </div>

          <div className="mt-3">
            <Image src={Certificado} alt="Certificado" />
          </div>
        </div>
      </div>

      <hr className="mt-16 border-gray-300" />
      <div className="flex justify-between flex-row mt-6">
        <div className="flex gap-2">
          {listSocialMedia.map((socialMedia, index) => (
            <a href={socialMedia.url} target="_blank" key={index}>
              <Image src={socialMedia.icon} alt="Logo" width={22} height={22} />
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-gray-600 text-sm font-medium">
          <p>Termos de uso</p>
          <p>Política de privacidade</p>
        </div>
      </div>
    </div>
  );
};
