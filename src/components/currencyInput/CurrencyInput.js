import './currencyInput-styles.css';

function CurrencyInput({amount, currencyValue, currencies, handle1AmountOnChange, handleCurrencyOnChange}) {

    return (
        <div className={'currency-form'}>
            <input type="number"  value={amount} onChange={e => handle1AmountOnChange(e.target.value)}/>
            <select value={currencyValue} onChange={e => handleCurrencyOnChange(e.target.value)}>
                {Object.keys(currencies).map(currency => <option key={currencies[currency]}>{currency}</option> )}
            </select>
        </div>
    );

}

export {CurrencyInput}