import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber:string, age:number, address: string)=>{
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber:string)=>{
        console.log(subscriber)
    }
    const Button3Foo = ()=>{
        console.log('Im stupid button')
    }


    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={()=>Button1Foo('Im Vasya', 21, 'live im Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>Button2Foo('Im Ivan')}/>
            <Button name={'stupid button'} callBack={Button3Foo}/>
        </div>
    );
}







/*function App() {
/!*    const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Im VASYA!')
    }
    const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Im IVAN!')
    }*!/

/!*    const onClickHundler = (name: string) => {
        console.log(name)
    }*!/

/!*    const foo1=()=>{
        console.log(100200)
    }
    const foo2=(num:number)=>{
        console.log(num);
    }*!/


    return (
        <div className="App">
            {/!*<button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChannel-1</button>*!/}
            {/!*<button onClick={myFirstSubscriber}>MyYouTubeChannel-1</button>*!/}


            {/!*<button onClick={(event)=>onClickHundler('VASYA')}>MyYouTubeChannel-1</button>
            <button onClick={(event)=>onClickHundler('IVAN')}>MyYouTubeChannel-2</button>*!/}


            {/!*<button onClick={(event)=>onClickHundler('some info')}>MyYouTubeChannel-3</button>*!/}
            {/!*<button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>*!/}
        </div>
    );
}*/

export default App;
