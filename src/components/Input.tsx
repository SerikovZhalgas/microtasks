import React, {ChangeEvent} from 'react';

type InpitPropsType = {
    setTitle: (title:string)=>void
    title: string
}

export const Input = (props:InpitPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
            <input value={props.title} onChange={onChangeInputHandler}/>
    );
};
