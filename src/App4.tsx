import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button2} from "./components/Button2";



const App4 = () => {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')

    const onClickInputHundler = ()=> {
        addMessage(title)
        setTitle('')
    }

    const addMessage = (title:string) => {
        let NewMessage = {message: title}
        setMessage([NewMessage,...message]);
    }

    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button2 name={'+'} callBack={onClickInputHundler}/>
            {/*<div>
                <input/>
                <button>+</button>
            </div>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App4;
