
import {ICurrencyState, IConverterItem} from '../Converter'


interface IInputFieldProps {
    onChangeFieldHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    choosedCurrencyCode: string;
    choosedCurrencyRate: number;
    inputValue: ICurrencyState;
    currenciesList: IConverterItem[];
}

export const InputField: React.FC<IInputFieldProps> =({onChangeFieldHandler,  choosedCurrencyCode,
    choosedCurrencyRate, inputValue, currenciesList
})=> {

    const rate = currenciesList.find(item => item.cc === inputValue.code)
    console.log(rate)

    return (
        <>
        <input  
        className='input-field'
        data-currency = {choosedCurrencyCode}
        value={choosedCurrencyCode === inputValue.code ? inputValue.value : (+inputValue.value*(rate?.rate||1)/ choosedCurrencyRate).toFixed(2)}
        onChange= {onChangeFieldHandler}
        />
        </>
    )
}