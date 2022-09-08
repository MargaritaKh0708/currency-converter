import {IConverterProps} from 'components/converter/Converter'



export const Header: React.FC<IConverterProps> =({renderList}) => {

    const date: string = renderList[0].exchangedate;

     return (
        <header className='header'>
            <div className='header__wrapper'>
                <p className='header__title'> <span className='header__subtitle'>
                    Exchange Rates:</span></p>
                <p>{renderList.map(currency => 
                currency.rate!==1?
                <span className='header__current-currency'>{currency.txt}:&nbsp;
                <span className='header__current-rate'>{(currency.rate).toFixed(2)} грн.&nbsp;</span></span>
                :false
                   )}</p>
            </div>
        </header>
     )
}