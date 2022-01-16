import React from "react";
import ImgLazyItem from "./imgLazyItem";
import { imgsJsx } from "./imgTempDB";

export default function ImgLazyWrapper () {
    return (
        <div>
            {imgsJsx.map(e => <ImgLazyItem src={e.src} 
                                           key={e.id} 
                                           name={e.name}/>
            )}
        </div>
    );
}