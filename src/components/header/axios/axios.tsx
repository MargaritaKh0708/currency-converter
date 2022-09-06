import axios from "axios"
import {IConverterItem} from 'components/converter/Converter'


export async function axiocurrencyRequest(renderList:IConverterItem[], setRenderList:(value: IConverterItem[]) => void) {
    try {
      const response = await axios.get<IConverterItem[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');

      const currencyArray: IConverterItem[] = response.data.filter(item => item.cc === "USD" || item.cc === "EUR");

      setRenderList([...renderList, ...currencyArray]);
      console.log(renderList)
      console.log(currencyArray)
    }
    catch (error) {
      console.error(error)
    }
  };