import React, {useState} from 'react';
import './App.css';
import NewComponent2 from "./NewComponent2";

export type FilterType = 'all' | 'dollar' | 'ruble'

function App3() {
    const [money, setMoney] = useState([
        {banknots: 'dollar', value: 100, number: ' a1234567890'},
        {banknots: 'dollar', value: 50, number: ' z1234567890'},
        {banknots: 'ruble', value: 100, number: ' w1234567890'},
        {banknots: 'dollar', value: 100, number: ' e1234567890'},
        {banknots: 'dollar', value: 50, number: ' c1234567890'},
        {banknots: 'ruble', value: 100, number: ' r1234567890'},
        {banknots: 'dollar', value: 50, number: ' x1234567890'},
        {banknots: 'ruble', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'dollar');
    }
    if(filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'ruble');
    }

    const onclickFilterHundler = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div>
            <NewComponent2 currentMoney={currentMoney} onclickFilterHundler={onclickFilterHundler}/>
            {/*<ul>
                {currentMoney.map((objectFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArr.banknots}</span>
                            <span>{objectFromMoneyArr.value}</span>
                            <span>{objectFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=>onclickFilterHundler('all')}>all</button>
                <button onClick={()=>onclickFilterHundler('ruble')}>rubles</button>
                <button onClick={()=>onclickFilterHundler('dollar')}>dollars</button>
            </div>*/}
        </div>
    );
}

export default App3;
