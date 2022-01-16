import React, { Fragment, lazy, Suspense } from "react";


const LazyImgs = lazy(() => import("./imgLazyImage"));

export default function ImgLazyItem ({id, src, name}) {
    
    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                <LazyImgs src={src} 
                          name={name}
                          key={id}/>
            </Suspense>
        </Fragment>
    );
}