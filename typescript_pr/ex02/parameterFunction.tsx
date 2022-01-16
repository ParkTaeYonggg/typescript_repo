import React from "react";

const animal = {
    cat: "야옹",
    dog: "멍멍"
}
export default function ParameterFunction () {
    function AnimalSound(obj: {cat: string}) {
        return obj.cat
    }
    return (
        <>
            <h1>{AnimalSound(animal)}</h1>
        </>
    )
}