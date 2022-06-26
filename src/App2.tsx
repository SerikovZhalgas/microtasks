import React, {useState} from 'react';

function App2() {

    // let a=1
    let[a, setA]=useState(1)

    const onclickHundler1 = ()=>{
        setA(++a);
        console.log(a)
    }

    const onclickHundler2 = ()=>{
        setA(0);
        console.log(a);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onclickHundler1}>number</button>
            <button onClick={onclickHundler2}>0</button>
        </div>
    );
}

export default App2;
