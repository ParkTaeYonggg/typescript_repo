import React, {useState} from "react";
import TestUseMemoMain from "./testUseMemoMain";

export default function TestUseMemo () {
    const [num, setNum] = useState(0);
    const [text, setText] = useState("");

    const increseNum = () => { setNum(num + 1) }
    const decreseNum = () => { setNum(num - 1)}

    const handlerValues = (e) => { setText(e.target.value) }


    return (
        <>
            <section>
                <button onClick={increseNum}>+</button>
                <button onClick={decreseNum}>-</button>
            </section>
            <section>
                <input type="text"
                       value={text}
                       onChange={e => handlerValues(e)}
                       name="temp"/>
            </section>
            <TestUseMemoMain num={num} text={text}/>
        </>
    );
}