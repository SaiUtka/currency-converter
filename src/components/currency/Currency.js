import {useState} from "react";
import {useEffect} from "react";

import {getCurrency} from "../../services/currency.api.service";
import {CurrencyInput} from "../currencyInput/CurrencyInput";

import './currency-styles.css';


function Currency() {

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getCurrency().then(value => setCurrencies(value.rates));
    }, []);

    const [currencyValue1, setCurrencyValue1] = useState('USD');
    const [currencyValue2, setCurrencyValue2] = useState('UAH');

    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);

    const format = (number) => {
        return number.toFixed(2);
    }

    const handle1AmountOnChange = (amount1) => {
        setAmount1(amount1);
        setAmount2(format(amount1 * currencies[currencyValue2] / currencies[currencyValue1]));
    }

    const handle2AmountOnChange = (amount2) => {
        setAmount2(amount2);
        setAmount1(format(amount2 * currencies[currencyValue1] / currencies[currencyValue2]));
    }

    const handle1CurrencyOnChange = (currencyValue1) => {
        setCurrencyValue1(currencyValue1);
        setAmount2(format(amount1 * currencies[currencyValue2] / currencies[currencyValue1]));
    }

    const handle2CurrencyOnChange = (currencyValue2) => {
        setCurrencyValue2(currencyValue2);
        setAmount2(format(amount1 * currencies[currencyValue2] / currencies[currencyValue1]));
    }

    return (
        <div className={'currency__section'}>

            <CurrencyInput currencies={currencies} currencyValue={currencyValue1}
                           amount={amount1} handle1AmountOnChange={handle1AmountOnChange}
                           handleCurrencyOnChange={handle1CurrencyOnChange}/>

            <CurrencyInput currencies={currencies} currencyValue={currencyValue2}
                           amount={amount2} handleCurrencyOnChange={handle2CurrencyOnChange}
                           handle1AmountOnChange={handle2AmountOnChange}/>

        </div>
    );

}

export {Currency};