import React, { Fragment } from "react";
import styled from "styled-components";

export default function StyledInput ({ id, name, type, labeling, value, onChange, placeholder }) {
    return (
        <Fragment>
                <label for={id}>{labeling}</label>
                <StyledInputTag id={id}
                                name={name}
                                type={type}
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder}/>
        </Fragment>
    )
}

const StyledInputTag = styled.input`
    border: none;
    border-bottom: 2px solid orange;
`;