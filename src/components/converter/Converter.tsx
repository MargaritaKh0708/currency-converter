import React, { useEffect, useState } from "react";
import { CurrencyList } from './select/CurrencyList'
import {axiocurrencyRequest} from 'components/header/axios/axios'
import axios from "axios"


export interface IConverterItem {
  exchangedate: string
  rate: number,
  r030: number,
  txt: string,
  cc: string,
}

export interface ICurrencyState {
  code: string,
  value: string,
}

export const Converter: React.FC = () => {
  const [currency, setCurrency] = useState<ICurrencyState>({
    code: '',
    value: '',
  });


  const [renderList, setRenderList] = useState<IConverterItem[]>([{
    exchangedate: `{${new Date().toLocaleDateString()}}`,
    txt: 'Гривні',
    r030: 860,
    cc: 'UAH',
    rate: 1,
  }]);

  // async function axiocurrencyRequest() {
  //   try {
  //     const response = await axios.get<IConverterItem[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');

  //     const currencyArray: IConverterItem[] = response.data.filter(item => item.cc === "USD" || item.cc === "EUR");

  //     setRenderList([...renderList, ...currencyArray]);
  //     console.log(renderList)
  //     console.log(currencyArray)
  //   }
  //   catch (error) {
  //     console.error(error)
  //   }
  // };

  useEffect(() => {
    axiocurrencyRequest(renderList, setRenderList);
  }, [])

  const onChangeFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentFieldValue = { code: e.currentTarget.dataset['currency'] || '', value: e.currentTarget.value };

    console.log(currentFieldValue)
    setCurrency(currentFieldValue);
  }



  return (
    <div className='converter'>
      <CurrencyList currencies={renderList} inputValue={currency} onChangeFieldHandler={onChangeFieldHandler} />
      <CurrencyList listId={1} currencies={renderList} inputValue={currency} onChangeFieldHandler={onChangeFieldHandler} />
    </div>
  )
}
