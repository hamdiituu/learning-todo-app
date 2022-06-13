import { useState } from "react";

function Counter({ text = "Sayac", value }) {
    return (
        <div>
            <h1>
                {text} : {value}
            </h1>
            <hr />
        </div>
    );
}

function App() {
    let count = 11;
    const [count1, setCount1] = useState(11);

    const upCount = () => {
        console.log(count);
        setCount1(count1 + 1);
        count = count + 1;
    };
    const downCount = () => {
        console.log(count);
        setCount1(count1 - 1);
        count = count - 1;
    };
    return (
        <div>
            <h1>Sayac : {count}</h1>
            
            <h1>Sayac2 : {count1}</h1>
          
            <Counter value={count} />
            <Counter text="Sayac2" value={count1} />
            <button onClick={upCount}>Arttır</button>
            <button onClick={downCount}>Azalt</button>
        </div>
    );
}

export default App;
