import {useState} from 'react';

type ButonProps = {
    text: string;
}

export function Button(props: ButonProps) {
    
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter - 1)
    }

    return (
        <button onClick={increment}>
            {props.text} {counter}
        </button>
    )
}