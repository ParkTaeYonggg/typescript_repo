import React from "react";

export default function ImgLazyImage ({src, name}) {
    return (
        <img src={src} 
             alt={name} 
             style={{width:"300px"}}/>
    );
}