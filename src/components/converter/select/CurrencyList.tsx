import { IConverterItem, ICurrencyState } from "../Converter";
import { InputField } from "../input-field/InputField";
import { useOnClickOutside } from "usehooks-ts";
import { flags } from "../../flags/flag";
import { useState, useRef } from "react";
import dollar from "assets/icons/usd.png";


export interface ICurrencyListProps {
  onChangeFieldHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currencies: IConverterItem[];
  inputValue: ICurrencyState;
  listId?: number;
}

export const CurrencyList: React.FC<ICurrencyListProps> = ({
  currencies,
  onChangeFieldHandler,
  inputValue,
  listId,
}) => {
  const [choosedCurrency, setChoosedCurrency] = useState<{
    code: string;
    rate: number;
  }>({
    code: "",
    rate: 0,
  }); // state for keeping information about currency that was choosed by user from list

  const [hiddenList, setHiddenList] = useState<boolean>(false); // for fake select opening
  const ref = useRef(null);

  //Handler for currency list item
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCurrency = {
      code: e.currentTarget.dataset["currency"] || "",
      rate: +e.currentTarget.value,
    };
    console.log(currentCurrency);
    setChoosedCurrency(currentCurrency);
  };

  //Choose icon
  let icon = flags.find(
    (flag) => flag.currencyCode === choosedCurrency.code
  ) 
  console.log('icon', icon)
  console.log('code', choosedCurrency.code)

  //for click outside of form
  const handleClickOutside = () => {
    setHiddenList(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="converter__item" ref={ref}>
      <div className="converter__item-list">
        <button
          className="select__btn"
          onClick={() => setHiddenList(hiddenList ? false : true)}
        >
          {choosedCurrency.code ? (
            <div className="select__icon">
              <img src={icon?.icon} alt="currency-icon" />
            </div>
          ) : (
            ""
          )}
          <span className="select__input">
            {choosedCurrency.code || "Choose your currency"}
          </span>
        </button>
        <div
          className={
            hiddenList ? "select__hidden-list active" : "select__hidden-list"
          }
        >
          {currencies.map((currency, index) => (
            <label className="select__discription" key={currency.r030 + index}>
              <input
                value={currency.rate}
                data-currency={currency.cc}
                className="select__item-input"
                onChange={onChangeHandler}
                type="radio"
                name={`selectName${listId || ""}`}
                onClick={() => setHiddenList(false)}
              />
              <span className="select__item-description">{currency.txt}</span>
            </label>
          ))}
        </div>
      </div>
      <InputField
        currenciesList={currencies}
        onChangeFieldHandler={onChangeFieldHandler}
        choosedCurrencyCode={choosedCurrency.code}
        choosedCurrencyRate={choosedCurrency.rate}
        inputValue={inputValue}
      />
    </div>
  );
};
