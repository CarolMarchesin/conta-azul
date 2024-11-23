import Facebook from "@/public/facebook-logo.svg";
import Instagram from "@/public/instagram-logo.svg";
import Linkedin from "@/public/linkedIn-logo.svg";
import Youtube from "@/public/youtube-logo.svg";
import { StaticImageData } from "next/image";

interface listSocialMedia {
  icon: StaticImageData;
  url: string;
}

export const listSocialMedia: listSocialMedia[] = [
  { icon: Facebook, url: "https://www.facebook.com/ContaAzul" },
  { icon: Instagram, url: "https://www.instagram.com/contaazul" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/contaazul" },
  { icon: Youtube, url: "https://www.youtube.com/ContaAzulTV" },
];
