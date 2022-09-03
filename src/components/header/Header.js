import {useEffect, useState} from "react";

import {getCurrency} from "../../services/currency.api.service";
import './header-styles.css';

function Header() {

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getCurrency().then(value => setCurrencies(value.rates));
    }, []);

    const format = (number) => {
        return number.toFixed(2);

    }

    const usd = format(currencies.UAH / currencies.USD);
    const euro = format(currencies.UAH / currencies.EUR);

    return (
        <div className={'header'}>
            <div className={'header__wrapper'}>
                <div className="logo">
                    currency swap
                </div>
                <div className="header__items">
                    <div className="usd-item">&#36; {usd}</div>
                    <div className="euro-item">&#8364; {euro} </div>
                </div>
            </div>
        </div>
    );

}

export {Header}