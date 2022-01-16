import React from "react";

export default function Ex01 () {
    const str: string = "str는 스트링타입입니다."
    const num: number = 10
    const boo: boolean = false
    const arr: Array<number> = [1,2,3]
    const arrTuple: [string,number] = ["튜플",28];
    const arrEnum = ["1째","2째","3째"];
    const arrAny: any = ["ㅋㅋ",11,true];
    const voidType: void = null;
    return (
        <>
            <h1>기초 1: type annotation</h1>
            <ul>
                <li>{str}</li>
                <li>num은 넘버타입입니다. {num}</li>
                <li>boo는 불리언타입 입니다. {boo + ""}</li>
                <li>arr는 기존방식과 똑같습니다. 제네릭, 튜블, 이넘등등, any..
                    <ol>
                        <li>기존방식(제네릭) : {arr}</li>
                        <li>튜블(선지정개념) : {arrTuple}</li>
                        <li>이넘(인덱스접근 --2번인덱스) : {arrEnum[2]}</li>
                        <li>any(암거나) : {arrAny + " "}</li>
                    </ol>
                </li>
                <li>void는 언디랑널만 할당 받습니다. : {voidType + ""}</li>
            </ul>
        </>
    )
}