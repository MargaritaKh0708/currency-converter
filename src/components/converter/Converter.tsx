import React, {useState } from "react";
import { CurrencyList } from './select/CurrencyList'


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


export interface IConverterProps {
renderList: IConverterItem[]
}

export const Converter: React.FC<IConverterProps> = ({renderList}) => {
  
  const [currency, setCurrency] = useState<ICurrencyState>({
    code: '',
    value: '',
  });

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
