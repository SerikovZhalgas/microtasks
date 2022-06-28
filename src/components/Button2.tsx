import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=> void
}

export const Button2 = (props:ButtonPropsType) => {
    const onClickInputHundler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickInputHundler}>{props.name}</button>
    );
};

