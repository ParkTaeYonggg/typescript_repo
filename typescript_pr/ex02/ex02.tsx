import React from "react";
import EventHandler from "./eventHandler";
import ParameterFunction from "./parameterFunction";

interface exInterface {
    id: number,
    name: string
    init(): any
    test: () => any
}
export default function Ex02 () {
    function fn1 (a: number, b: string) {
        return <h5>{a} : {b}</h5>
    }
    function fn2 (a: string, b?: number) {
        return <h5>{a}</h5>
    }

    const fn3: exInterface = {
        id: 0,
        name: "인터페이스를 가져다 쓴 함수",
        init: function () {console.log(this)},
        test: () => {console.log(this)}
    }
    return (
        <>
            <h1>기초2 : 함수</h1>
            {fn1(1,"디폴트어노테이션?")}
            {fn2("2번째 함수는 인자값이 2갠데 1개만 넣어도 실행이 된다.")}
            <h5>fn3는 콘솔창에 나온다. 콜백함수와 에로우펑션의 차이도 볼 수 있다.</h5>
            {fn3.init()}
            {fn3.test()}           
            <EventHandler /> 
            <ParameterFunction />
        </>
    )
}