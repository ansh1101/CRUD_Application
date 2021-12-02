import React, { useState } from 'react';
import axios from 'axios';

export default function Currency() {

    const [baseCurrency, setBaseCurrency] = useState('');
    const OnChange = (event) => {
        return setBaseCurrency(event.target.value);
    };
    const [convertingCurrency, setConvertingCurrency] = useState('');
    const OnChange2 = (event) => {
        return setConvertingCurrency(event.target.value);
    };
    const [amount, setAmount] = useState();
    const OnChange3 = (event) => {
        return setAmount(event.target.value);
    };
    const [result, setResult] = useState();

    const handleChange = () => {
        axios.post('https://immense-badlands-43639.herokuapp.com/currencyConverter', {
            baseCurrency: baseCurrency.toUpperCase(), currency: convertingCurrency.toUpperCase(), amount: parseInt(amount)
        })
            .then(response => {
                setResult('Converted Amount : ' + response.data[baseCurrency.toUpperCase()]);
                console.log('e')
            }).catch(e => console.log(e))
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (

        <>

            <div className='the-container'>
                <div className='container-curr'>
                    <h1>Currency Converter</h1>
                    <form onSubmit={handleSubmit} name='calculator'>
                        <table>
                            <tr>
                                <td>
                                    <input onChange={OnChange} className='input' type="text" placeholder='Base Currency' name='Base Currency'></input>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <input onChange={OnChange2} className='input' type="text" placeholder='Converting Currency' name='Converting Currency'></input>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <input onChange={OnChange3} className='input' type="number" placeholder='Enter Amount' name='Amount'></input>
                                </td>
                            </tr>
                        </table>

                        <button onSubmit={handleSubmit} type='button' onClick={handleChange} className='currency-btn'>
                            Convert
                        </button>

                    </form>

                    <output className='output-currency' name='Output'>{result}</output>

                </div>
            </div>

        </>
    );
};
