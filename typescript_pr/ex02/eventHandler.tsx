import React from "react";

class HandlerOnclick {
    onClick(e: Event) { console.log("clicked"); console.log(e.type)};
}
export default function EventHandler() {
    const handlerOnclick = new HandlerOnclick();
    return (
        <>
            <button onClick={handlerOnclick.onClick}>이벤트핸들러</button>
        </>
    )
}