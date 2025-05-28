import { Bai_Jamjuree, Montserrat } from "next/font/google";
import localFont from 'next/font/local'

export const bai_Jamjuree = Bai_Jamjuree({
  weight: "500",
  subsets:['vietnamese']
});

export const montserrat = Montserrat({
  subsets: ["vietnamese"],
  display: "swap",
});

export const th_leky = localFont({
  src: '../../public/fonts/TH_ANDORA_MODERN_SERIF.ttf',
  display: "swap",
})
