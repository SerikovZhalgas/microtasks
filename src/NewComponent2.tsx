import React from "react";
import {FilterType} from "./App3";

type NewComponent2Type = {
    currentMoney: MoneyType[]
    onclickFilterHundler: (filter:FilterType)=>void
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}

const NewComponent2 = (props: NewComponent2Type) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objectFromMoneyArr, index) => {
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
                <button onClick={()=>props.onclickFilterHundler('all')}>All</button>
                <button onClick={()=>props.onclickFilterHundler('dollar')}>Dollar</button>
                <button onClick={()=>props.onclickFilterHundler('ruble')}>Ruble</button>
            </div>
        </div>
    )
}

export default NewComponent2;