import euro from "../../assets/icons/eur.png";
import hryvnia from "../../assets/icons/ukr.png";
import dollar from "../../assets/icons/usd.png";


export interface IFlags {
  currencyCode: string;
  icon: string;
};


export const flags: IFlags[] = [
  { currencyCode: 'USD', icon: dollar },
  { currencyCode: 'EUR', icon: euro },
  { currencyCode: 'UAH', icon: hryvnia },
];
