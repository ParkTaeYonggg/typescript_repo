import React, {useMemo, useCallback} from "react";

export default function TestUseMemoMain ({text, num}) {
    const numConsole = (n) => {
        console.log(n*2);
        return n*2
    }
    const TextConsole = (t) => {
        console.log(t);
        return t
    }

    return (
        <div>
            {useMemo(() => TextConsole(text),[num])}<br/>
            {useMemo(() => numConsole(num),[text])}
        </div>
    )
}